import { Knex } from "knex";


exports.up = async function(knex: Knex): Promise<void> {
  await knex.schema.withSchema("explorer").createTable('transition_input_external_record', (table) => {
      table.increments('id').primary().notNullable();
      table.integer('transition_input_id').notNullable().references('id').inTable('explorer.transition_input');
      table.text('commitment').notNullable();
  });

  await knex.schema.withSchema("explorer").table('transition_input_external_record', (table) => {
      table.index('transition_input_id', 'transition_input_external_record_transition_input_id_index');
  });

  await knex.schema.withSchema("explorer").createTable('transition_output_external_record', (table) => {
      table.increments('id').primary().notNullable();
      table.integer('transition_output_id').notNullable().references('id').inTable('explorer.transition_output');
      table.text('commitment').notNullable();
  });

  await knex.schema.withSchema("explorer").table('transition_output_external_record', (table) => {
      table.index('transition_output_id', 'transition_output_external_record_transition_output_id_index');
  });
};

exports.down = async function(knex: Knex): Promise<void> {
  await knex.schema.withSchema("explorer").table('transition_input_external_record', (table) => {
      table.dropIndex('transition_input_id', 'transition_input_external_record_transition_input_id_index');
  });
  await knex.schema.withSchema("explorer").dropTableIfExists('transition_input_external_record');

  await knex.schema.withSchema("explorer").table('transition_output_external_record', (table) => {
      table.dropIndex('transition_output_id', 'transition_output_external_record_transition_output_id_index');
  });
  await knex.schema.withSchema("explorer").dropTableIfExists('transition_output_external_record');
};

