import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema
      .table('explorer.transition', function(table) {
        table.dropColumn('proof');
      });
    await knex.schema
      .table('explorer.transaction_execute', function(table) {
        table.renameColumn('inclusion_proof', 'proof');
      });
    await knex.schema
      .table('explorer.fee', function(table) {
        table.renameColumn('inclusion_proof', 'proof');
      });
}

export async function down(knex: Knex): Promise<void> {
    await knex.schema
      .table('explorer.fee', function(table) {
        table.renameColumn('proof', 'inclusion_proof');
    });
    await knex.schema
      .table('explorer.transaction_execute', function(table) {
        table.renameColumn('proof', 'inclusion_proof');
    });
    await knex.schema.table('explorer.transition', function(table) {
      table.text('proof');
    });
}