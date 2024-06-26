import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  await knex.schema.withSchema("explorer").createTable('public_transactions', table => {
    table.increments('id').primary().notNullable();
    table.text('transaction_id');
    table.integer('block_height');
    table.text('address');
  });

  await knex.schema.withSchema("explorer").table('public_transactions', (table) => {
    table.index('block_height', 'block_height_public_transactions_index');
  });

  await knex.schema.withSchema("explorer").table('public_transactions', (table) => {
    table.index('address', 'address_public_transactions_index');
  });

  const populatePublicTransactions = `
    INSERT INTO explorer.public_transactions (transaction_id, block_height, address)
    SELECT tx.transaction_id, block.height AS block_height, address_mapping.address
    FROM explorer.block AS block
    INNER JOIN explorer.transaction AS tx ON block.id = tx.block_id
    LEFT JOIN explorer.transaction_execute AS tx_execute ON tx_execute.transaction_id = tx.id
    LEFT JOIN explorer.fee AS fee ON fee.transaction_id = tx.id
    INNER JOIN explorer.transition AS tr ON (tx_execute.id = tr.transaction_execute_id OR tr.fee_id = fee.id)
    INNER JOIN explorer.transition_output AS tr_output ON tr.id = tr_output.transition_id
    INNER JOIN explorer.transition_output_future AS future ON tr_output.id = future.transition_output_id
    INNER JOIN explorer.address_to_future_mapping AS address_mapping ON future.id = address_mapping.transition_output_future_id
    WHERE (tr.fee <= 0 OR fee.transaction_id IS NOT NULL);
  `;

  await knex.raw(populatePublicTransactions);
}


export async function down(knex: Knex): Promise<void> {
  await knex.schema.withSchema("explorer").table('public_transactions', (table) => {
    table.dropIndex('address', 'address_public_transactions_index');
  });

  await knex.schema.withSchema("explorer").table('public_transactions', (table) => {
    table.dropIndex('block_height', 'block_height_public_transactions_index');
  });

  await knex.schema.withSchema("explorer").dropTable('public_transactions');
}
