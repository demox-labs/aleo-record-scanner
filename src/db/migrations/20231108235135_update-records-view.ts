import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    // Drop the trigger
    await knex.schema.raw(`
    DROP TRIGGER IF EXISTS refresh_records_materialized_view ON explorer.block;
  `);

  // Drop the refresh function
  await knex.schema.raw(`
    DROP FUNCTION IF EXISTS refresh_materialized_view();
  `);

  // Drop the index on the materialized view
  await knex.schema.raw(`
    DROP INDEX IF EXISTS explorer.records_materialized_block_height_idx;
  `);

    // Drop the unique index on the materialized view
    await knex.schema.raw(`
    DROP INDEX IF EXISTS explorer.records_materialized_record_id_idx;
  `);

  // Drop the materialized view
  await knex.schema.raw(`
    DROP MATERIALIZED VIEW IF EXISTS explorer.records_materialized;
  `);
}


export async function down(knex: Knex): Promise<void> {
    // Create the materialized view
    await knex.schema.raw(`
    CREATE MATERIALIZED VIEW explorer.records_materialized AS
    SELECT record.record_ciphertext, tr.program_id, tx.block_id, block.height, record.id, block.timestamp, block.block_hash, tr.transition_id, tx.transaction_id, tr.function_name, tr_output.index as output_index
      FROM explorer.block AS block
      INNER JOIN explorer.transaction AS tx ON block.id = tx.block_id
      LEFT JOIN explorer.transaction_execute AS tx_execute ON tx_execute.transaction_id = tx.id
      LEFT JOIN explorer.fee AS fee ON fee.transaction_id = tx.id
      INNER JOIN explorer.transition AS tr ON (tx_execute.id = tr.transaction_execute_id OR tr.fee_id = fee.id)
      INNER JOIN explorer.transition_output AS tr_output ON tr.id = tr_output.transition_id
      INNER JOIN explorer.transition_output_record AS record ON tr_output.id = record.transition_output_id
      WHERE (tr.fee <= 0 OR fee.transaction_id IS NOT NULL)
      WITH NO DATA;
  `);

  // Create an index on the materialized view for the columns you'll be filtering on
  await knex.schema.raw(`
    CREATE INDEX records_materialized_block_height_idx ON explorer.records_materialized (height);
  `);

  // Create a unique index on the id column of the transition_output_record table
  await knex.schema.raw(`
    CREATE UNIQUE INDEX records_materialized_record_id_idx ON explorer.records_materialized (id);
  `);

  // Remove the CONCURRENTLY option for the initial population of the materialized view
  await knex.schema.raw(`
    REFRESH MATERIALIZED VIEW explorer.records_materialized;
  `);

  // Update the function to handle the initial population
  await knex.schema.raw(`
    CREATE OR REPLACE FUNCTION refresh_materialized_view()
    RETURNS TRIGGER LANGUAGE plpgsql AS
    $$
    BEGIN
      -- Check if the materialized view is populated before deciding to refresh concurrently
      IF EXISTS (SELECT 1 FROM explorer.records_materialized LIMIT 1) THEN
        REFRESH MATERIALIZED VIEW CONCURRENTLY explorer.records_materialized;
      ELSE
        REFRESH MATERIALIZED VIEW explorer.records_materialized;
      END IF;
      RETURN NULL;
    END;
    $$;
  `);


  // Create the trigger that calls the function
  await knex.schema.raw(`
    CREATE TRIGGER refresh_records_materialized_view
    AFTER INSERT OR UPDATE OR DELETE ON explorer.block
    FOR EACH STATEMENT EXECUTE FUNCTION refresh_materialized_view();
  `);
}

