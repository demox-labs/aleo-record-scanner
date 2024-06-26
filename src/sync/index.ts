import AsyncLock from 'async-lock';
import * as dotenv from 'dotenv';
import { getHeight } from '../db/db-queries';
import { saveBlocks } from '../db';
import logger from '../shared/logger';
import { fetchEndpoint, blocksPath, blockPath, fetchHeightAndSetLeadSource, fetchDemoxHeight } from '../endpoints';
dotenv.config();

const lock = new AsyncLock();

class Sync {
  syncTime: number; // in milliseconds
  blocksPerRequest = 5;
  requestInParallel = 2;
  parallelLimit = 25;
  canParallelize = true;
  minHeight = -1;

  constructor() {
    // We should set a lock on syncing in REDIS to prevent multiple syncs running at the same time
    // this.syncTime = parseInt(process.env.SYNC_TIME || '3000');
    this.syncTime = parseInt('5000');
  }

  start() {
    if (process.env.SYNC == 'true') {
      logger.info(`Starting sync job every: ${this.syncTime / 1000} seconds`);
      setInterval(() => this.updateDBJob(), this.syncTime);
      // setInterval(() => this.updateDBBlockByBlock(), this.syncTime);
    }
  }

  // This is a temporary function to sync the db with the chain
  // TODO: Remove this function and use the syncBlockRange
  async updateDBBlockByBlock() {
    if (lock.isBusy(`syncing-chain`)) return;
    
    lock
      .acquire(`syncing-chain`, async () => {
        logger.info('Running sync job');
        try {
          const dbHeight = Math.max(this.minHeight, await this.getDBHeight());
          const chainHeight = await this.getChainHeight();
          logger.info(`DB height: ${dbHeight}, Chain Height: ${chainHeight}`);

          if (this.canParallelize && dbHeight < chainHeight - this.parallelLimit) {
            const start = dbHeight + 1;
            logger.info(`Fetching blocks one by one in parallel from: ${start} and updating db...`);

            const blocksTasks: Promise<any>[] = [];
            for (let i = start; i < start + this.requestInParallel; i += this.blocksPerRequest) {
              blocksTasks.push(this.fetchBlock(i));
            }
            const blocks = await Promise.all(blocksTasks);
            await saveBlocks(blocks);
            logger.info(`Blocks saved from: ${start} to ${start + this.requestInParallel}`);
          } else if (dbHeight < chainHeight) {
            const start = dbHeight + 1;
            logger.info(`Fetching block ${start} and updating db...`);
            await this.updateDbByBlock(start);
            logger.info(`Block saved: ${start}`);
          }
        } catch (e) {
          console.log(e);
          logger.error(e);
        }
    })
    .catch(e => {
      console.log(e);
      logger.error(e);
    });
  }

  async updateDBJob() {
    if (lock.isBusy(`syncing-chain`)) return false;
    
    lock
      .acquire(`syncing-chain`, async () => {
        logger.info('Running sync job');
        try {
          const dbHeight = Math.max(this.minHeight, await this.getDBHeight());
          const chainHeight = await this.getChainHeight();
          logger.info(`DB height: ${dbHeight}, Chain Height: ${chainHeight}`);

          if (this.canParallelize && dbHeight < chainHeight - this.parallelLimit) {
            const start = dbHeight + 1;
            const end = Math.min(start + this.blocksPerRequest * this.requestInParallel, chainHeight + 1);
            logger.info(`Fetching blocks in parallel from: ${start} to ${end} (end exclusive) and updating db...`);

            const blocksTasks: Promise<any>[] = [];
            for (let i = start; i < end; i += this.blocksPerRequest) {
              const startBlock = i;
              const endBlock = Math.min(i + this.blocksPerRequest, end);
              blocksTasks.push(this.fetchBlocks(startBlock, endBlock));
            }
            const blocks = await Promise.all(blocksTasks);
            await saveBlocks(blocks.flat());
            logger.info(`Blocks saved from: ${start} to ${end}`);
          } else if (dbHeight < chainHeight) {
            const start = dbHeight + 1;
            const end = Math.min(start + this.blocksPerRequest, chainHeight + 1);
            logger.info(`Fetching blocks from: ${start} to ${end} (end exclusive) and updating db...`);
            await this.updateDB(start, end);
            logger.info(`Blocks saved from: ${start} to ${end}`);
          }

          return true;
        } catch (e) {
          console.log(e);
          logger.error(e);
        }
    })
    .catch(e => {
      console.log(e);
      logger.error(e);
    });

    return false;
  }

  async getDBHeight(): Promise<number | undefined> {
    return await getHeight();
  }

  async getChainHeight(): Promise<number> {
    // const height = await fetchHeightAndSetLeadSource();
    const height = await fetchDemoxHeight();
    return height;
  }

  async fetchBlocks(start: number, end: number): Promise<any> {
    const response = await fetchEndpoint(blocksPath(start, end));
    const blocks = await response.json();
    if (response.ok) {
      return blocks;
    } else {
      return Promise.reject(blocks);
    }
  }

  async fetchBlock(height: number): Promise<any> {
    const response = await fetchEndpoint(blockPath(height));
    if (response.ok) {
      const block = await response.json(); // Read the JSON body directly if response is OK
      return block;
    } else {
      console.log(await response.text()); // Log or handle the error response body as text
      return Promise.reject(new Error('Response not OK'));
    }
  }

  async updateDB(start: number, end: number) {
    const blocks = await this.fetchBlocks(start, end);
    await saveBlocks(blocks);
  }

  async updateDbByBlock(height: number) {
    const block = await this.fetchBlock(height);
    await saveBlocks([block]);
  }
}

const sync = new Sync();
export default sync;