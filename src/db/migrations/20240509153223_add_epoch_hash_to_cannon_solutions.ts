import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.withSchema("explorer").alterTable('cannon_solutions', table => {
    table.text('epoch_hash');
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.withSchema("explorer").alterTable('cannon_solutions', table => {
    table.dropColumn('epoch_hash');
  })
}