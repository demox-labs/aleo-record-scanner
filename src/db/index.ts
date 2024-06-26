import { Knex } from 'knex';
import * as Aleo from '@demox-labs/aleo-sdk-staging';
import { redisDb } from '../middleware/redisDb';

import { writeKnexDB } from './knexDb';
import { extractProgramName, getProgramType } from '../shared/aleo-program';
import logger from '../shared/logger';
import { convertFromSnake } from '../shared/util';
import { getIsOwnerParams } from './dbHelpers/isOwnerHelper';
import { FinalizeType } from './types/finalizeType';

import { Program } from './db-interfaces';

export async function saveBlocks(blocks: any[]) {
  for (let i = 0; i < blocks.length; i++) {
    const block = blocks[i];

    const prexistingBlock = (await writeKnexDB.column('height')
        .from('explorer.block')
        .where('height', block.header.metadata.height)
        .limit(1)
      )[0];

    if (!prexistingBlock) {
      console.log('Saving block: ', block.header.metadata.height);
      await _saveBlock(block);
    } else {
      logger.info(`Skipping block: ${block.header.metadata.height}, already exists`);
    }
  }
}

function extractArguments(input: string): string[] {
  const argumentRegex = /arguments: \[\n([\s\S]*?)\n\s*\]/;
  const match = input.match(argumentRegex);

  if (match && match[1]) {
    return match[1].trim().split(/,\n\s*/);
  }

  return [];
}

async function _insert_token_data_if_needed(
  trx: Knex.Transaction,
  transition: any,
  addresses: string[]
) {
  const programName = transition.program;
  const dbProgram = await writeKnexDB.select()
    .from<Program>('explorer.program')
    .where('program_id', programName).first();
  const isTokenProgram = dbProgram && dbProgram.program_type == 'token';

  if (!isTokenProgram) {
    return;
  }

  for (const address of addresses) {
    await trx.insert({
      program_id: dbProgram.id,
      program_name: programName,
      aleo_address: address,
      transition_id: transition.id,
    })
    .into('explorer.token_program_interactions');
  }
}

async function _insert_nft_data_if_needed(
  trx: Knex.Transaction,
  transition: any
) {
  const programName = transition.program;
  const dbProgram = await writeKnexDB.select()
    .from<Program>('explorer.program')
    .where('program_id', programName).first();
  const isNftProgram = dbProgram && dbProgram.program_type == 'nft';
  
  if (!isNftProgram) {
    return;
  }

  if (transition.function == 'convert_private_to_public' || transition.function == 'transfer_public') {
    const future_args = extractArguments(transition.outputs[0].value);
    await trx.insert({
      program_id: dbProgram.id,
      aleo_address: future_args[0],
      token_edition_hash: future_args[1],
      transition_id: transition.id,
    })
    .into('explorer.nft_address_to_token_edition_hash');
  }

  if (transition.function == 'add_nft') {
    const token_edition_hash = extractArguments(transition.outputs[0].value)[0];
    await trx.insert({
      program_id: dbProgram.id,
      token_edition_hash: token_edition_hash,
      token_id: transition.inputs[0].value,
      edition: transition.inputs[1].value,
      transition_id: transition.id
    })
    .into('explorer.nft_token_edition_hash_to_nft_data');
  }
}

// async function _try_insert_decrypted_record(
//   trx: Knex.Transaction,
//   ciphertext: string,
//   program: string
// ) {
//   for (let i = 0; i < TESTER_ACCOUNTS.length; i++) {
//     try {
//       const recordCiphertext = Aleo.RecordCiphertext.fromString(ciphertext);
//       const privateKey = Aleo.PrivateKey.from_string(TESTER_ACCOUNTS[i].privateKey);
//       const viewKey = Aleo.ViewKey.from_string(TESTER_ACCOUNTS[i].viewKey);
//       const address = TESTER_ACCOUNTS[i].address;
//       const recordPlaintext = recordCiphertext.decrypt(viewKey);
//       let serialNumber = '';
//       if (program === 'credits.aleo') {
//         serialNumber = recordPlaintext.serialNumberString(privateKey, program, 'credits');
//       }

//       await trx.insert({
//         ciphertext: ciphertext,
//         plaintext: recordPlaintext.toString(),
//         program,
//         address,
//         spent: false,
//         microcredits: recordPlaintext.microcredits(),
//         serialNumber
//       }).into('explorer.decrypted_records');
      
//       break;
//     } catch (err) { } // Fail silently, most decryption attempts will fail
//   }
// }

async function _update_spent_decrypted_record(
  trx: Knex.Transaction,
  serialNumber: string
) {
  await trx('explorer.decrypted_records')
    .update({ spent: true })
    .where('serialNumber', serialNumber);
}

async function _insert_transition(
  trx: Knex.Transaction,
  transition: any,
  index: number,
  block_hash: string,
  block_id: number,
  height: number,
  timestamp: number,
  transaction_id: string,
  executeTransactionDbId?: number,
  feeDbId?: number,
  feeAmount?: number
  ) {
  try {
    await _insert_nft_data_if_needed(trx, transition);
  } catch (err) {
    logger.warn(`Error inserting nft data for transition: ${transition.id}`, err);
  }
  // TODO: Fix staking data
  // try {
  //   await _insert_staking_data_if_needed(trx, transition);
  // } catch (err) {
  //   logger.warn(`Error inserting staking data for transition: ${transition.id}`, err);
  // }
  const transitionDbId = (await trx.insert({
    transition_id: transition.id,
    transaction_execute_id: executeTransactionDbId,
    fee_id: feeDbId,
    program_id: transition.program,
    function_name: transition.function,
    tpk: transition.tpk,
    tcm: transition.tcm,
    fee: feeAmount || 0,
    index
  })
  .into('explorer.transition')
  .returning('id')
  )[0].id;

  for (let k = 0; k < transition.inputs.length; k++) {
    const input = transition.inputs[k];

    const inputDbId = (await trx.insert({
      transition_id: transitionDbId,
      type: convertFromSnake(input.type),
      index: k
    })
    .into('explorer.transition_input')
    .returning('id')
    )[0].id;

    if (input.type == 'private') {
      await trx.insert({
        transition_input_id: inputDbId,
        ciphertext_hash: input.id,
        ciphertext: input.value
      })
      .into('explorer.transition_input_private');
    } else if (input.type == 'record') {
      await trx.insert({
        transition_input_id: inputDbId,
        serial_number: input.id,
        tag: input.tag
      })
      .into('explorer.transition_input_record');
      await trx.insert({
        serial_number: input.id,
        program_id: transition.program,
        block_id,
        height,
        timestamp,
        transaction_id,
        transition_id: transition.id
      })
      .into('explorer.serial_number_data');
      await _update_spent_decrypted_record(trx, input.id);
    } else if (input.type == 'public') {
      await trx.insert({
        transition_input_id: inputDbId,
        plaintext_hash: input.id,
        plaintext: input.value
      })
      .into('explorer.transition_input_public');
    } else if (input.type == 'external_record') {
      await trx.insert({
        transition_input_id: inputDbId,
        commitment: input.id
      })
      .into('explorer.transition_input_external_record');
    } else {
      logger.warn(`Unable to insert input type: ${input.type} for transition: ${transition.id}`);
    }
  }

  for (let k = 0; k < transition.outputs.length; k++) {
    const output = transition.outputs[k];

    const outputDbId = (await trx.insert({
      transition_id: transitionDbId,
      type: convertFromSnake(output.type),
      index: k
    })
    .into('explorer.transition_output')
    .returning('id')
    )[0].id;

    if (output.type === 'record') {
      const isOwnerInfo = getIsOwnerParams(output.value);

      const output_record = await trx.insert({
        transition_output_id: outputDbId,
        commitment: output.id,
        checksum: output.checksum,
        record_ciphertext: output.value,
        nonce_x_coordinate: isOwnerInfo.nonceX,
        nonce_y_coordinate: isOwnerInfo.nonceY,
        record_owner_x_coordinate: isOwnerInfo.recordOwnerX,
        is_owner_public: isOwnerInfo.isOwnerPublic
      })
      .into('explorer.transition_output_record')
      .returning('id');

      await trx.insert({
        id: output_record[0].id,
        record_ciphertext: output.value,
        program_id: transition.program,
        block_id: block_id,
        height: height,
        timestamp: timestamp,
        block_hash: block_hash,
        transition_id: transition.id,
        transaction_id: transaction_id,
        function_name: transition.function,
        output_index: k
      })
      .into('explorer.record_view');

      await trx.insert({
        id: output_record[0].id,
        block_id: block_id,
        height: height,
        transition_id: transition.id,
        nonce_x: isOwnerInfo.nonceX,
        nonce_y: isOwnerInfo.nonceY,
        owner_x: isOwnerInfo.recordOwnerX,
        output_index: k
      })
      .into('explorer.record_info_view');

      // await _try_insert_decrypted_record(trx, output.value, transition.program);
    } else if (output.type === 'private') {
      await trx.insert({
        transition_output_id: outputDbId,
        ciphertext_hash: output.id,
        ciphertext: output.value
      })
      .into('explorer.transition_output_private');
    } else if (output.type === 'public') {
      await trx.insert({
        transition_output_id: outputDbId,
        plaintext_hash: output.id,
        plaintext: output.value
      })
      .into('explorer.transition_output_public');
    } else if (output.type === 'external_record') {
      await trx.insert({
        transition_output_id: outputDbId,
        commitment: output.id
      })
      .into('explorer.transition_output_external_record');
    } else if (output.type ===  'future') {
      const futureOutputDbId = (await trx.insert({
        transition_output_id: outputDbId,
        commitment: output.id,
        future_value: output.value
      })
      .returning('id')
      .into('explorer.transition_output_future')
      )[0].id;

      // Look for aleo addresses in future output value and save them in address_to_future_mapping table
      const aleo_address_matches = output.value.match(/aleo1[a-z0-9]{58}/g);
      if (aleo_address_matches) {
        const unique_addresses: string[] = Array.from(new Set(aleo_address_matches));
        for (const address of unique_addresses) {
          await trx.insert({
            transition_output_future_id: futureOutputDbId,
            address: address
          })
          .into('explorer.address_to_future_mapping');
          
          await trx.insert({
            transaction_id: transaction_id,
            block_height: height,
            address: address
          })
          .into('explorer.public_transactions');
        }
        await _insert_token_data_if_needed(trx, transition, unique_addresses);
      }
    } else {
      logger.warn(`Unable to insert output type: ${output.type} for transition: ${transition.id}`);
    }
  }
}

async function _saveBlock(block: any) {
  await writeKnexDB.transaction(async (trx) => {
    const blockId = (await trx.insert({ 
      height: block.header.metadata.height,
      block_hash: block.block_hash,
      previous_hash: block.previous_hash || '',
      previous_state_root: block.header.previous_state_root || '',
      transactions_root: block.header.transactions_root || '',
      finalize_root: block.header.finalize_root || '',
      ratifications_root: block.header.ratifications_root || '',
      solutions_root: block.header.solutions_root || '',
      subdag_root: block.header.subdag_root || '',
      network: block.header.metadata.network,
      round: block.header.metadata.round,
      cumulative_weight: block.header.metadata.cumulative_weight,
      cumulative_proof_target: block.header.metadata.cumulative_proof_target,
      coinbase_target: block.header.metadata.coinbase_target,
      proof_target: block.header.metadata.proof_target,
      last_coinbase_target: block.header.metadata.last_coinbase_target,
      last_coinbase_timestamp : block.header.metadata.last_coinbase_timestamp,
      timestamp: block.header.metadata.timestamp,
    })
    .into('explorer.block')
    .returning('id')
    )[0].id;

    for (let i = 0; i < block.transactions.length; i++) {
      const block_hash = block.block_hash;
      const height = block.header.metadata.height;
      const timestamp = block.header.metadata.timestamp;
      const { transaction } = block.transactions[i];
      const transactionMetadata = block.transactions[i];

      let transactionDbId;

      if (transaction.type === 'execute') {
        transactionDbId = (await trx.insert({
          block_id: blockId,
          transaction_id: transaction.id,
          type: convertFromSnake(transaction.type),
          index: i,
          status: transactionMetadata.status
        })
        .into('explorer.transaction')
        .returning('id')
        )[0].id;
        const executeTransactionDbId = (await trx.insert({
          transaction_id: transactionDbId,
          global_state_root: transaction.execution.global_state_root,
          proof: transaction.execution.proof
        })
        .into('explorer.transaction_execute')
        .returning('id')
        )[0].id;

        for (let j = 0; j < transaction.execution.transitions.length; j++) {
          const transition = transaction.execution.transitions[j];
          await _insert_transition(trx, transition, j, block_hash, blockId, height, timestamp, transaction.id, executeTransactionDbId, undefined);
          const programName = transition.program;
          if (programName != 'credits.aleo') {
            const dbProgram = await writeKnexDB.select()
              .from<Program>('explorer.program')
              .where('program_id', programName).first();
            if (dbProgram) {
              await trx.raw(`
              INSERT INTO explorer.program_function_execution_count (program_id, function_name, execution_count, block_id)
              VALUES (${dbProgram.id}, '${transition.function}', 1, ${blockId})
              ON CONFLICT (program_id, function_name)
              DO UPDATE SET
                execution_count = explorer.program_function_execution_count.execution_count + 1,
                block_id = ${blockId}
            `);
            }
          }
        }

        if (transaction.fee) {
          const feeDbId = (await trx.insert({
            transaction_id: transactionDbId,
            global_state_root: transaction.fee.global_state_root,
            proof: transaction.fee.proof
          })
          .into('explorer.fee')
          .returning('id')
          )[0].id;

          const feeAmountIndex = transaction.fee.transition.function === 'fee_public' ? 0 : 1;
          const feeAmount = parseInt(transaction.fee.transition.inputs[feeAmountIndex].value.slice(0, -3));
          await _insert_transition(trx, transaction.fee.transition, transaction.execution.transitions.length, block_hash, blockId, height, timestamp, transaction.id, undefined, feeDbId, feeAmount);
        }
      } else if (transaction.type == 'deploy') {
        transactionDbId = (await trx.insert({
          block_id: blockId,
          transaction_id: transaction.id,
          type: convertFromSnake(transaction.type),
          index: i,
          status: transactionMetadata.status
        })
        .into('explorer.transaction')
        .returning('id')
        )[0].id;
        const deployTransactionDbId = (await trx.insert({
          transaction_id: transactionDbId,
          edition: transaction.deployment.edition,
        })
        .into('explorer.transaction_deploy')
        .returning('id')
        )[0].id;
        
        const programId = await extractProgramName(transaction.deployment.program);
        const program_type = await getProgramType(transaction.deployment.program);
        const programDbId = (await trx.insert({
          program_id: programId,
          transaction_deploy_id: deployTransactionDbId,
          program: transaction.deployment.program,
          program_type
        })
        .into('explorer.program')
        .returning('id')
        )[0].id;

        const feeDbId = (await trx.insert({
          transaction_id: transactionDbId,
          global_state_root: transaction.fee.global_state_root,
          proof: transaction.fee.proof
        })
        .into('explorer.fee')
        .returning('id')
        )[0].id;

        const feeAmountIndex = transaction.fee.transition.function === 'fee_public' ? 0 : 1;
        const feeAmount = parseInt(transaction.fee.transition.inputs[feeAmountIndex].value.slice(0, -3));
        await _insert_transition(trx, transaction.fee.transition, 0, block_hash, blockId, height, timestamp, transaction.id, undefined, feeDbId, feeAmount);
      } else if (transaction.type === 'fee') {
        transactionDbId = (await trx.insert({
          block_id: blockId,
          type: convertFromSnake(transaction.type),
          status: transactionMetadata.status,
          index: i,
          transaction_id: transaction.id
        })
        .into('explorer.transaction')
        .returning('id')
        )[0].id;

        const feeDbId = (await trx.insert({
          transaction_id: transactionDbId,
          global_state_root: transaction.fee.global_state_root,
          proof: transaction.fee.proof
        })
        .into('explorer.fee')
        .returning('id')
        )[0].id;

        const feeAmountIndex = transaction.fee.transition.function === 'fee_public' ? 0 : 1;
        const feeAmount = parseInt(transaction.fee.transition.inputs[feeAmountIndex].value.slice(0, -3));
        await _insert_transition(trx, transaction.fee.transition, 0, block_hash, blockId, height, timestamp, transaction.id, undefined, feeDbId, feeAmount);
      } else {
        logger.warn(`Unable to insert transaction type: ${transaction.type} for transaction: ${transaction.transaction.id}`);
        continue;
      }

      const finalizeLength = transactionMetadata?.finalize?.length || 0;
      for (let i = 0; i < finalizeLength; i++) {
        const finalize = transactionMetadata.finalize[i];
        
        const finalizeOperationId = (await trx.insert({
          transaction_id: transactionDbId,
          type: convertFromSnake(finalize.type)
        })
        .into('explorer.finalize_operation')
        .returning('id')
        )[0].id;

        if (finalize.type === FinalizeType.InitializeMapping) {
          const initializeMappingId = (await trx.insert({
            finalize_operation_id: finalizeOperationId,
            mapping_id: finalize.mapping_id
          })
          .into('explorer.finalize_operation_initialize_mapping')
          .returning('id')
          )[0].id;
        } else if (finalize.type === FinalizeType.InsertKeyValue) {
          const insertKeyValueId = (await trx.insert({
            finalize_operation_id: finalizeOperationId,
            mapping_id: finalize.mapping_id,
            key_id: finalize.key_id,
            value_id: finalize.value_id
          })
          .into('explorer.finalize_operation_insert_kv')
          .returning('id')
          )[0].id;
        } else if (finalize.type === FinalizeType.UpdateKeyValue) {
          const updateKeyValueId = (await trx.insert({
            finalize_operation_id: finalizeOperationId,
            mapping_id: finalize.mapping_id,
            key_id: finalize.key_id,
            value_id: finalize.value_id
          })
          .into('explorer.finalize_operation_update_kv')
          .returning('id')
          )[0].id;
        } else if (finalize.type === FinalizeType.RemoveKeyValue) {
          const removeKeyValueId = (await trx.insert({
            finalize_operation_id: finalizeOperationId,
            mapping_id: finalize.mapping_id,
          })
          .into('explorer.finalize_operation_remove_kv')
          .returning('id')
          )[0].id;
        } else if (finalize.type === FinalizeType.RemoveMapping) {
          const removeMappingId = (await trx.insert({
            finalize_operation_id: finalizeOperationId,
            mapping_id: finalize.mapping_id
          })
          .into('explorer.finalize_operation_remove_mapping')
          .returning('id')
          )[0].id;
        } else {
          logger.warn(`Unable to insert finalize type: ${finalize.type} for transaction: ${transaction.transaction.id}`);
        }
      }
    }

    // Serialize the block object to JSON, then convert to a Buffer
    const blockDataBuffer = Buffer.from(JSON.stringify(block));
    await trx.insert({
      height: block.header.metadata.height,
      block_data: blockDataBuffer
    }).into('explorer.full_blocks');

    await trx.commit();
  });
}
