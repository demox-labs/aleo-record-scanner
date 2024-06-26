import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  await knex.schema.withSchema("explorer").alterTable('decrypted_records', table => {
    table.text('serialNumber').notNullable().defaultTo('');
  })

  await knex.schema.withSchema("explorer").table('decrypted_records', (table) => {
    table.index('microcredits', 'microcredits_decrypted_records_index');
  });

  await knex.schema.withSchema("explorer").table('decrypted_records', (table) => {
    table.index('serialNumber', 'serialNumber_decrypted_records_index');
  });
}


export async function down(knex: Knex): Promise<void> {
  await knex.schema.withSchema("explorer").table('decrypted_records', (table) => {
    table.dropIndex('microcredits', 'microcredits_decrypted_records_index');
  });

  await knex.schema.withSchema("explorer").table('decrypted_records', (table) => {
    table.dropIndex('serialNumber', 'serialNumber_decrypted_records_index');
  });

  await knex.schema.withSchema("explorer").alterTable('decrypted_records', table => {
    table.dropColumn('serialNumber');
  })
}

