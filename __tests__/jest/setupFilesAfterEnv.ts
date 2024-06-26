import { writeKnexDB, readOnlyKnexDB } from "../../src/db/knexDb";
import { redisDb } from "../../src/middleware/redisDb";
import logger from "../../src/shared/logger";

global.beforeAll(() => {
  // Turn off potential cloudwatch transport as it causes tests to hang.
  const cloudwatchTransport = logger.transports.find((t: any) => t.name == "cloudwatch-sync");
  if (cloudwatchTransport) {
    cloudwatchTransport.silent = true;
  }
});

// sever db connection after each test file runs to prevent a dangling connection
global.afterAll(async () => {
  await writeKnexDB.destroy();
  await readOnlyKnexDB.destroy();
  redisDb.disconnect();

  // Turn potential transport back on
  const cloudwatchTransport = logger.transports.find((t: any) => t.name == "cloudwatch-sync");
  if (cloudwatchTransport) {
    cloudwatchTransport.silent = false;
  }
});