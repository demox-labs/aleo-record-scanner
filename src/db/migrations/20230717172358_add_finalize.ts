import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.withSchema("explorer").raw(`
    CREATE TYPE explorer.finalize_operation_type AS ENUM (
      'InitializeMapping',
      'InsertKeyValue',
      'UpdateKeyValue',
      'RemoveKeyValue',
      'RemoveMapping'
    );

    CREATE TYPE explorer.confirmed_transaction_type AS ENUM (
      'accepted',
      'rejected'
    );
  `);
  await knex.schema.withSchema("explorer").alterTable('block', (table) => {
    table.text('finalize_root').notNullable().defaultTo('');
  });
  await knex.schema.withSchema("explorer").alterTable('transaction', (table) => {
    table.specificType('status', 'explorer.confirmed_transaction_type');
  });
  await knex.schema.withSchema("explorer").createTable('finalize_operation', (table) => {
    table.increments('id').primary().notNullable();
    table.integer('transaction_id').notNullable();
    table.specificType('type', 'explorer.finalize_operation_type').notNullable();
  });

  await knex.schema.withSchema("explorer").createTable('finalize_operation_initialize_mapping', (table) => {
    table.increments('id').primary().notNullable();
    table.integer('finalize_operation_id').notNullable();
    table.text('mapping_id').notNullable();
  });

  await knex.schema.withSchema("explorer").createTable('finalize_operation_insert_kv', (table) => {
    table.increments('id').primary().notNullable();
    table.integer('finalize_operation_id').notNullable();
    table.text('mapping_id').notNullable();
    table.text('key_id').notNullable();
    table.text('value_id').notNullable();
  });

  await knex.schema.withSchema("explorer").createTable('finalize_operation_remove_kv', (table) => {
    table.increments('id').primary().notNullable();
    table.integer('finalize_operation_id').notNullable();
    table.integer('index').notNullable();
    table.text('mapping_id').notNullable();
    table.text('key_id').notNullable();
  });

  await knex.schema.withSchema("explorer").createTable('finalize_operation_remove_mapping', (table) => {
    table.increments('id').primary().notNullable();
    table.integer('finalize_operation_id').notNullable();
    table.text('mapping_id').notNullable();
  });

  await knex.schema.withSchema("explorer").createTable('finalize_operation_update_kv', (table) => {
    table.increments('id').primary().notNullable();
    table.integer('finalize_operation_id').notNullable();
    table.integer('index').notNullable();
    table.text('mapping_id').notNullable();
    table.text('key_id').notNullable();
    table.text('value_id').notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.withSchema("explorer").dropTableIfExists('finalize_operation_update_kv');

  await knex.schema.withSchema("explorer").dropTableIfExists('finalize_operation_remove_mapping');

  await knex.schema.withSchema("explorer").dropTableIfExists('finalize_operation_remove_kv');

  await knex.schema.withSchema("explorer").dropTableIfExists('finalize_operation_insert_kv');

  await knex.schema.withSchema("explorer").dropTableIfExists('finalize_operation_initialize_mapping');

  await knex.schema.withSchema("explorer").dropTableIfExists('finalize_operation');

  await knex.schema.withSchema("explorer").alterTable('transaction', (table) => {
    table.dropColumn('status');
  });


  await knex.schema.withSchema("explorer").alterTable('block', (table) => {
    table.dropColumn('finalize_root');
  });

  await knex.schema.withSchema("explorer").raw(`
    DROP TYPE explorer.finalize_operation_type;
    DROP TYPE explorer.confirmed_transaction_type;
  `);
}