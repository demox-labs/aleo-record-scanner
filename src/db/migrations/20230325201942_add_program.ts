import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  await knex.schema.withSchema("explorer").createTable("program", (table) => {
    table.integer("id").notNullable().primary();
    table.integer("transaction_deploy_id").notNullable();
    table.text("program_id").notNullable();
    table.text("program").notNullable();
  });

  await knex.schema.withSchema("explorer").raw(`
    CREATE SEQUENCE explorer.program_id_seq
      AS integer
      START WITH 1
      INCREMENT BY 1
      NO MINVALUE
      NO MAXVALUE
      CACHE 1;
  `);

  await knex.schema.withSchema("explorer").raw(`
    ALTER SEQUENCE explorer.program_id_seq OWNED BY explorer.program.id;
  `);

  await knex.schema.withSchema("explorer").alterTable("transaction", (table) => {
    table.integer("index").notNullable().defaultTo(0);
  });

  await knex.schema.withSchema("explorer").alterTable("transition", (table) => {
    table.integer("index").notNullable().defaultTo(0);
  });

  await knex.schema.withSchema("explorer").alterTable("transaction_execute", (table) => {
    table.dropColumn("index");
  });

  await knex.schema.withSchema("explorer").createTable("transaction_deploy", (table) => {
    table.integer("id").notNullable().primary();
    table.integer("transaction_id").notNullable();
    table.integer("edition").notNullable();
  });

  await knex.schema.withSchema("explorer").raw(`
    CREATE SEQUENCE explorer.transaction_deployment_id_seq
      AS integer
      START WITH 1
      INCREMENT BY 1
      NO MINVALUE
      NO MAXVALUE
      CACHE 1;
  `);

  await knex.schema.withSchema("explorer").raw(`
    ALTER SEQUENCE explorer.transaction_deployment_id_seq OWNED BY explorer.transaction_deploy.id;
  `);

  await knex.schema.withSchema("explorer").createTable("transition_finalize_record", (table) => {
    table.integer("id").notNullable().primary();
    table.integer("transition_finalize_id").notNullable();
    table.text("record").notNullable();
  });

  await knex.schema.withSchema("explorer").raw(`
    CREATE SEQUENCE explorer.transaction_finalize_record_id_seq
      AS integer
      START WITH 1
      INCREMENT BY 1
      NO MINVALUE
      NO MAXVALUE
      CACHE 1;
  `);

  await knex.schema.withSchema("explorer").raw(`
    ALTER SEQUENCE explorer.transaction_finalize_record_id_seq OWNED BY explorer.transition_finalize_record.id;
  `);

  await knex.schema.withSchema("explorer").createTable("transition_finalize", (table) => {
    table.integer("id").notNullable().primary();
    table.integer("transition_id").notNullable();
    table.specificType("type", "explorer.finalize_value_type").notNullable();
    table.integer("index").notNullable();
  });

  await knex.schema.withSchema("explorer").raw(`
    CREATE SEQUENCE explorer.transition_finalize_id_seq
      AS integer
      START WITH 1
      INCREMENT BY 1
      NO MINVALUE
      NO MAXVALUE
      CACHE 1;
  `);

  await knex.schema.withSchema("explorer").raw(`
    ALTER SEQUENCE explorer.transition_finalize_id_seq OWNED BY explorer.transition_finalize.id;
  `);

  await knex.schema.withSchema("explorer").createTable("transition_finalize_plaintext", (table) => {
    table.integer("id").notNullable().primary();
    table.integer("transition_finalize_id").notNullable();
    table.binary("plaintext").notNullable();
  });

  await knex.schema.withSchema("explorer").raw(`
    CREATE SEQUENCE explorer.transition_finalize_plaintext_id_seq
      AS integer
      START WITH 1
      INCREMENT BY 1
      NO MINVALUE
      NO MAXVALUE
      CACHE 1;
  `);

  await knex.schema.withSchema("explorer").raw(`
    ALTER SEQUENCE explorer.transition_finalize_plaintext_id_seq OWNED BY explorer.transition_finalize_plaintext.id;
  `);

  await knex.schema.withSchema("explorer").alterTable("transition_input", (table) => {
    table.integer("index").notNullable().defaultTo(0);
  });

  await knex.schema.withSchema("explorer").createTable("transition_input_public", (table) => {
    table.integer("id").notNullable().primary();
    table.integer("transition_input_id").notNullable();
    table.text("plaintext_hash").notNullable();
    table.binary("plaintext");
  });

  await knex.schema.withSchema("explorer").raw(`
    CREATE SEQUENCE explorer.transition_input_public_id_seq
      AS integer
      START WITH 1
      INCREMENT BY 1
      NO MINVALUE
      NO MAXVALUE
      CACHE 1;
  `);

  await knex.schema.withSchema("explorer").raw(`
    ALTER SEQUENCE explorer.transition_input_public_id_seq OWNED BY explorer.transition_input_public.id;
  `);

  await knex.schema.withSchema("explorer").alterTable("transition_input_record", (table) => {
    table.dropColumn("index");
  });

  await knex.schema.withSchema("explorer").alterTable("transition_input_private", (table) => {
    table.dropColumn("index");
  });

  await knex.schema.withSchema("explorer").alterTable("transition_output", (table) => {
    table.integer("index").notNullable().defaultTo(0);
  });

  await knex.schema.withSchema("explorer").createTable("transition_output_private", (table) => {
    table.integer("id").notNullable().primary();
    table.integer("transition_output_id").notNullable();
    table.text("ciphertext_hash").notNullable();
    table.text("ciphertext").notNullable();
  });

  await knex.schema.withSchema("explorer").raw(`
    CREATE SEQUENCE explorer.transition_output_private_id_seq
      AS integer
      START WITH 1
      INCREMENT BY 1
      NO MINVALUE
      NO MAXVALUE
      CACHE 1;
  `);

  await knex.schema.withSchema("explorer").raw(`
    ALTER SEQUENCE explorer.transition_output_private_id_seq OWNED BY explorer.transition_output_private.id;
  `);

  await knex.schema.withSchema("explorer").createTable("transition_output_public", (table) => {
    table.integer("id").notNullable().primary();
    table.integer("transition_output_id").notNullable();
    table.text("plaintext_hash").notNullable();
    table.text("plaintext").notNullable();
  });

  await knex.schema.withSchema("explorer").raw(`
    CREATE SEQUENCE explorer.transition_output_public_id_seq
      AS integer
      START WITH 1
      INCREMENT BY 1
      NO MINVALUE
      NO MAXVALUE
      CACHE 1;
  `);

  await knex.schema.withSchema("explorer").raw(`
    ALTER SEQUENCE explorer.transition_output_public_id_seq OWNED BY explorer.transition_output_public.id;
  `);

  await knex.schema.withSchema("explorer").alterTable("transition_output_record", (table) => {
    table.dropColumn("index");
  });

  await knex.schema.withSchema("explorer").raw(`
    ALTER TABLE ONLY explorer.program ALTER COLUMN id SET DEFAULT nextval('explorer.program_id_seq'::regclass);
  `);

  await knex.schema.withSchema("explorer").raw(`
    ALTER TABLE explorer.transaction_deploy ALTER COLUMN id SET DEFAULT nextval('explorer.transaction_deployment_id_seq'::regclass);
  `);

  await knex.schema.withSchema("explorer").raw(`
    ALTER TABLE explorer.transition_finalize ALTER COLUMN id SET DEFAULT nextval('explorer.transition_finalize_id_seq'::regclass);
  `);

  await knex.schema.withSchema("explorer").raw(`
    ALTER TABLE explorer.transition_finalize_plaintext ALTER COLUMN id SET DEFAULT nextval('explorer.transition_finalize_plaintext_id_seq'::regclass);
  `);

  await knex.schema.withSchema("explorer").raw(`
    ALTER TABLE explorer.transition_finalize_record ALTER COLUMN id SET DEFAULT nextval('explorer.transaction_finalize_record_id_seq'::regclass);
  `);

  await knex.schema.withSchema("explorer").raw(`
    ALTER TABLE explorer.transition_input_public ALTER COLUMN id SET DEFAULT nextval('explorer.transition_input_public_id_seq'::regclass);
  `);

  await knex.schema.withSchema("explorer").raw(`
    ALTER TABLE explorer.transition_output_private ALTER COLUMN id SET DEFAULT nextval('explorer.transition_output_private_id_seq'::regclass);
  `);

  await knex.schema.withSchema("explorer").raw(`
    ALTER TABLE explorer.transition_output_public ALTER COLUMN id SET DEFAULT nextval('explorer.transition_output_public_id_seq'::regclass);
  `);

  await knex.schema.withSchema("explorer").alterTable("program", (table) => {
    table.dropPrimary();
    table.primary(["id"], "program_pk");
  });

  await knex.schema.withSchema("explorer").alterTable("transaction_deploy", (table) => {
    table.dropPrimary();
    table.primary(["id"], "transaction_deployment_pk");
  });

  await knex.schema.withSchema("explorer").alterTable("transition_finalize_record", (table) => {
    table.dropPrimary();
    table.primary(["id"], "transaction_finalize_record_pk");
  });

  await knex.schema.withSchema("explorer").alterTable("transition_finalize", (table) => {
    table.dropPrimary();
    table.primary(["id"], "transition_finalize_pk");
  });

  await knex.schema.withSchema("explorer").alterTable("transition_finalize_plaintext", (table) => {
    table.dropPrimary();
    table.primary(["id"], "transition_finalize_plaintext_pk");
  });

  await knex.schema.withSchema("explorer").alterTable("transition_input_public", (table) => {
    table.dropPrimary();
    table.primary(["id"], "transition_input_public_pk");
  });

  await knex.schema.withSchema("explorer").alterTable("transition_output_private", (table) => {
    table.dropPrimary();
    table.primary(["id"], "transition_output_private_pkey");
  });

  await knex.schema.withSchema("explorer").alterTable("transition_output_public", (table) => {
    table.dropPrimary();
    table.primary(["id"], "transition_output_public_pk");
  });

  await knex.schema.withSchema("explorer").table("program", (table) => {
    table.index(["program_id"], "program_program_id_index", "btree");
    table.index(["transaction_deploy_id"], "program_transaction_deploy_id_index");
  });

  await knex.schema.withSchema("explorer").table("transaction_deploy", (table) => {
    table.index("transaction_id", "transaction_deployment_transaction_id_index");
  });

  await knex.schema.withSchema("explorer").table("transition_finalize_record", (table) => {
    table.index("transition_finalize_id", "transaction_finalize_record_transaction_finalize_id_index");
  });

  await knex.schema.withSchema("explorer").table("transaction", (table) => {
    table.index("index", "transaction_index_index");
  });

  await knex.schema.withSchema("explorer").table("transition_finalize", (table) => {
    table.index("index", "transition_finalize_index_index");
    table.index("transition_id", "transition_finalize_transition_id_index");
  });

  await knex.schema.withSchema("explorer").table("transition_finalize_plaintext", (table) => {
    table.index("transition_finalize_id", "transition_finalize_plaintext_transition_finalize_id_index");
  });

  await knex.schema.withSchema("explorer").table("transition", (table) => {
    table.index("index", "transition_index_index");
  });

  await knex.schema.withSchema("explorer").table("transition_input", (table) => {
    table.index("index", "transition_input_index_index");
  });

  await knex.schema.withSchema("explorer").table("transition_input_public", (table) => {
    table.index("transition_input_id", "transition_input_public_transition_input_id_index");
  });

  await knex.schema.withSchema("explorer").table("transition_input_record", (table) => {
    table.index("transition_input_id", "transition_input_record_transition_input_id_index");
  });

  await knex.schema.withSchema("explorer").table("transition_output", (table) => {
    table.index("index", "transition_output_index_index");
  });

  await knex.schema.withSchema("explorer").table("transition_output_private", (table) => {
    table.index("transition_output_id", "transition_output_private_transition_output_id_index");
  });

  await knex.schema.withSchema("explorer").table("transition_output_public", (table) => {
    table.index("transition_output_id", "transition_output_public_transition_output_id_index");
  });

  await knex.schema.withSchema("explorer").table("program", (table) => {
    table.foreign("transaction_deploy_id", "program_transaction_deployment_id_fk").references("id").inTable("explorer.transaction_deploy");
  });

  await knex.schema.withSchema("explorer").table("transaction_deploy", (table) => {
    table.foreign("transaction_id", "transaction_deployment_transaction_id_fk").references("id").inTable("explorer.transaction");
  });

  await knex.schema.withSchema("explorer").table("transition_finalize_record", (table) => {
    table.foreign("transition_finalize_id", "transaction_finalize_record_transition_finalize_id_fk").references("id").inTable("explorer.transition_finalize");
  });

  await knex.schema.withSchema("explorer").table("transition_finalize_plaintext", (table) => {
    table.foreign("transition_finalize_id", "transition_finalize_plaintext_transition_finalize_id_fk").references("id").inTable("explorer.transition_finalize");
  });

  await knex.schema.withSchema("explorer").table("transition_finalize", (table) => {
    table.foreign("transition_id", "transition_finalize_transition_id_fk").references("id").inTable("explorer.transition");
  });

  await knex.schema.withSchema("explorer").table("transition_input_public", (table) => {
    table.foreign("transition_input_id", "transition_input_public_transition_input_id_fk").references("id").inTable("explorer.transition_input");
  });

  await knex.schema.withSchema("explorer").table("transition_output_private", (table) => {
    table.foreign("transition_output_id", "transition_output_private_transition_output_id_fkey").references("id").inTable("explorer.transition_output");
  });

  await knex.schema.withSchema("explorer").table("transition_output_public", (table) => {
    table.foreign("transition_output_id", "transition_output_public_transition_output_id_fk").references("id").inTable("explorer.transition_output");
  });
}


export async function down(knex: Knex): Promise<void> {
  // Drop foreign keys
  await knex.schema.withSchema("explorer").table("transition_output_public", (table) => {
    table.dropForeign("transition_output_id", "transition_output_public_transition_output_id_fk");
  });

  await knex.schema.withSchema("explorer").table("transition_output_private", (table) => {
    table.dropForeign("transition_output_id", "transition_output_private_transition_output_id_fkey");
  });

  await knex.schema.withSchema("explorer").table("transition_input_public", (table) => {
    table.dropForeign("transition_input_id", "transition_input_public_transition_input_id_fk");
  });

  await knex.schema.withSchema("explorer").table("transition_finalize", (table) => {
    table.dropForeign("transition_id", "transition_finalize_transition_id_fk");
  });

  await knex.schema.withSchema("explorer").table("transition_finalize_plaintext", (table) => {
    table.dropForeign("transition_finalize_id", "transition_finalize_plaintext_transition_finalize_id_fk");
  });

  await knex.schema.withSchema("explorer").table("transition_finalize_record", (table) => {
    table.dropForeign("transition_finalize_id", "transaction_finalize_record_transition_finalize_id_fk");
  });

  await knex.schema.withSchema("explorer").table("transaction_deploy", (table) => {
    table.dropForeign("transaction_id", "transaction_deployment_transaction_id_fk");
  });

  await knex.schema.withSchema("explorer").table("program", (table) => {
    table.dropForeign("transaction_deploy_id", "program_transaction_deployment_id_fk");
  });

  // Update pre-existing tables
  await knex.schema.withSchema("explorer").alterTable("transaction", (table) => {
    table.dropColumn("index");
    // table.dropForeign("fee_id", "transaction_fee_id_fk");
    // table.dropColumn("fee");
    // table.dropColumn("fee_id");
  });

  await knex.schema.withSchema("explorer").alterTable("transition", (table) => {
    table.dropColumn("index");
    // table.integer("fee").notNullable().defaultTo(0);
    // table.integer("fee_id");
    // table.foreign("fee_id", "transition_fee_id_fk").references("id").inTable("explorer.fee");
  });

  // Drop indexes
  await knex.schema.withSchema("explorer").table("transition_output_public", (table) => {
    table.dropIndex("transition_output_id", "transition_output_public_transition_output_id_index");
  });

  await knex.schema.withSchema("explorer").table("transition_output_private", (table) => {
    table.dropIndex("transition_output_id", "transition_output_private_transition_output_id_index");
  });

  await knex.schema.withSchema("explorer").table("transition_input_public", (table) => {
    table.dropIndex("transition_input_id", "transition_input_public_transition_input_id_index");
  });

  await knex.schema.withSchema("explorer").table("transition_finalize", (table) => {
    table.dropIndex("transition_id", "transition_finalize_transition_id_index");
    table.dropIndex("index", "transition_finalize_index_index");
  });

  await knex.schema.withSchema("explorer").table("transition_finalize_plaintext", (table) => {
    table.dropIndex("transition_finalize_id", "transition_finalize_plaintext_transition_finalize_id_index");
  });

  await knex.schema.withSchema("explorer").table("transaction_deploy", (table) => {
    table.dropIndex("transaction_id", "transaction_deployment_transaction_id_index");
  });

  await knex.schema.withSchema("explorer").table("transition_finalize_record", (table) => {
    table.dropIndex("transition_finalize_id", "transaction_finalize_record_transaction_finalize_id_index");
  });

  await knex.schema.withSchema("explorer").table("program", (table) => {
    table.dropIndex(["transaction_deploy_id"], "program_transaction_deploy_id_index");
    table.dropIndex(["program_id"], "program_program_id_index");
  });

  await knex.schema.withSchema("explorer").table("transition_output", (table) => {
    table.dropIndex("index", "transition_output_index_index");
  });

  await knex.schema.withSchema("explorer").table("transition_input_record", (table) => {
    table.dropIndex("transition_input_id", "transition_input_record_transition_input_id_index");
  });

  await knex.schema.withSchema("explorer").table("transition_input", (table) => {
    table.dropIndex("index", "transition_input_index_index");
  });

  // Drop primary keys
  await knex.schema.withSchema("explorer").table("transition_output_public", (table) => {
    table.dropPrimary("transition_output_public_pk");
  });

  await knex.schema.withSchema("explorer").table("transition_output_private", (table) => {
    table.dropPrimary("transition_output_private_pkey");
  });

  await knex.schema.withSchema("explorer").table("transition_input_public", (table) => {
    table.dropPrimary("transition_input_public_pk");
  });

  await knex.schema.withSchema("explorer").table("transition_finalize_plaintext", (table) => {
    table.dropPrimary("transition_finalize_plaintext_pk");
  });

  await knex.schema.withSchema("explorer").table("transition_finalize", (table) => {
    table.dropPrimary("transition_finalize_pk");
  });

  await knex.schema.withSchema("explorer").table("transition_finalize_record", (table) => {
    table.dropPrimary("transaction_finalize_record_pk");
  });

  await knex.schema.withSchema("explorer").table("transaction_deploy", (table) => {
    table.dropPrimary("transaction_deployment_pk");
  });

  await knex.schema.withSchema("explorer").table("program", (table) => {
    table.dropPrimary("program_pk");
  });

  await knex.schema.withSchema("explorer").alterTable("transition_output_record", (table) => {
    table.integer("index").notNullable().defaultTo(0);
  });
  
  await knex.schema.withSchema("explorer").alterTable("transition_output", (table) => {
    table.dropColumn("index");
  });
  
  await knex.schema.withSchema("explorer").alterTable("transition_input_record", (table) => {
    table.integer("index").notNullable().defaultTo(0);
  });

  await knex.schema.withSchema("explorer").alterTable("transition_input_private", (table) => {
    table.integer("index").notNullable().defaultTo(0);
  });
  
  await knex.schema.withSchema("explorer").alterTable("transition_input", (table) => {
    table.dropColumn("index");
  });
  
  await knex.schema.withSchema("explorer").alterTable("transition_finalize", (table) => {
    table.dropColumn("index");
  });

  await knex.schema.withSchema("explorer").alterTable("transaction_execute", (table) => {
    table.integer("index").notNullable().defaultTo(0);
  });

  // Drop tables
  await knex.schema.withSchema("explorer").dropTable("transition_output_public");
  await knex.schema.withSchema("explorer").dropTable("transition_output_private");
  await knex.schema.withSchema("explorer").dropTable("transition_input_public");
  await knex.schema.withSchema("explorer").dropTable("transition_finalize_plaintext");
  await knex.schema.withSchema("explorer").dropTable("transition_finalize");
  await knex.schema.withSchema("explorer").dropTable("transaction_deploy");
  await knex.schema.withSchema("explorer").dropTable("transition_finalize_record");
  await knex.schema.withSchema("explorer").dropTable("program");
}
