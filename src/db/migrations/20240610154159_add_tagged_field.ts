import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.withSchema("explorer").alterTable('record_info_view', table => {
    table.text('tag').nullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.withSchema("explorer").alterTable('record_info_view', table => {
    table.dropColumn('tag');
  })
}