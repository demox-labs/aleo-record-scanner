import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.withSchema("explorer").createTable('nft_program_interactions', (table) => {
    table.increments('id').primary().notNullable();
    table.integer('program_id').notNullable().references('id').inTable('explorer.program');
    table.text('aleo_address').notNullable();
    table.text('transition_id').notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.withSchema("explorer").dropTable('nft_program_interactions');
}