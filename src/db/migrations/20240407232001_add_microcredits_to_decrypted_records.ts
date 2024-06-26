import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.withSchema("explorer").alterTable('decrypted_records', table => {
    table.integer('microcredits').notNullable().defaultTo(0);
  })

  const allDecryptedRecords = await knex
    .select()
    .from('explorer.decrypted_records')
    .where('spent', false);
  let updates: Promise<any>[] = [];
  for (let i = 0; i < allDecryptedRecords.length; i++) {
    let record = allDecryptedRecords[i];
    let microcreditsItem = record.plaintext.match('microcredits: [0-9]+');
    if (microcreditsItem.length > 0) {
      record.microcredits = parseInt(microcreditsItem[0].match('[0-9]+'));
      if (record.microcredits > 0) {
        updates.push(knex('explorer.decrypted_records').update(record).where('id', record.id));
      }
    }
  }
  Promise.all(updates);
}


export async function down(knex: Knex): Promise<void> {
  await knex.schema.withSchema("explorer").alterTable('decrypted_records', table => {
    table.dropColumn('microcredits');
  })
}

