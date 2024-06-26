import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  await knex.schema.alterTable('explorer.block', (table) => {
      // 1. Remove the coinbase_accumulator_point column
      table.dropColumn('coinbase_accumulator_point');

      // 2. Add a column network which should be an integer and not nullable
      table.integer('network').notNullable();

      // 3. Add a column "ratifications_root" which should be text and not nullable
      table.text('ratifications_root').notNullable();

      // 4. Add a column "solutions_root" which should be text and not nullable
      table.text('solutions_root').notNullable();

      // 5. Add a column "subdag_root" which should be text and not nullable
      table.text('subdag_root').notNullable();

      // 6. Add a column "cumulative_weight" which should be numeric(20,0) and not nullable
      table.specificType('cumulative_weight', 'NUMERIC(20,0)').notNullable();

      // 7. Add a column "cumulative_proof_target" which should be numeric(20,0) and not nullable
      table.specificType('cumulative_proof_target', 'NUMERIC(20,0)').notNullable();

      // 8. Remove the "signature" column
      table.dropColumn('signature');
  });

  // Add "Future" to the explorer.transition_data_type enum type
  await knex.raw(`ALTER TYPE explorer.transition_data_type ADD VALUE 'Future';`);

  // Add the "Future" transition output table
  await knex.schema.withSchema("explorer").createTable('transition_output_future', (table) => {
    table.increments('id').primary().notNullable();
    table.integer('transition_output_id').notNullable().references('id').inTable('explorer.transition_output');
    table.text('commitment').notNullable();
    table.text('future_value').notNullable();
  });
  await knex.schema.withSchema("explorer").table('transition_output_future', (table) => {
    table.index('transition_output_id', 'transition_output_future_transition_output_id_index');
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.alterTable('explorer.block', (table) => {
      // Reverse the operations done in the up function

      // 1. Add back the coinbase_accumulator_point column
      // Assuming it was a text type and nullable, adjust as needed
      table.text('coinbase_accumulator_point');

      // 2. Drop the network column
      table.dropColumn('network');

      // 3. Drop the ratifications_root column
      table.dropColumn('ratifications_root');

      // 4. Drop the solutions_root column
      table.dropColumn('solutions_root');

      // 5. Drop the subdag_root column
      table.dropColumn('subdag_root');

      // 6. Drop the cumulative_weight column
      table.dropColumn('cumulative_weight');

      // 7. Drop the cumulative_proof_target column
      table.dropColumn('cumulative_proof_target');

      // 8. Add back the "signature" column
      // Assuming it was a text type and nullable, adjust as needed
      table.text('signature');
  });

  await knex.schema.withSchema("explorer").table('transition_output_future', (table) => {
    table.dropIndex('transition_output_id', 'transition_output_future_transition_output_id_index');
  });
  await knex.schema.withSchema("explorer").dropTableIfExists('transition_output_future');
}
