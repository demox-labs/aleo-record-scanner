import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  await knex.schema.withSchema("explorer").createTable('serial_number_data', table => {
      table.increments('id').primary().notNullable();
      table.text('serial_number').notNullable();
      table.text('program_id');
      table.text('block_id');
      table.integer('height');
      table.bigInteger('timestamp');
      table.text('transaction_id');
      table.text('transition_id');
  });

  // Indexes to improve query performance
  await knex.schema.withSchema("explorer").table('serial_number_data', (table) => {
      table.index('serial_number', 'serial_number_serial_number_data_index');
      table.index('program_id', 'program_id_serial_number_data_index');
      table.index('block_id', 'block_id_serial_number_data_index');
      table.index('height', 'height_serial_number_data_index');
      table.index('transaction_id', 'transaction_id_serial_number_data_index');
  });

  const populateSerialNumberData = `
    INSERT INTO explorer.serial_number_data (serial_number, program_id, block_id, height, timestamp, transaction_id, transition_id)
    SELECT tr_input_record.serial_number, tr.program_id, tx.block_id, block.height, block.timestamp, tx.transaction_id, tr.transition_id
    FROM explorer.transition_input_record AS tr_input_record
    INNER JOIN explorer.transition_input AS tr_input ON tr_input_record.transition_input_id = tr_input.id
    INNER JOIN explorer.transition AS tr ON tr.id = tr_input.transition_id
    LEFT JOIN explorer.transaction_execute AS tx_execute ON tx_execute.id = tr.transaction_execute_id
    LEFT JOIN explorer.fee as fee on tr.fee_id = fee.id
    INNER JOIN explorer.transaction AS tx ON tx.id = COALESCE(fee.transaction_id, tx_execute.transaction_id)
    INNER JOIN explorer.block as block ON block.id = tx.block_id
    WHERE (tr.fee <= 0 OR fee.transaction_id IS NOT NULL);
  `;

  await knex.raw(populateSerialNumberData);
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.withSchema("explorer").table('serial_number_data', (table) => {
      table.dropIndex('serial_number', 'serial_number_serial_number_data_index');
      table.dropIndex('program_id', 'program_id_serial_number_data_index');
      table.dropIndex('block_id', 'block_id_serial_number_data_index');
      table.dropIndex('height', 'height_serial_number_data_index');
      table.dropIndex('transaction_id', 'transaction_id_serial_number_data_index');
  });

  await knex.schema.withSchema("explorer").dropTable('serial_number_data');
}

