import * as dotenv from 'dotenv';
dotenv.config();

import app from './app';
import logger from './shared/logger';
import sync from './sync/index';

// Start the server
const port = Number(process.env.API_PORT || 3000);

const server = app.listen(port, () => {
   logger.info('Aleo RPC server started on port: ' + port);
   logger.info('Using REST endpoint: ' + process.env.REST_ENDPOINT);
   logger.info('Using validator endpoint: ' + process.env.VALIDATOR_REST_ENDPOINT);
});

// Set server timeout parsing headers
server.headersTimeout = 1000 * 20; // 20 seconds
// Set server socket timeout protecting against slowloris attacks
server.requestTimeout = 1000 * 30; // 30 seconds
server.timeout = 1000 * 45; // 45 seconds

sync.start();