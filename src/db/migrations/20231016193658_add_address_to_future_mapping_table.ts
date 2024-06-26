import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    // Add the "Address to Future Mapping" table
    await knex.schema.withSchema("explorer").createTable('address_to_future_mapping', (table) => {
        table.increments('id').primary().notNullable();
        table.integer('transition_output_future_id').notNullable().references('id').inTable('explorer.transition_output_future');
        table.text('address').notNullable();
    });

    await knex.schema.withSchema("explorer").table('address_to_future_mapping', (table) => {
        table.index('address', 'address_to_future_mapping_address_index');
    });
}

export async function down(knex: Knex): Promise<void> {
    await knex.schema.withSchema("explorer").table('address_to_future_mapping', (table) => {
        table.dropIndex('address', 'address_to_future_mapping_address_index');
      });

    await knex.schema.withSchema("explorer").dropTableIfExists('address_to_future_mapping');
}