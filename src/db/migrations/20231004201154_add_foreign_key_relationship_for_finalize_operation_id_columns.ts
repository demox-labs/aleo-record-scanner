import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    await knex.schema.withSchema("explorer").alterTable('finalize_operation_initialize_mapping', (table) => {
        table.foreign('finalize_operation_id').references('id').inTable('explorer.finalize_operation').onDelete('CASCADE').onUpdate('CASCADE');
    });

    await knex.schema.withSchema("explorer").alterTable('finalize_operation_insert_kv', (table) => {
        table.foreign('finalize_operation_id').references('id').inTable('explorer.finalize_operation').onDelete('CASCADE').onUpdate('CASCADE');
    });

    await knex.schema.withSchema("explorer").alterTable('finalize_operation_remove_kv', (table) => {
        table.foreign('finalize_operation_id').references('id').inTable('explorer.finalize_operation').onDelete('CASCADE').onUpdate('CASCADE');
    });

    await knex.schema.withSchema("explorer").alterTable('finalize_operation_remove_mapping', (table) => {
        table.foreign('finalize_operation_id').references('id').inTable('explorer.finalize_operation').onDelete('CASCADE').onUpdate('CASCADE');
    });

    await knex.schema.withSchema("explorer").alterTable('finalize_operation_update_kv', (table) => {
        table.foreign('finalize_operation_id').references('id').inTable('explorer.finalize_operation').onDelete('CASCADE').onUpdate('CASCADE');
    });
}

export async function down(knex: Knex): Promise<void> {
    await knex.schema.withSchema("explorer").alterTable('finalize_operation_initialize_mapping', (table) => {
        table.dropForeign('finalize_operation_id');
    });

    await knex.schema.withSchema("explorer").alterTable('finalize_operation_insert_kv', (table) => {
        table.dropForeign('finalize_operation_id');
    });

    await knex.schema.withSchema("explorer").alterTable('finalize_operation_remove_kv', (table) => {
        table.dropForeign('finalize_operation_id');
    });

    await knex.schema.withSchema("explorer").alterTable('finalize_operation_remove_mapping', (table) => {
        table.dropForeign('finalize_operation_id');
    });

    await knex.schema.withSchema("explorer").alterTable('finalize_operation_update_kv', (table) => {
        table.dropForeign('finalize_operation_id');
    });
}

