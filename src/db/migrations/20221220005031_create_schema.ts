import { Knex } from 'knex';
import * as fs from 'fs';
import * as path from 'path';


export async function up(knex: Knex): Promise<void> {
  const sqlPath = path.join(__dirname, '..', 'seed', 'pg_dump.sql');
  const sql = fs.readFileSync(sqlPath, "utf8");
  await knex.raw(sql);
}


export async function down(knex: Knex): Promise<void> {
  await knex.raw('DROP SCHEMA explorer CASCADE;');
}

