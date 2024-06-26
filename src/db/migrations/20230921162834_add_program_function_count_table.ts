import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    await knex.schema.withSchema("explorer").createTable('program_function_execution_count', (table) => {
        table.increments('id').primary().notNullable();
        table.integer('program_id').notNullable().references('id').inTable('explorer.program');
        table.text('function_name').notNullable();
        table.integer('execution_count').notNullable();
        table.integer('block_id').notNullable().references('id').inTable('explorer.block');
        table.unique(['program_id', 'function_name']);
    });

    await knex.schema.withSchema("explorer").table('program_function_execution_count', (table) => {
        table.index(['program_id', 'function_name'], 'idx_program_function_execution_count_program_id_function_name');
    });

    await knex.schema.withSchema("explorer").table('program_function_execution_count', (table) => {
        table.index('execution_count', 'idx_program_function_execution_count_execution_count');
    });
}

export async function down(knex: Knex): Promise<void> {
    // Drop the Indexes and Table in the reverse order of creation
  await knex.schema.withSchema('explorer').table('program_function_execution_count', table => {
    table.dropIndex('execution_count', 'idx_program_function_execution_count_execution_count');
    table.dropIndex(['program_id', 'function_name'], 'idx_program_function_execution_count_program_id_function_name');
  });
  
  await knex.schema.withSchema('explorer').dropTable('program_function_execution_count');
}

