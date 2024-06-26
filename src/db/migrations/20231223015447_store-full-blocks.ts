import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema.withSchema("explorer").createTable('full_blocks', table => {
        table.increments('id').primary(); // Auto-generated ID
        table.integer('height').notNullable(); // Height as a number
        table.binary('block_data'); // Binary data for block_data, using 'bytea' in PostgreSQL
    });
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.withSchema("explorer").dropTable('full_blocks');
}
