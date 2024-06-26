import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  // Solutions
  await knex.schema.withSchema("explorer").table('cannon_solutions', (table) => {
    table.dropIndex('broadcast_time', 'cannon_solutions_broadcast_time_index');
  });

  await knex.schema.withSchema("explorer").dropTable('cannon_solutions');

  // Deployments
  await knex.schema.withSchema("explorer").table('cannon_deployments', (table) => {
    table.dropIndex('broadcast_time', 'cannon_deployments_broadcast_time_index');
  });

  await knex.schema.withSchema("explorer").dropTable('cannon_deployments');

  // Transactions
  await knex.schema.withSchema("explorer").table('cannon_transactions', (table) => {
    table.dropIndex('broadcast_time', 'cannon_transactions_broadcast_time_index');
  });

  await knex.schema.withSchema("explorer").dropTable('cannon_transactions');
}

export async function down(knex: Knex): Promise<void> {
  // Transactions
  await knex.schema.withSchema("explorer").createTable('cannon_transactions', table => {
    table.increments('id').primary().notNullable();
    table.text('transaction_id');
    table.integer('block_height');
    table.timestamp('broadcast_time').defaultTo(knex.fn.now()); // Auto-generated datetime
  });

  await knex.schema.withSchema("explorer").table('cannon_transactions', (table) => {
    table.index('broadcast_time', 'cannon_transactions_broadcast_time_index');
  });

  // Deployments
  await knex.schema.withSchema("explorer").createTable('cannon_deployments', table => {
    table.increments('id').primary().notNullable();
    table.text('deployment_id');
    table.integer('block_height');
    table.timestamp('broadcast_time').defaultTo(knex.fn.now()); // Auto-generated datetime
  });

  await knex.schema.withSchema("explorer").table('cannon_deployments', (table) => {
    table.index('broadcast_time', 'cannon_deployments_broadcast_time_index');
  });

  // Solutions
  await knex.schema.withSchema("explorer").createTable('cannon_solutions', table => {
    table.increments('id').primary().notNullable();
    table.text('solution_id');
    table.integer('block_height');
    table.boolean('is_valid');
    table.text('epoch_hash');
    table.timestamp('broadcast_time').defaultTo(knex.fn.now()); // Auto-generated datetime
  });

  await knex.schema.withSchema("explorer").table('cannon_solutions', (table) => {
    table.index('broadcast_time', 'cannon_solutions_broadcast_time_index');
  });
}