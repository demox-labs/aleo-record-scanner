import Knex from 'knex';
import config from './knexfile';

let knexWriteConfig;
let knexReadConfig;

switch(process.env.NODE_ENV) {
  case("production"):
    knexWriteConfig = config.production;
    knexReadConfig = config.readOnly;
    break;
  case("development"):
    knexWriteConfig = config.development;
    knexReadConfig = config.readOnly;
    break;
  case("test"):
    knexWriteConfig = config.test;
    knexReadConfig = config.test;
    break;
  default:
    knexWriteConfig = config.development;
    knexReadConfig = config.readOnly;
    break;
}

export const writeKnexDB = Knex(knexWriteConfig);
export const readOnlyKnexDB = Knex(knexReadConfig);
