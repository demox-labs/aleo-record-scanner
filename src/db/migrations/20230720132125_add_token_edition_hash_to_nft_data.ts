import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.withSchema("explorer").createTable('nft_token_edition_hash_to_nft_data', (table) => {
    table.increments('id').primary().notNullable();
    table.integer('program_id').notNullable().references('id').inTable('explorer.program');
    table.text('token_edition_hash').notNullable();
    table.binary('token_id').notNullable();
    table.text('edition').notNullable();
    table.text('transition_id').notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.withSchema("explorer").dropTable('nft_token_edition_hash_to_nft_data');
}