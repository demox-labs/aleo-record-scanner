import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.withSchema("explorer").table('transition_output_record', (table) => {
    table.string('nonce_x_coordinate').nullable();
    table.string('nonce_y_coordinate').nullable();
    table.string('record_owner_x_coordinate').nullable();
    table.boolean('is_owner_public').nullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.withSchema("explorer").table('transition_output_record', (table) => {
    table.dropColumn('nonce_x_coordinate');
    table.dropColumn('nonce_y_coordinate');
    table.dropColumn('record_owner_x_coordinate');
    table.dropColumn('is_owner_public');
  });
}