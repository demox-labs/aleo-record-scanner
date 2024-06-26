import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  
  await knex.schema.withSchema("explorer").createTable('record_view', table => {
    table.integer('id').primary().references('id').inTable('explorer.transition_output_record');
    table.text('record_ciphertext');
    table.text('program_id');
    table.integer('block_id');
    table.integer('height');
    table.bigInteger('timestamp');
    table.text('block_hash');
    table.text('transition_id');
    table.text('transaction_id');
    table.text('function_name');
    table.integer('output_index');

    // Unique constraint on the id column
    table.unique(['id']);
  });
}


export async function down(knex: Knex): Promise<void> {
  await knex.schema.withSchema("explorer").dropTable('record_view');
}

