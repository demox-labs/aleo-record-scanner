import type { Knex } from 'knex';
import * as dotenv from 'dotenv';
import * as path from 'path';

const configPath = path.resolve(__dirname, '../../.env');
dotenv.config({ path: configPath });

export const dbConnectionConfig = {
  client: "postgresql",
  connection: {
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASS
  },
  pool: {
    min: 3,
    max: 10,
    createTimeoutMillis: 3000,
    acquireTimeoutMillis: 30000,
    idleTimeoutMillis: 30000,
    reapIntervalMillis: 1000,
    createRetryIntervalMillis: 100,
    propagateCreateError: false
  },
  migrations: {
    tableName: "explorer_migrations",
    directory: './migrations'
  }
};

// Don't need this for migrations, but need it for read-only connections.
// Migrations & other updates should be made to the primary db, and will be reflected
// in the read only replica db.
const dbReadOnlyConnectionConfig = {
  client: "postgresql",
  connection: {
    port: process.env.DB_PORT,
    host: process.env.DB_READ_HOST,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASS
  },
  pool: {
    min: 1,
    max: 4,
    createTimeoutMillis: 3000,
    acquireTimeoutMillis: 30000,
    idleTimeoutMillis: 30000,
    reapIntervalMillis: 1000,
    createRetryIntervalMillis: 100,
    propagateCreateError: false
  }
};

const dbTestConnectionConfig = {
  client: "postgresql",
  connection: {
    port: process.env.DB_TEST_PORT,
    host: process.env.DB_TEST_HOST,
    database: process.env.DB_TEST_NAME,
    user: process.env.DB_TEST_USER,
    password: process.env.DB_TEST_PASS
  },
  pool: {
    min: 5,
    max: 15,
    createTimeoutMillis: 3000,
    acquireTimeoutMillis: 30000,
    idleTimeoutMillis: 30000,
    reapIntervalMillis: 1000,
    createRetryIntervalMillis: 100,
    propagateCreateError: false
  },
  migrations: {
    tableName: "explorer_migrations",
    directory: './migrations'
  }
};

// Need this object for migrations, otherwise use dbConnectionConfig
export const config: { [key: string]: Knex.Config } = {
  development: dbConnectionConfig,
  production: dbConnectionConfig,
  readOnly: dbReadOnlyConnectionConfig,
  test: dbTestConnectionConfig
}

export default config;
