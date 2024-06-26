import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.withSchema("explorer").alterTable('transition_output', (table) => {
    table.index('id');
  });

  await knex.schema.withSchema("explorer").alterTable('transition', (table) => {
    table.index('id');
  });

  await knex.schema.withSchema("explorer").alterTable('transaction_execute', (table) => {
    table.index('id');
  });

  await knex.schema.withSchema("explorer").alterTable('fee', (table) => {
    table.index('id');
  });

  await knex.schema.withSchema("explorer").alterTable('transaction', (table) => {
    table.index('id');
  });

  await knex.schema.withSchema("explorer").alterTable('block', (table) => {
    table.index('id');
    table.index('height');
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.withSchema("explorer").alterTable('transition_output', (table) => {
    table.dropIndex('id');
  });

  await knex.schema.withSchema("explorer").alterTable('transition', (table) => {
    table.dropIndex('id');
  });

  await knex.schema.withSchema("explorer").alterTable('transaction_execute', (table) => {
    table.dropIndex('id');
  });

  await knex.schema.withSchema("explorer").alterTable('fee', (table) => {
    table.dropIndex('id');
  });

  await knex.schema.withSchema("explorer").alterTable('transaction', (table) => {
    table.dropIndex('id');
  });

  await knex.schema.withSchema("explorer").alterTable('block', (table) => {
    table.dropIndex('id');
    table.dropIndex('height');
  });
}