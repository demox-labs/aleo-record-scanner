import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.withSchema('explorer').createTable('staking_transactions', (table) => {
    table.increments('id').primary().notNullable();
    table.text('aleo_address').notNullable();
    table.text('transition_id').notNullable();
    table.text('function_name').notNullable();
    table.bigint('microcredits').notNullable();
    table.text('validator_public_key').nullable();
  });

  await knex.raw(`
    CREATE INDEX function_name_aleo_address_index
    ON explorer.staking_transactions (function_name, aleo_address)
    INCLUDE (microcredits);`
  );
}

export async function down(knex: Knex): Promise<void> {
  await knex.raw('DROP INDEX explorer."function_name_aleo_address_index"');

  await knex.schema.withSchema('explorer').dropTable('staking_transactions');
}