import logger from "./shared/logger";
import { redisDb } from './middleware/redisDb';

export const ALEO_URL_BASE = process.env.REST_ENDPOINT;
export const ALEO_URL = ALEO_URL_BASE + '/testnet';
export const VALIDATOR_URL_BASE = process.env.VALIDATOR_REST_ENDPOINT;
export const VALIDATOR_URL = VALIDATOR_URL_BASE + '/testnet';
export const STATE_ROOT_PATH = '/latest/stateRoot';
export const STATE_PATH_PATH = '/statePath';
export const TRANSACTION_PATH = '/transaction';
export const blocksPath = (start: number, end: number) => `/blocks?start=${start}&end=${end}`;
export const blockPath = (height: number) => `/block/${height}`;
export const mappingValuePath = (programId: string, mappingName: string, key: string) => `/program/${programId}/mapping/${mappingName}/${key}`;
export const mappingsPath = (programId: string) => `/program/${programId}/mappings`;
export const transactionByTransitionIdPath = (transitionId: string) => `/find/transactionID/${transitionId}`;
export const CHAIN_HEIGHT_PATH = '/latest/height';

export enum EndpointSource {
  Aleo = 'ALEO',
  Demox = 'DEMOX'
}

const FETCH_TIMEOUT = 25_000;
const fetchEndpointInternal = async (url: string, resource: string, options?: RequestInit): Promise<Response> => {
  let leadEndpoint = await redisDb.get('leadEndpoint');
  leadEndpoint = leadEndpoint ?? EndpointSource.Demox;
  const demoxEndpoint = VALIDATOR_URL + resource;
  // TODO FIX: Store Demox & Aleo Height and use it to determine which endpoint to use
  const aleoEndpoint = url + resource;
  const jwt = process.env.JWT;
  try {
    // add jwt to headers for our validator endpoint
    const header = { Authorization: `Bearer ${jwt}` };
    const optionsWithJWT = options ? { ...options, headers: { ...options.headers, ...header } } : { headers: header };
    
    let primaryFetch = fetchWithTimeout(demoxEndpoint, optionsWithJWT, FETCH_TIMEOUT);
    // TODO FIX: Store Demox & Aleo Height and use it to determine which endpoint to use
    let secondaryFetch = fetchWithTimeout(aleoEndpoint, options, FETCH_TIMEOUT);
    if (leadEndpoint === EndpointSource.Aleo) {
      primaryFetch = fetchWithTimeout(aleoEndpoint, options, FETCH_TIMEOUT);
      secondaryFetch = fetchWithTimeout(demoxEndpoint, optionsWithJWT, FETCH_TIMEOUT);
    }

    const response = await primaryFetch;

    if (response && response?.ok) {
      return response;
    } else {
      logger.error(`Error fetching ${leadEndpoint}${resource} endpoint: ${response?.statusText}`);
      // // TODO FIX: Store Demox & Aleo Height and use it to determine which endpoint to use
      const backupResponse = await secondaryFetch;
      if (backupResponse && backupResponse.ok) {
        return backupResponse;
      } else {
        logger.error(`Error fetching backup ${leadEndpoint}${resource} endpoint: ${backupResponse?.statusText}`);
      }
    }
      
  } catch (error) {
    logger.error(`Error fetching from endpoints ${resource}: ${error}`);
  }
}

export const fetchEndpoint = async (resource: string, options?: RequestInit): Promise<Response> => {
  return await fetchEndpointInternal(ALEO_URL, resource, options);
}

export const fetchEndpointWithUrl = async (url: string, resource: string, options?: RequestInit): Promise<Response> => {
  return await fetchEndpointInternal(url, resource, options);
}

const SOFT_TIMEOUT = 12_000;
const HARD_TIMEOUT = 15_000;
const enum RaceResult {
  Aleo = 'ALEO',
  Demox = 'DEMOX',
  MinWait = 'MinWait',
  MaxWait = 'MaxWait'
}

type PromiseResult = { id: string, failed: boolean, result: any };
const wrapPromiseWithId = (promise: Promise<any>, id: string): Promise<PromiseResult> => (
  promise.then(result => ({ result, id, failed: false })).catch(error => ({ result: error, id, failed: true }))
);

export const fetchDemoxHeight = async (): Promise<number> => {
  const demoxApiRequest = fetch(VALIDATOR_URL + CHAIN_HEIGHT_PATH, { headers: { 'Authorization': `Bearer ${process.env.JWT}` } });
  return await getHeight({ result: await demoxApiRequest, id: RaceResult.Demox, failed: false });
}

export const fetchHeightAndSetLeadSource = async (): Promise<number> => {
  const aleoApiRequest = wrapPromiseWithId(fetch(ALEO_URL + CHAIN_HEIGHT_PATH), RaceResult.Aleo);
  const demoxApiRequest = wrapPromiseWithId(fetch(VALIDATOR_URL + CHAIN_HEIGHT_PATH, { headers: { 'Authorization': `Bearer ${process.env.JWT}` } }), RaceResult.Demox);
  const minWaitPromise = wrapPromiseWithId(new Promise(resolve => setTimeout(() => resolve({ id: 'minWait' }), SOFT_TIMEOUT)), RaceResult.MinWait);
  const maxWaitPromise = wrapPromiseWithId(new Promise(resolve => setTimeout(() => resolve({ id: 'maxWait' }), HARD_TIMEOUT)), RaceResult.MaxWait);

  // we include the max wait promise to get the full timeout started
  const aleoSoftTimeoutRace = Promise.race([aleoApiRequest, minWaitPromise, maxWaitPromise]);
  const demoxSoftTimeoutRace = Promise.race([demoxApiRequest, minWaitPromise, maxWaitPromise]);
  const [aleoResult, demoxResult]: PromiseResult[] = (await Promise.allSettled([aleoSoftTimeoutRace, demoxSoftTimeoutRace]) as any)
    .map((result: any) => result.value);

  const { best, height } = await getBestResult(aleoResult, demoxResult);
  if (best.id === RaceResult.MinWait) {
    // need to run another race among aleo, demox, and the max wait
    const requestsToWaitFor = [maxWaitPromise];
    if (aleoResult.id === RaceResult.MinWait) {
      requestsToWaitFor.push(aleoApiRequest);
    }
    if (demoxResult.id === RaceResult.MinWait) {
      requestsToWaitFor.push(demoxApiRequest);
    }
    const hardTimeoutResult = await Promise.race(requestsToWaitFor);
    await setLeadEndpoint(hardTimeoutResult);
    return await getHeight(hardTimeoutResult);
  }

  await setLeadEndpoint(best);
  return height;
};

// necessary to return both the result and height in one go as the body text can only be read once
export const getBestResult = async (
  aleoResult: PromiseResult,
  demoxResult: PromiseResult
  ): Promise<{best: PromiseResult, height: number}> => {
  if (aleoResult.failed && demoxResult.failed) {
    throw new Error('Both fetch height endpoints failed');
  }

  if (aleoResult.failed) {
    return { best: demoxResult, height: await getHeight(demoxResult) };
  }

  if (demoxResult.failed) {
    return { best: aleoResult, height: await getHeight(aleoResult) };
  }

  if (aleoResult.id === RaceResult.MinWait || aleoResult.id === RaceResult.MaxWait) {
    return { best: demoxResult, height: await getHeight(demoxResult) };
  }

  if (demoxResult.id === RaceResult.MinWait || demoxResult.id === RaceResult.MaxWait) {
    return { best: aleoResult, height: await getHeight(aleoResult) };
  }

  const aleoHeight = await getHeight(aleoResult);
  const demoxHeight = await getHeight(demoxResult);

  if (demoxHeight >= aleoHeight) {
    return { best: demoxResult, height: demoxHeight };
  } else {
    return { best: aleoResult, height: aleoHeight };
  }
}

const getHeight = async (result: PromiseResult): Promise<number> => {
  let height = 0;
  try {
    height = parseInt(await result.result.text());
  } catch (error) {
    console.error(error);
  }

  return height;
};

const setLeadEndpoint = async (endpointResult: PromiseResult) => {
  if (endpointResult.failed || endpointResult.id === RaceResult.MinWait || endpointResult.id === RaceResult.MaxWait) {
    return;
  }

  const endpoint = endpointResult.id === RaceResult.Aleo ? EndpointSource.Aleo : EndpointSource.Demox;

  try {
    await redisDb.set('leadEndpoint', endpoint);
    console.log('leading endpoint set: ', endpoint);
  } catch (error) {
    console.error(error);
  }
};

export const fetchWithTimeout = async (url: string, options: RequestInit, timeout: number) => {
  // Create a promise that rejects in <timeout> milliseconds
  const timeoutPromise: Promise<null> = new Promise((resolve) => {
      const _ = setTimeout(() => {
          clearTimeout(_);
          resolve(null);
      }, timeout);
  });

  try {
    // Races the fetch against the timeout
    return await Promise.race([
      fetch(url, options),
      timeoutPromise
    ]);
  } catch (error) {
    logger.error(`Error fetching ${url}: ${error}`);
    return null;
  }
}