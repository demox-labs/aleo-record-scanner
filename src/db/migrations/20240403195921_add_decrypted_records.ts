import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  await knex.schema.withSchema("explorer").createTable('decrypted_records', table => {
    table.increments('id').primary().notNullable();
    table.text('ciphertext');
    table.text('plaintext');
    table.text('program');
    table.text('address');
    table.boolean('spent').defaultTo(false);
  });

  await knex.schema.withSchema("explorer").table('decrypted_records', (table) => {
    table.index('program', 'program_decrypted_records_index');
  });

  await knex.schema.withSchema("explorer").table('decrypted_records', (table) => {
    table.index('address', 'address_decrypted_records_index');
  });

  await knex.schema.withSchema("explorer").table('decrypted_records', (table) => {
    table.index('spent', 'spent_decrypted_records_index');
  });
}


export async function down(knex: Knex): Promise<void> {
  await knex.schema.withSchema("explorer").table('decrypted_records', (table) => {
    table.dropIndex('address', 'address_decrypted_records_index');
  });

  await knex.schema.withSchema("explorer").table('decrypted_records', (table) => {
    table.dropIndex('spent', 'spent_decrypted_records_index');
  });

  await knex.schema.withSchema("explorer").dropTable('decrypted_records');
}

