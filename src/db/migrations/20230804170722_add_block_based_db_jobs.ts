import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.withSchema("explorer").createTable('block_based_db_jobs', (table) => {
    table.increments('id').primary().notNullable();
    table.text('job_name').notNullable();
    table.integer('target_block_height').notNullable();
    table.integer('current_updated_block_height').notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.withSchema("explorer").dropTable('block_based_db_jobs');
}