import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.withSchema("explorer").createTable('nft_address_to_token_edition_hash', (table) => {
    table.increments('id').primary().notNullable();
    table.integer('program_id').notNullable().references('id').inTable('explorer.program');
    table.text('aleo_address').notNullable();
    table.text('token_edition_hash').notNullable();
    table.text('transition_id').notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.withSchema("explorer").dropTable('nft_address_to_token_edition_hash');
}