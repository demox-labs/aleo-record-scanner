import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.withSchema("explorer").alterTable('finalize_operation_remove_kv', (table) => {
    table.dropColumn('key_id');
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.withSchema("explorer").alterTable('finalize_operation_remove_kv', (table) => {
    table.text('key_id');
  });
}