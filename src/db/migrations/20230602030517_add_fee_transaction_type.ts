import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  await knex.raw("ALTER TYPE explorer.transaction_type ADD VALUE 'Fee';");
}

export async function down(knex: Knex): Promise<void> {
  // PostgreSQL doesn't allow removing an enum value directly, so we create a new enum type, 
  // swap it with the old one, and then remove the old one

  await knex.schema.raw(`
      CREATE TYPE "explorer"."transaction_type_temp" AS ENUM ('Deploy', 'Execute', 'Fee');
      ALTER TABLE "explorer"."transaction" ALTER COLUMN "type" TYPE "explorer"."transaction_type_temp" USING "type"::text::"explorer"."transaction_type_temp";
      DROP TYPE "explorer"."transaction_type";
      ALTER TYPE "explorer"."transaction_type_temp" RENAME TO "transaction_type";
  `);
}

