import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.withSchema("explorer").table('program', (table) => {
    table.string('program_type').notNullable().defaultTo('untyped');
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.withSchema("explorer").table('program', (table) => {
    table.dropColumn('program_type');
  });
}