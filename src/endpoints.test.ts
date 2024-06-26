import * as endpoints from "./endpoints";
import { enableFetchMocks } from 'jest-fetch-mock';
import logger from "./shared/logger";

enableFetchMocks();

describe('Endpoints', () => {
  describe('blocksPath', () => {
    it('should return blocks path', () => {
      expect(endpoints.blocksPath(1, 2)).toEqual('/blocks?start=1&end=2');
    });
  });

  describe('mappingValuePath', () => {
    it('should return mapping value path', () => {
      expect(endpoints.mappingValuePath('credits.aleo', 'account', 'aleo1blahblah')).toEqual('/program/credits.aleo/mapping/account/aleo1blahblah');
    });
  });

  describe('mappingsPath', () => {
    it('should return mappings path', () => {
      expect(endpoints.mappingsPath('credits.aleo')).toEqual('/program/credits.aleo/mappings');
    });
  });

  describe('transactionByTransitionIdPath', () => {
    it('should return transaction by transition id path', () => {
      expect(endpoints.transactionByTransitionIdPath('blahblah')).toEqual('/find/transactionID/blahblah');
    });
  });

  describe('getBestResult', () => {
    it('should return an Error if both PromiseResults failed', async () => {
      expect.assertions(1);
      try {
        await endpoints.getBestResult(
          { id: '1', failed: true, result: 'error1' },
          { id: '2', failed: true, result: 'error2' }
        );
      } catch (error) {
        expect((error as Error).message).toBe('Both fetch height endpoints failed');
      }
    });

    it('should return demox Result and height if the aleo Result failed', async () => {
      const result = await endpoints.getBestResult(
        { id: 'demox', failed: false, result: { text: () => '5' } },
        { id: 'aleo', failed: true, result: 'error' }
      );
      expect(result.best.id).toBe('demox');
      expect(result.height).toBe(5);
    });

    it('should return aleo Result and height if demox aleo Result failed', async () => {
      const result = await endpoints.getBestResult(
        { id: 'demox', failed: true, result: 'error' },
        { id: 'aleo', failed: false, result: { text: () => '5' } }
      );
      expect(result.best.id).toBe('aleo');
      expect(result.height).toBe(5);
    });

    it.each([
      [ 'demox', 'MinWait', 'demox' ],
      [ 'demox', 'MaxWait', 'demox' ],
      [ 'MinWait', 'aleo', 'aleo' ],
      [ 'MaxWait', 'aleo', 'aleo' ]
    ])('should return demox Result and height if the aleo Result failed', async (demoxResult: string, aleoResult: string, expected: string) => {
      const result = await endpoints.getBestResult(
        { id: demoxResult, failed: false, result: { text: () => '5' } },
        { id: aleoResult, failed: false, result: { text: () => '5' } }
      );
      expect(result.best.id).toBe(expected);
    });

    it.each(['MinWait', 'MaxWait'])('should return timeout result and 0 height if both results are MinWait', async (timeoutId: string) => {
      const result = await endpoints.getBestResult(
        { id: timeoutId, failed: false, result: 'none' },
        { id: timeoutId, failed: false, result: 'none' }
      );
      expect(result.best.id).toBe(timeoutId);
      expect(result.height).toBe(0);
    });
  });

  xdescribe('fetchWithTimeout', () => {
    beforeEach(() => {
      jest.spyOn(logger, 'error');
    });

    it('should complete the fetch successfully before timeout', async () => {
        const mockFetch = (fetch as jest.Mock).mockResolvedValue('mock response');
        const result = await endpoints.fetchWithTimeout('http://example.com', {}, 50);
        expect(mockFetch).toHaveBeenCalled();
        expect(result).toEqual('mock response');
    });

    it('should time out if the fetch takes too long', async () => {
      jest.useFakeTimers();
      (fetch as jest.Mock).mockImplementation(() => {
          return new Promise(resolve => setTimeout(() => resolve(null), 10));
      });
  
      const timeoutDuration = 1; // Set the timeout duration to 1ms
      const fetchPromise = endpoints.fetchWithTimeout('http://example.com', {}, timeoutDuration);
  
      jest.advanceTimersByTime(timeoutDuration); // Advance the timers by the timeout duration
  
      await expect(fetchPromise).resolves.toBeNull();
      jest.useRealTimers();
    });

    it('should catch fetch errors and return null', async () => {
        const mockFetch = (fetch as jest.Mock).mockRejectedValue(new Error('Fetch failed'));
        await expect(endpoints.fetchWithTimeout('http://example.com', {}, 10)).resolves.toBeNull();
        expect(mockFetch).toHaveBeenCalled();
        expect(logger.error).toHaveBeenCalledWith(expect.any(Error));
    });
  });

  xdescribe('fetchEndpoint', () => {
    const demoxEndpoint = endpoints.VALIDATOR_URL;
    const aleoEndpoint = endpoints.ALEO_URL;
    const resource = '/resource';
    const options = { method: 'GET' };
    const timeout = 4000;
  
    beforeEach(() => {
      jest.clearAllMocks();
      jest.spyOn(endpoints, 'fetchWithTimeout');
      jest.spyOn(logger, 'error');
      process.env.JWT = 'test-jwt'; // Set JWT for the test
    });

    it('should attempt aleo endpoint if error thrown from demoxEndpoint', async () => {
      jest.spyOn(endpoints, 'fetchWithTimeout').mockRejectedValue(new Error('Network Error'));
      (fetch as jest.Mock).mockResolvedValue('aleo-response');
  
      const response = await endpoints.fetchEndpoint(resource, options);
  
      expect(endpoints.fetchWithTimeout).toHaveBeenCalledWith(demoxEndpoint + resource, expect.objectContaining(options), timeout);
      expect(logger.error).toHaveBeenCalledWith(expect.any(Error));
      expect(fetch).toHaveBeenCalledWith(aleoEndpoint + resource, options);
      expect(response).toEqual('aleo-response');
    });
  
    it('should successfully fetch from demoxEndpoint', async () => {
      jest.spyOn(endpoints, 'fetchWithTimeout').mockResolvedValue(new Response(null, { status: 200, statusText: 'OK' }));
      
      const response = await endpoints.fetchEndpoint(resource, options);
      
      expect(endpoints.fetchWithTimeout).toHaveBeenCalledWith(demoxEndpoint + resource, expect.objectContaining(options), timeout);
      expect(response).toEqual({ ok: true });
    });
  
    it('should fallback to aleoEndpoint on demoxEndpoint failure', async () => {
      jest.spyOn(endpoints, 'fetchWithTimeout').mockResolvedValue(new Response(null, { status: 500, statusText: 'Error' }));
      (fetch as jest.Mock).mockResolvedValue('aleo-response');
  
      const response = await endpoints.fetchEndpoint(resource, options);
  
      expect(endpoints.fetchWithTimeout).toHaveBeenCalledWith(demoxEndpoint + resource, expect.objectContaining(options), timeout);
      expect(logger.error).toHaveBeenCalledWith(expect.any(String));
      expect(fetch).toHaveBeenCalledWith(aleoEndpoint + resource, options);
      expect(response).toEqual('aleo-response');
    });
  
    it('should handle errors gracefully', async () => {
      jest.spyOn(endpoints, 'fetchWithTimeout').mockRejectedValue(new Error('Network Error'));
  
      await endpoints.fetchEndpoint(resource, options);
  
      expect(logger.error).toHaveBeenCalledWith(expect.any(Error));
    });
  });
});