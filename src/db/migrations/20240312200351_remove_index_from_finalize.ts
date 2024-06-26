import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.withSchema('explorer').table('finalize_operation_update_kv', (table) => {
    table.dropColumn('index');
  });

  await knex.schema.withSchema('explorer').table('finalize_operation_remove_kv', (table) => {
    table.dropColumn('index');
  });
}

export async function down(knex: Knex): Promise<void> {
}