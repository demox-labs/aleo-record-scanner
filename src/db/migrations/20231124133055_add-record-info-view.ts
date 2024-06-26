import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  
  await knex.schema.withSchema("explorer").createTable('record_info_view', table => {
    table.integer('id').primary().references('id').inTable('explorer.transition_output_record');
    table.integer('block_id');
    table.integer('height');
    table.text('transition_id');
    table.text('nonce_x');
    table.text('nonce_y');
    table.text('owner_x');
    table.integer('output_index');

    // Unique constraint on the id column
    table.unique(['id']);
  });
}


export async function down(knex: Knex): Promise<void> {
  await knex.schema.withSchema("explorer").dropTable('record_info_view');
}

