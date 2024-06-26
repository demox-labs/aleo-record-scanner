import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import * as zlib from 'zlib';

import server from './server';
import logger from './shared/logger';
import { rateLimitMiddleware } from './middleware/throttle';
import { ALEO_URL, fetchEndpoint } from './endpoints';
import { getRecordOwnerInfosProtoBuf, isBlockHeightCurrent } from './db/db-queries';
import { RecordInfoList } from './proto/records';
import { isMoreThanFiveMinutesDifferent } from './shared/util';

// Middleware for checking the origin
const checkOriginMiddleware = (req: any, res: any, next: any) => {
  const allowedOrigin = 'chrome-extension://';
  const allowedUserAgent = 'LeoWalletApp';
  const origin = req.get('origin');
  const userAgent = req.headers['user-agent'];

  if (origin?.includes(allowedOrigin) === true || userAgent?.includes(allowedUserAgent) === true) {
    next();
  } else {
    logger.info('Unauthorized request to logging endpoint', { origin: origin, request: req });
    res.status(403).json({ message: 'Unauthorized request' });
  }
};

const app = express();
app.use(cors());
app.use(bodyParser.json({ limit: '150kb' }));
app.use("/", rateLimitMiddleware);
app.use("/log", checkOriginMiddleware);

app.get('/aleo/*', async (req, res) => {
  try {
    const endpoint = `${ALEO_URL}${req.url.replace('/aleo', '')}`;
    const response = await fetch(endpoint);
    res.status(response.status);
    // Forward headers
    for (const [key, value] of Object.entries(response.headers)) {
      res.setHeader(key, value);
    }

    // Forward body
    res.send(await response.text());
  } catch (error) {
    // Forward error
    if (error.response) {
      res.status(error.response.status).send(error.response.data);
    } else {
      res.status(500).send({ message: error.message });
    }
  }
});

app.post('/aleo/*', async (req, res) => {
  try {
    const endpoint = `${ALEO_URL}${req.url.replace('/aleo', '')}`;
    const response = await fetch(endpoint, {
      method: 'POST',
      body: JSON.stringify(req.body),
      headers: { 'Content-Type': 'application/json' },
    });
    res.status(response.status);
    // Forward headers
    for (const [key, value] of Object.entries(response.headers)) {
      res.setHeader(key, value);
    }

    // Forward body
    res.send(await response.text());
  } catch (error) {
    // Forward error
    if (error.response) {
      res.status(error.response.status).send(error.response.data);
    } else {
      res.status(500).send({ message: error.message });
    }
  }
});

const forwardRequest = async (path: string, res: any) => {
  try {
    const response = await fetchEndpoint(path);
    res.status(response.status);
    // Forward headers
    for (const [key, value] of Object.entries(response.headers)) {
      res.setHeader(key, value);
    }

    // Forward body
    res.send(await response.text());
  } catch (error) {
    // Forward error
    if (error.response) {
      res.status(error.response.status).send(error.response.data);
    } else {
      res.status(500).send({ message: error.message });
    }
  }
};

// pass through for the aleo program manager
app.get('/mainnet/statePath/:commitment', async (req, res) => {
  const path = req.url.slice(req.url.indexOf('/statePath/'));
  return await forwardRequest(path, res);
});

app.get('/mainnet/program/:programId', async (req, res) => {
  const path = req.url.slice(req.url.indexOf('/program/'));
  return await forwardRequest(path, res);
});

app.get('/mainnet/latest/stateRoot', async (req, res) => {
  const path = req.url.slice(req.url.indexOf('/latest/'));
  return await forwardRequest(path, res);
});

// TODO: remove?
// pass through for the aleo program manager for testnet
app.get('/testnet/statePath/:commitment', async (req, res) => {
  const path = req.url.slice(req.url.indexOf('/statePath/'));
  return await forwardRequest(path, res);
});

app.get('/testnet/program/:programId', async (req, res) => {
  const path = req.url.slice(req.url.indexOf('/program/'));
  return await forwardRequest(path, res);
});

app.get('/testnet/latest/stateRoot', async (req, res) => {
  const path = req.url.slice(req.url.indexOf('/latest/'));
  return await forwardRequest(path, res);
});

app.post("/", (req, res) => {
  const jsonRPCRequest = req.body;
  // server.receive takes a JSON-RPC request and returns a promise of a JSON-RPC response.
  // It can also receive an array of requests, in which case it may return an array of responses.
  // Alternatively, you can use server.receiveJSON, which takes JSON string as is (in this case req.body).
  server.receive(jsonRPCRequest).then((jsonRPCResponse) => {
    if (jsonRPCResponse) {
      res.json(jsonRPCResponse);
    } else {
      // If response is absent, it was a JSON-RPC notification method.
      // Respond with no content status (204).
      res.sendStatus(204);
    }
  });
});

app.get("/ping", (req, res) => {
  res.sendStatus(200);
});

app.get("/blockHeightIsCurrent", async (req, res) => {
  const isCurrent = await isBlockHeightCurrent();
  if (isCurrent) {
    res.sendStatus(200);
  }
  else {
    res.sendStatus(500);
  }
});

app.get("/aleoApiHeightIsCurrent", async (req, res) => {
  try {
    const currentBlock = await fetch(`${ALEO_URL}/latest/block`);
    const json = await currentBlock.json();
    const currentBlockTimestamp = json.header.metadata.timestamp;
    !isMoreThanFiveMinutesDifferent(currentBlockTimestamp) ? res.sendStatus(200) : res.sendStatus(500);
  } catch (error) {
    res.sendStatus(500);
  }
});

app.post("/log", (req, res) => {
  logger.log(req.body.level, req.body.message, req.body.meta);
  res.sendStatus(200);
});

/**
 * Special logic for optimizing reducing record data
 */

async function processRequest(params: { start: number, end: number, page?: number, recordsPerRequest?: number }) {
  if (params.page < 0 || params.recordsPerRequest < 0) {
    throw new Error('Invalid parameters');
  } else if (params.recordsPerRequest > 50_000) {
    throw new Error('Max records per request is 50,000');
  }
  return await getRecordOwnerInfosProtoBuf(params.start, params.end, params.page, params.recordsPerRequest);
}

// Function to compress data (optional)
function compressData(data: Buffer): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    zlib.gzip(data, (err, compressedData) => {
      if (err) reject(err);
      else resolve(compressedData);
    });
  });
}

app.post('/record-infos', async (req, res) => {
  logger.info("Processing rpc request.", req.body);
  const start = new Date().getTime();

  try {
    const params = req.body.params;
    const records = await processRequest(params);

    // Serialize using Protobuf and compress (optional)
    const recordList = RecordInfoList.create({ records: records });

    // Serialize the RecordInfoList
    const serializedData = RecordInfoList.encode(recordList).finish();
    const compressedData = await compressData(Buffer.from(serializedData));

    const timeTaken = new Date().getTime() - start;
    logger.info(`Request handled in ${timeTaken}ms`, {"requestTime": timeTaken, ...req.body});

    // Set the appropriate header for binary data
    res.setHeader('Content-Type', 'application/octet-stream');
    res.send(compressedData);
  } catch (error) {
    console.error('Error processing request:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Export express instance
export default app;