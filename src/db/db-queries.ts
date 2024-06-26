import { readOnlyKnexDB } from './knexDb';
import logger from '../shared/logger';
import { 
  Block,
  Fee,
  FinalizeOperationDb,
  FinalizeOperationInitializeMappingDb,
  FinalizeOperationInsertKeyValueDb,
  FinalizeOperationRemoveKeyValueDb,
  FinalizeOperationRemoveMappingDb,
  FinalizeOperationUpdateKeyValueDb,
  NFTData,
  Program,
  RecordMetadata,
  TokenEditionHash,
  Transaction,
  TransactionDeploy,
  TransactionExecute,
  Transition,
  TransitionInput,
  TransitionInputExternalRecord,
  TransitionInputPrivate,
  TransitionInputPublic,
  TransitionInputRecord,
  TransitionOutput,
  TransitionOutputExternalRecord,
  TransitionOutputFuture,
  TransitionOutputPrivate,
  TransitionOutputPublic,
  TransitionOutputRecord
 } from './db-interfaces'
import { fetchEndpoint, mappingValuePath, mappingsPath } from '../endpoints'
import { formatJsonString, isMoreThanFiveMinutesDifferent } from '../shared/util';
import { RecordInfo } from '../proto/records';

import { AleoTransaction, AleoTransactionInfo, AleoTransition } from './aleo-types';

const queryTimeout = 5_000; // 5 seconds

export async function getHeight() {
  const heightResult = await readOnlyKnexDB.column('height')
    .select()
    .from<Block>('explorer.block')
    .orderBy('height', 'desc')
    .limit(1);
  // Handle when the database is empty, otherwise should never be -1
  return heightResult.length == 1 ? parseInt(heightResult[0].height) : -1;
}

export async function getLastRecordId() {
  const lastRecordIdResult = await readOnlyKnexDB.column('id')
    .select()
    .from('explorer.record_info_view')
    .orderBy('id', 'desc')
    .limit(1);
  return lastRecordIdResult.length == 1 ? parseInt(lastRecordIdResult[0].id) : -1;
}

export async function getLatestHash() {
  const hashResult = await readOnlyKnexDB.select()
    .column('block_hash')
    .from<Block>('explorer.block')
    .orderBy('height', 'desc')
    .limit(1)
    .timeout(queryTimeout, {
      cancel: true
    });

    return hashResult.length ? hashResult[0] : null;
}

export async function getLatestBlock() {
  const blockResult = await readOnlyKnexDB.select()
    .from<Block>('explorer.block')
    .orderBy('height', 'desc')
    .limit(1)
    .timeout(queryTimeout, { 
      cancel: true
    });

  return blockResult.length ? blockResult[0] : null;
}

export async function getBlockRange(startHeight: number, endHeight: number) {
  const blockResult = await readOnlyKnexDB.select()
    .from<Block>('explorer.block')
    .where('height', '>=', startHeight)
    .andWhere('height', '<', endHeight)
    .timeout(queryTimeout, { 
      cancel: true
    });

  return blockResult;
}

export async function getBlockTransactions(blockId: number) {
  const transactionsResult = await readOnlyKnexDB.select()
    .from<Transaction>('explorer.transaction')
    .where('block_id', blockId)
    .timeout(queryTimeout, { 
      cancel: true
    });

  return transactionsResult;
}

export async function getTransaction(txId: string) {
  const transactionsResult = await readOnlyKnexDB.select([
    'explorer.transaction.*',
    'explorer.block.timestamp',
    'explorer.block.height',
    ])
    .from<Transaction>('explorer.transaction')
    .join('explorer.block', 'explorer.transaction.block_id', 'explorer.block.id')
    .where('transaction_id', txId)
    .timeout(queryTimeout, { 
      cancel: true
    });

  return transactionsResult.length ? transactionsResult[0] : null;
}

export async function getAleoTransaction(txId: string): Promise<AleoTransaction | null> {
  const transaction = await getTransaction(txId);
  if (transaction == null) { 
    return null;
  }

  const blockHeight = transaction.height;
  const blockResult = await readOnlyKnexDB.select()
    .from('explorer.full_blocks')
    .where('height', '=', blockHeight);

  if (blockResult && blockResult.length === 1) {
    const blockDataString = blockResult[0].block_data.toString();
    const blockData = JSON.parse(blockDataString);
    const tx = blockData.transactions.find((tx: any) => tx.transaction.id === txId);
    tx.finalizedAt = transaction.timestamp;

    return tx;
  }

  const aleoTransaction: AleoTransaction = {
    status: transaction.status,
    type: transaction.type.toLowerCase() as 'execute' | 'deploy' | 'fee',
    index: transaction.index,
    transaction: null,
    finalizedAt: transaction.timestamp
  }

  // Get the associated transaction info
  let aleoTransactionInfo: AleoTransactionInfo;
  if (transaction.type == 'Execute') {
    // Get all associated execute transitions
    const transactionExecuteResult = await readOnlyKnexDB.select()
      .from<TransactionExecute>('explorer.transaction_execute')
      .where('transaction_id', transaction.id);
    const transactionExecute = transactionExecuteResult[0];
    const aleoTransitions = await _getExecuteTransitions(transactionExecute);

    aleoTransactionInfo = {
      type: 'execute',
      id: transaction.transaction_id,
      execution: {
        transitions: aleoTransitions,
        global_state_root: transactionExecute.global_state_root,
        proof: transactionExecute.proof
      },
      fee: await _getAdditionalFee(transaction)
    }
  } else if (transaction.type == 'Deploy') {
    const transactionDeployResult = await readOnlyKnexDB.select()
      .from<TransactionDeploy>('explorer.transaction_deploy')
      .where('transaction_id', transaction.id);
    const transactionDeploy = transactionDeployResult[0];

    const programResult = await readOnlyKnexDB.select()
      .from<Program>('explorer.program')
      .where('transaction_deploy_id', transactionDeploy.id);
    const program = programResult[0];

    aleoTransactionInfo = {
      type: 'deploy',
      id: transaction.transaction_id,
      deployment: {
        edition: transactionDeploy.edition,
        program: program.program
      },
      fee: await _getAdditionalFee(transaction)
    }
  } else if (transaction.type == 'Fee') {
    aleoTransactionInfo = {
      type: 'fee',
      id: transaction.transaction_id,
      fee: await _getAdditionalFee(transaction)
    }
  } else {
    throw new Error('Invalid transaction type');
  }
  aleoTransaction.transaction = aleoTransactionInfo;
  
  return aleoTransaction;
}

async function _getInitializeMappingOperation(finalizeOperation: FinalizeOperationDb): Promise<FinalizeOperationInitializeMappingDb> {
  const initializeMappingResult = await readOnlyKnexDB.select()
    .from<FinalizeOperationInitializeMappingDb>('explorer.finalize_operation_initialize_mapping')
    .where('finalize_operation_id', finalizeOperation.id).first();

  return initializeMappingResult;
}

async function _getInsertKeyValueOperation(finalizeOperation: FinalizeOperationDb): Promise<FinalizeOperationInsertKeyValueDb> {
  const insertKeyValueResult = await readOnlyKnexDB.select()
    .from<FinalizeOperationInsertKeyValueDb>('explorer.finalize_operation_insert_kv')
    .where('finalize_operation_id', finalizeOperation.id).first();

  return insertKeyValueResult;
}

async function _getUpdateKeyValueOperation(finalizeOperation: FinalizeOperationDb): Promise<FinalizeOperationUpdateKeyValueDb> {
  const updateKeyValueResult = await readOnlyKnexDB.select()
    .from<FinalizeOperationUpdateKeyValueDb>('explorer.finalize_operation_update_kv')
    .where('finalize_operation_id', finalizeOperation.id).first();

  return updateKeyValueResult;
}

async function _getRemoveKeyValueOperation(finalizeOperation: FinalizeOperationDb): Promise<FinalizeOperationRemoveKeyValueDb> {
  const removeKeyValueResult = await readOnlyKnexDB.select()
    .from<FinalizeOperationRemoveKeyValueDb>('explorer.finalize_operation_remove_kv')
    .where('finalize_operation_id', finalizeOperation.id).first();

  return removeKeyValueResult;
}

async function _getRemoveMappingOperation(finalizeOperation: FinalizeOperationDb): Promise<FinalizeOperationRemoveMappingDb> {
  const removeMappingResult = await readOnlyKnexDB.select()
    .from<FinalizeOperationRemoveMappingDb>('explorer.finalize_operation_remove_mapping')
    .where('finalize_operation_id', finalizeOperation.id).first();

  return removeMappingResult;
}

async function _getExecuteTransitions(transactionExecute: TransactionExecute): Promise<AleoTransition[]> {
  const transitions = await readOnlyKnexDB.select()
    .from<Transition>('explorer.transition')
    .where('transaction_execute_id', transactionExecute.id);

  const aleoTransitions: AleoTransition[] = [];
  for (const transition of transitions) {
    aleoTransitions.push(await _getAleoTransition(transition));
  }
  
  return aleoTransitions;
}

async function _getAleoTransition(transition: Transition): Promise<AleoTransition> {
  const aleoTransition: AleoTransition = {
    id: transition.transition_id,
    program: transition.program_id,
    function: transition.function_name,
    inputs: [],
    outputs: [],
    tpk: transition.tpk,
    tcm: transition.tcm,
  }

  const transitionInputResult = await readOnlyKnexDB.select()
    .from<TransitionInput>('explorer.transition_input')
    .where('transition_id', transition.id);

  for (const transitionInput of transitionInputResult) {
    if (transitionInput.type == 'Private') {
      const transitionInputPrivateResult = await readOnlyKnexDB.select()
        .from<TransitionInputPrivate>('explorer.transition_input_private')
        .where('transition_input_id', transitionInput.id);

      for (const transitionInputPrivate of transitionInputPrivateResult) {
        aleoTransition.inputs.push({
          type: 'private',
          id: transitionInputPrivate.ciphertext_hash,
          value: transitionInputPrivate.ciphertext
        });
      }

    } else if (transitionInput.type == 'Public') {
      const transitionInputPublicResult = await readOnlyKnexDB.select()
        .from<TransitionInputPublic>('explorer.transition_input_public')
        .where('transition_input_id', transitionInput.id);
      
      for (const transitionInputPublic of transitionInputPublicResult) {
        aleoTransition.inputs.push({
          type: 'public',
          id: transitionInputPublic.plaintext_hash,
          value: String.fromCharCode.apply(null, new Uint16Array(transitionInputPublic.plaintext)) // Convert binary to string
        });
      }

    } else if (transitionInput.type == 'Record') {
      const transitionInputRecordResult = await readOnlyKnexDB.select()
        .from<TransitionInputRecord>('explorer.transition_input_record')
        .where('transition_input_id', transitionInput.id);

      for (const transitionInputRecord of transitionInputRecordResult) {
        aleoTransition.inputs.push({
          type: 'record',
          id: transitionInputRecord.serial_number,
          value: '',
          tag: transitionInputRecord.tag
        });
      }

    } else if (transitionInput.type == 'ExternalRecord') {
      const transitionInputExternalRecordResult = await readOnlyKnexDB.select()
        .from<TransitionInputExternalRecord>('explorer.transition_input_external_record')
        .where('transition_input_id', transitionInput.id);

      for (const transitionInputExternalRecord of transitionInputExternalRecordResult) {
        aleoTransition.inputs.push({
          type: 'external_record',
          id: transitionInputExternalRecord.commitment,
          value: ''
        });
      }
    }
  }

  const transitionOutputResult = await readOnlyKnexDB.select()
    .from<TransitionOutput>('explorer.transition_output')
    .where('transition_id', transition.id);

  for (const transitionOutput of transitionOutputResult) {
    if (transitionOutput.type == 'Private') {
      const transitionOutputPrivateResult = await readOnlyKnexDB.select()
        .from<TransitionOutputPrivate>('explorer.transition_output_private')
        .where('transition_output_id', transitionOutput.id);

      for (const transitionOutputPrivate of transitionOutputPrivateResult) {
        aleoTransition.outputs.push({
          type: 'private',
          id: transitionOutputPrivate.ciphertext_hash,
          value: transitionOutputPrivate.ciphertext
        });
      }

    } else if (transitionOutput.type == 'Public') {
      const transitionOutputPublicResult = await readOnlyKnexDB.select()
        .from<TransitionOutputPublic>('explorer.transition_output_public')
        .where('transition_output_id', transitionOutput.id);

      for (const transitionOutputPublic of transitionOutputPublicResult) {
        aleoTransition.outputs.push({
          type: 'public',
          id: transitionOutputPublic.plaintext_hash,
          value: transitionOutputPublic.plaintext
        });
      }

    } else if (transitionOutput.type == 'Record') {
      const transitionOutputRecordResult = await readOnlyKnexDB.select()
        .from<TransitionOutputRecord>('explorer.transition_output_record')
        .where('transition_output_id', transitionOutput.id);

      for (const transitionOutputRecord of transitionOutputRecordResult) {
        aleoTransition.outputs.push({
          type: 'record',
          id: transitionOutputRecord.commitment,
          checksum: transitionOutputRecord.checksum,
          value: transitionOutputRecord.record_ciphertext
        });
      }

    } else if (transitionOutput.type == 'ExternalRecord') {
      const transitionOutputExternalRecordResult = await readOnlyKnexDB.select()
        .from<TransitionOutputExternalRecord>('explorer.transition_output_external_record')
        .where('transition_output_id', transitionOutput.id);

      for (const transitionOutputExternalRecord of transitionOutputExternalRecordResult) {
        aleoTransition.outputs.push({
          type: 'external_record',
          id: transitionOutputExternalRecord.commitment,
          value: ''
        });
      }
    } else if (transitionOutput.type === 'Future') {
      const transitionInputFutureResult = await readOnlyKnexDB.select()
        .from<TransitionOutputFuture>('explorer.transition_output_future')
        .where('transition_output_id', transitionOutput.id);

      for (const transitionOutputFuture of transitionInputFutureResult) {
        aleoTransition.outputs.push({
          type: 'future',
          id: transitionOutputFuture.commitment,
          value: transitionOutputFuture.future_value
        });
      }
    }
  }

  return aleoTransition;
}

async function _getAdditionalFee(transaction: Transaction): Promise<{transition: AleoTransition, global_state_root: string, proof: string} | null> {
  const feeResult = await readOnlyKnexDB.select()
      .from<Fee>('explorer.fee')
      .where('transaction_id', transaction.id)
      .timeout(queryTimeout, { 
        cancel: true
      });

  if (feeResult.length == 0) return null;

  const fee = feeResult[0];
  const feeTransitionResult = await readOnlyKnexDB.select()
    .from<Transition>('explorer.transition')
    .where('fee_id', fee.id)
    .timeout(queryTimeout, { 
      cancel: true
    });
  if (feeTransitionResult.length == 0) return null;

  const feeTransition = feeTransitionResult[0];
  return {
    transition: await _getAleoTransition(feeTransition),
    global_state_root: fee.global_state_root,
    proof: fee.proof
  }
}

export async function getCoinbaseSummary(publicKey: string) {
  const summaryResult = (await readOnlyKnexDB('explorer.leaderboard')
    .where('address', publicKey)
  )[0];

  const defaultObject = {
    address: publicKey,
    total_reward: 0,
    total_incentive: 0,
    summary: {
      address: publicKey,
      total_reward: 0,
      total_incentive: 0
    }
  };

  if (!summaryResult) return defaultObject;

  defaultObject.total_reward = summaryResult.total_reward;
  defaultObject.summary.total_reward = summaryResult.total_reward;
  defaultObject.total_incentive = summaryResult.total_incentive;
  defaultObject.summary.total_incentive = summaryResult.total_incentive;

  return defaultObject;
}

const MAX_NUM_REWARDS = 1000;
export async function getCoinbaseRewards(publicKey: string, start: number, end: number, page?: number) {
  const pageNum = page || 0;
  const partialSolutions = (await readOnlyKnexDB.raw(`
    SELECT ps.commitment, ps.reward, ps.target, cs.target_sum, b.height, b.block_hash, b.timestamp, b.coinbase_reward
    FROM explorer.partial_solution AS ps
    INNER JOIN explorer.coinbase_solution AS cs ON ps.coinbase_solution_id = cs.id
    INNER JOIN explorer.block AS b ON cs.block_id = b.id
    WHERE b.height > :start AND b.height <= :end AND ps.address = :publicKey
    ORDER BY b.height DESC
    LIMIT :limit OFFSET :offset
  `, 
  {
    "start": start,
    "end": end,
    "publicKey": publicKey,
    "limit": MAX_NUM_REWARDS,
    "offset": pageNum * MAX_NUM_REWARDS
  })
  .timeout(queryTimeout, { 
    cancel: true
  })
  )['rows'];

  return {
    rewards: partialSolutions
  };
}

const MAX_NUM_RECORDS = 10000;
export async function getAllRecords(
  start: number,
  end: number,
  page = 0,
  recordsPerRequest: number = MAX_NUM_RECORDS
) {
  const offset = page * recordsPerRequest;
  const records = await readOnlyKnexDB('explorer.record_view')
    .select(
      'record_ciphertext',
      'program_id',
      'block_id',
      'height',
      'id',
      'timestamp',
      'block_hash',
      'transition_id',
      'transaction_id',
      'function_name',
      'output_index'
    )
    .where('height', '>=', start)
    .andWhere('height', '<', end)
    .orderBy('block_id', 'asc')
    .limit(recordsPerRequest)
    .offset(offset)
    .timeout(queryTimeout, { cancel: true });

  return records || [];
}

const MAX_BLOCKS_PUBLIC_TRANSACTIONS = 100_000;
export async function getPublicTransactionsForAddress(address: string, start: number, end: number, page?: number, transactionsPerRequest?: number) {
  const pageNum = page || 0;
  const maxTransactions = transactionsPerRequest || MAX_BLOCKS_PUBLIC_TRANSACTIONS;
  const offset = pageNum * maxTransactions;

  const transactions = await readOnlyKnexDB('explorer.public_transactions')
    .select('transaction_id')
    .where('block_height', '>=', start)
    .andWhere('block_height', '<', end)
    .andWhere('address', address)
    .orderBy('block_height', 'asc')
    .limit(maxTransactions)
    .offset(offset)
    .timeout(queryTimeout, { cancel: true });

  return transactions || [];
}

const MAX_NUM_TRANSITIONS = 10000;
export async function getTransitionsWithoutRecordInputs(start: number, end: number, page?: number, transitionsPerRequest?: number) {
  const pageNum = page || 0;
  const maxTransitions = transitionsPerRequest || MAX_NUM_TRANSITIONS;
  const transitions = (await readOnlyKnexDB.raw(`
    SELECT ts.transition_id, t.transaction_id, p.program, ts.function_name, b.height, ts.tpk, ts.tcm, b.timestamp
      FROM explorer.block b
      JOIN explorer.transaction t ON t.block_id = b.id
      JOIN explorer.transaction_execute te on te.transaction_id = t.id
      JOIN explorer.transition ts ON ts.transaction_execute_id = te.id
      JOIN explorer.transition_input ti ON ti.transition_id = ts.id
      JOIN explorer.program p ON p.program_id = ts.program_id
      WHERE b.height >= :start AND b.height < :end
      GROUP BY ts.id, b.height, t.transaction_id, p.program, b.timestamp
      HAVING string_agg(ti.type::text, ', ') not like '%Record%'
      ORDER BY b.height ASC
    LIMIT :limit OFFSET :offset
  `, 
  {
    start: start,
    end: end,
    limit: maxTransitions,
    offset: pageNum * maxTransitions
  })
  .timeout(queryTimeout, { 
    cancel: true
  }))['rows'] || [];

  return transitions;
}

const MAX_NUM_RECORD_INFOS = 100_000;
export async function getRecordOwnerInfos(
  start: number,
  end: number,
  page?: number,
  recordsPerRequest?: number
) {
  const pageNum = page || 0;
  const maxRecords = recordsPerRequest || MAX_NUM_RECORD_INFOS;

  const recordInfoQuery = readOnlyKnexDB<RecordMetadata>('explorer.record_info_view')
    .select(
      'transition_id',
      'nonce_x',
      'nonce_y',
      'owner_x',
      'output_index'
    )
    .where('height', '>=', start)
    .andWhere('height', '<', end)
    .orderBy('block_id', 'asc')
    .limit(maxRecords)
    .offset(pageNum * maxRecords)
    .timeout(queryTimeout, { cancel: true });
  const recordInfos = await recordInfoQuery;
  return recordInfos || [];
}

export async function getRecordsByBlock(blockHeight: number) {
  const recordMetadataQuery = readOnlyKnexDB<RecordMetadata>('explorer.record_info_view')
    .select(
      'id',
      'transition_id',
      'nonce_x',
      'nonce_y',
      'owner_x',
      'output_index'
    )
    .where('height', blockHeight)
    .timeout(queryTimeout, { cancel: true });
  const recordInfos = await recordMetadataQuery;
  return recordInfos || [];
}

export const MAX_NUM_RECORD_METADATA = 100_000;
export async function getRecordMetadata(
  startId: number,
  endId: number,
  includeTagged: boolean,
  page: number,
  recordsPerRequest: number,
): Promise<RecordMetadata[]> {
  const pageNum = page || 0;
  const maxRecords = recordsPerRequest || MAX_NUM_RECORD_METADATA;

  const recordMetadataQuery = readOnlyKnexDB<RecordMetadata>('explorer.record_info_view')
    .select(
      'id',
      'transition_id',
      'nonce_x',
      'nonce_y',
      'owner_x',
      'output_index',
    )
    .where('id', '>=', startId)
    .andWhere('id', '<', endId);

  if (!includeTagged) {
    recordMetadataQuery.whereNull('tag');
  }

  recordMetadataQuery
    .orderBy('id', 'asc')
    .limit(maxRecords)
    .offset(pageNum * maxRecords)
    .timeout(queryTimeout, { cancel: true });
  const recordInfos = await recordMetadataQuery;
  return recordInfos || [];
}

export async function getRecordOwnerInfosProtoBuf(
  start: number,
  end: number,
  page?: number,
  recordsPerRequest?: number
) {
  const pageNum = page || 0;
  const maxRecords = recordsPerRequest || MAX_NUM_RECORD_INFOS;

  const recordInfosQuery = readOnlyKnexDB('explorer.record_info_view')
    .select(
      'transition_id',
      'nonce_x',
      'nonce_y',
      'owner_x',
      'output_index'
    )
    .where('height', '>=', start)
    .andWhere('height', '<', end)
    .orderBy('block_id', 'asc')
    .limit(maxRecords)
    .offset(pageNum * maxRecords)
    .timeout(queryTimeout, { cancel: true });

  let recordInfos = await recordInfosQuery;
  recordInfos = recordInfos || [];

  const protobufRecordInfos = recordInfos.map(info => {
    return RecordInfo.create({
      transitionId: info.transition_id,
      nonceX: info.nonce_x,
      nonceY: info.nonce_y,
      ownerX: info.owner_x,
      outputIndex: info.output_index
    });
  });

  return protobufRecordInfos;
}

export async function getRecordsByTransitionAndIndex(recordIdentifiers: [string, number][]) {
    const records = await readOnlyKnexDB
      .select([
        'record_ciphertext',
        'program_id',
        'block_id',
        'height',
        'id',
        'timestamp',
        'block_hash',
        'transition_id',
        'transaction_id',
        'function_name',
        'output_index'
      ])
      .from('explorer.record_view')
      .whereIn(['transition_id', 'output_index'], recordIdentifiers);

    return records;
}

export async function getSerialNumberData(serialNumbers: string[]) {
  const serialNumberData = (await readOnlyKnexDB.raw(`
    SELECT serial_number, program_id, block_id, height, timestamp, transaction_id, transition_id
    FROM explorer.serial_number_data
    WHERE serial_number = ANY(:serialNumbers)
  `,
  {
    "serialNumbers": serialNumbers
  })
  .timeout(queryTimeout, { 
    cancel: true
  }))['rows'] || [];

  return serialNumberData;
}

export async function getProgram(programName: string) {
  const programResult = await readOnlyKnexDB.select('program')
    .from('explorer.program')
    .where('program_id', programName)
    .first()
    .timeout(queryTimeout, { 
      cancel: true
    });

  if (programResult) {
    return programResult.program;
  }
}

export async function getTransactionFee(transactionId: string) {
  const feeRows = (await readOnlyKnexDB.raw(`
    SELECT tx.transaction_id, ts.transition_id, ts.fee
    FROM explorer.transition as ts
    INNER JOIN explorer.fee as fee on ts.fee_id = fee.id
    INNER JOIN explorer.transaction as tx on tx.id = fee.transaction_id
    WHERE ts.fee > 0 AND tx.transaction_id = :transactionId
  `,
  {
    "transactionId": transactionId
  })
  .timeout(queryTimeout, { 
    cancel: true
  }))['rows'];

  if (feeRows && feeRows.length) {
    return feeRows[0].fee;
  }

  return 0;
}

export async function getTransactionsForProgram(programId: string, functionName: string, pageNum: number, maxTransactions: number) {
  const transactions = (await readOnlyKnexDB.raw(`
    SELECT tx.transaction_id, ts.transition_id, ts.function_name, ts.tpk, ts.tcm, tx.block_id, block.height, block.timestamp
    FROM explorer.transition as ts
    INNER JOIN explorer.transaction_execute as tx_execute on tx_execute.id = ts.transaction_execute_id
    INNER JOIN explorer.transaction as tx on tx.id = tx_execute.transaction_id
    INNER JOIN explorer.block as block on block.id = tx.block_id
    WHERE ts.program_id = :programId AND ts.function_name = :functionName
    ORDER BY block.height ASC
    LIMIT :limit OFFSET :offset
  `,
  {
    "programId": programId,
    "functionName": functionName,
    "limit": maxTransactions,
    "offset": pageNum * maxTransactions
  })
  .timeout(queryTimeout, { 
    cancel: true
  }))['rows'] || [];

  return transactions;
}

export async function getTransactionsForProgramCount(programId: string, functionName: string) {
  const result = await readOnlyKnexDB.raw(`
    SELECT COUNT(ts.id)
    FROM explorer.transition as ts
    WHERE ts.program_id = :programId AND ts.function_name = :functionName
  `,
  {
    "programId": programId,
    "functionName": functionName
  })
  .timeout(queryTimeout, { 
    cancel: true
  });

  return parseInt(result['rows'][0].count);
}

async function getPublicNFTDataFromTokenEditionHash(aleoAddress: string, editionHashData: TokenEditionHash): Promise<PublicNFTData | undefined> {
  const program = await readOnlyKnexDB.select()
    .from<Program>('explorer.program')
    .where('id', editionHashData.program_id)
    .first()
    .timeout(queryTimeout, {
      cancel: true
    });
  const mappingsResponse = await fetchEndpoint(mappingsPath(program.program_id))
  const mappings: string[] = await mappingsResponse.json();
  if (!mappings.includes('nft_owners') || (!mappings.includes('general_settings') && !mappings.includes('settings'))) {
    logger.error(`NFT program does not contain expected mappings, contains: ${mappings}`);
    return;
  }

  const mappingValueResponse = await fetchEndpoint(mappingValuePath(program.program_id, 'nft_owners', editionHashData.token_edition_hash))
  const address: string = await mappingValueResponse.json();
  if (address !== aleoAddress) {
    logger.info(`NFT no longer owned by ${aleoAddress}. Is now owned by ${address}`)
    return;
  }

  const transactionId = await getTransactionId(editionHashData.transition_id);
  const timestamp = await _getTimestamp(editionHashData);
  const baseUri = await _getBaseUri(program.program_id, mappings.includes('general_settings') ? 'general_settings' : 'settings');
  const symbol = await _getSymbol(program.program_id, mappings.includes('general_settings') ? 'general_settings' : 'settings');

  const dbNFTData = await readOnlyKnexDB.select()
    .from<NFTData>('explorer.nft_token_edition_hash_to_nft_data')
    .where('token_edition_hash', editionHashData.token_edition_hash)
    .andWhere('program_id', program.id)
    .first()

  const textDecoder = new TextDecoder('utf-8');
  const tokenId = textDecoder.decode(dbNFTData.token_id);
  const tokenIdJson = JSON.parse(formatJsonString(tokenId));
  let bigIntString = '';
  Object.keys(tokenIdJson).forEach((key: string) => {
    const u128Index = tokenIdJson[key].indexOf('u128');
    const bigNumberString: string = tokenIdJson[key].slice(0, u128Index);
    const charValue = bigIntToString(BigInt(bigNumberString));
    bigIntString += charValue;
  });

  return {
    transactionId: transactionId,
    timestamp: timestamp,
    programId: program.program_id,
    tokenId: tokenId,
    baseUri: baseUri,
    symbol: symbol,
    tokenIdString: bigIntString,
    edition: dbNFTData.edition
  };
}

type PublicNFTData = {
  transactionId: string;
  timestamp: bigint;
  programId: string;
  tokenId: string;
  baseUri: string;
  symbol: string;
  tokenIdString: string;
  edition: string;
}
export async function getPublicNFTsForAddress(aleoAddress: string): Promise<PublicNFTData[]> {
  const tokenEditionHashes = await readOnlyKnexDB.select()
    .from<TokenEditionHash>('explorer.nft_address_to_token_edition_hash')
    .where('aleo_address', aleoAddress)
    .timeout(queryTimeout, { 
      cancel: true
    })

  if (!tokenEditionHashes || tokenEditionHashes.length == 0) {
    return [];
  }
  const filteredEditionHashes = _filterEditionHashes(tokenEditionHashes);
  const ownedPublicNFTs: PublicNFTData[] = []

  for (const editionHashData of filteredEditionHashes) {
    try {
      const publicNFTData = await getPublicNFTDataFromTokenEditionHash(aleoAddress, editionHashData);
      if (publicNFTData) {
        ownedPublicNFTs.push(publicNFTData);
      }
    } catch (e) {
      logger.warn(`Error getting public NFT data for edition hash ${editionHashData.token_edition_hash}: ${e}`);
    }
  }
  
  return ownedPublicNFTs;
}

export async function getPublicTokenProgramsForAddress(aleoAddress: string): Promise<string[]> {
  const programs = await readOnlyKnexDB.select('program_name')
    .from('explorer.token_program_interactions')
    .where('aleo_address', aleoAddress)
    .timeout(queryTimeout, {
      cancel: true
    });

  const uniquePrograms = Array.from(new Set<string>(programs));
  return uniquePrograms;
}

export async function getProgramTypes(programIds: string[]): Promise<{ [key: string]: string }> {
  const programTypes: { [key: string]: string } = {};
  const result = await readOnlyKnexDB.select(['program_id', 'program_type'])
      .from('explorer.program')
      .whereIn('program_id', programIds);

  for (const row of result) {
    programTypes[row.program_id] = row.program_type;
  }

  return programTypes;
}

export async function getFullBlocks(startHeight: number, endHeight: number): Promise<Block[]> {
  const blockResult = await readOnlyKnexDB.select()
    .from('explorer.full_blocks')
    .where('height', '>=', startHeight)
    .andWhere('height', '<', endHeight);

  const blocks = blockResult.map(row => {
    // Convert the binary data back to a string
    const blockDataString = row.block_data.toString();

    // Parse the string as JSON to get the original object
    return JSON.parse(blockDataString);
  });

  return blocks;
}

function _filterEditionHashes(tokenEditionHashes: TokenEditionHash[]): TokenEditionHash[] {
  const seenEditionHashes: Map<string, TokenEditionHash> = new Map();

  for (const editionHash of tokenEditionHashes) {
    if (!seenEditionHashes.has(editionHash.token_edition_hash)) {
      seenEditionHashes.set(editionHash.token_edition_hash, editionHash);
    } else {
      const seenEditionHash = seenEditionHashes.get(editionHash.token_edition_hash);
      if (seenEditionHash.id < editionHash.id) {
        seenEditionHashes.set(editionHash.token_edition_hash, editionHash);
      }
    }
  }

  return [...seenEditionHashes.values()];
}

export async function getTransactionId(transitionId: string): Promise<string> {
  const transaction: any = await readOnlyKnexDB
    .select(readOnlyKnexDB.raw('COALESCE(tx.transaction_id, tx_fee.transaction_id) AS transaction_id'))
    .from('explorer.transition as ts')
    .leftJoin('explorer.transaction_execute as txe', 'ts.transaction_execute_id', 'txe.id')
    .leftJoin('explorer.transaction as tx', 'txe.transaction_id', 'tx.id')
    .leftJoin('explorer.fee as fee', 'ts.fee_id', 'fee.id')
    .leftJoin('explorer.transaction as tx_fee', 'fee.transaction_id', 'tx_fee.id')
    .where('ts.transition_id', transitionId)
    .first();
    
  return transaction.transaction_id;
}

async function _getTimestamp(editionHashData: TokenEditionHash): Promise<bigint> {
  const block = await readOnlyKnexDB.select()
    .from<Block>('explorer.block')
    .join('explorer.transaction', 'explorer.block.id', '=', 'explorer.transaction.block_id')
    .join('explorer.transaction_execute', 'explorer.transaction.id', '=', 'explorer.transaction_execute.transaction_id')
    .join('explorer.transition', 'explorer.transaction_execute.id', '=', 'explorer.transition.transaction_execute_id')
    .where('explorer.transition.transition_id', editionHashData.transition_id)
    .first();

  return block.timestamp;
}

async function _getBaseUri(programId: string, mappingName: string): Promise<string> {
  // v3 is 'settings' 4u8, 5u8, 6u8, 7u8
  // v4 is 'general_settings' 3u8, 4u8, 5u8, 6u8
  const baseUriBigInts: bigint[] = [];
  if (mappingName === 'settings') {
    for (let i = 4; i < 8; i++) {
      const mapKey = `${i}u8`;
      const mappingValueResponse = await fetchEndpoint(mappingValuePath(programId, mappingName, mapKey))
      const baseUriPart: string = await mappingValueResponse.json();
      const index = baseUriPart.indexOf('u128');
      baseUriBigInts.push(BigInt(baseUriPart.substring(0, index)));
    }
  } else if (mappingName === 'general_settings') {
    for (let i = 3; i < 7; i++) {
      const mapKey = `${i}u8`;
      const mappingValueResponse = await fetchEndpoint(mappingValuePath(programId, mappingName, mapKey))
      const baseUriPart: string = await mappingValueResponse.json();
      const index = baseUriPart.indexOf('u128');
      baseUriBigInts.push(BigInt(baseUriPart.substring(0, index)));
    }
  } else {
    throw new Error(`Unknown mapping name ${mappingName}`);
  }

  return joinBigIntsToString(baseUriBigInts);
}

async function _getSymbol(programId: string, mappingName: string): Promise<string> {
  const symbolBigInts: bigint[] = [];
  if (mappingName === 'settings') {
    const mapKey = '3u8';
    const mappingValueResponse = await fetchEndpoint(mappingValuePath(programId, mappingName, mapKey))
    const baseUriPart: string = await mappingValueResponse.json();
    const index = baseUriPart.indexOf('u128');
    symbolBigInts.push(BigInt(baseUriPart.substring(0, index)));
  } else if (mappingName === 'general_settings') {
    const mapKey = '2u8';
    const mappingValueResponse = await fetchEndpoint(mappingValuePath(programId, mappingName, mapKey))
    const baseUriPart: string = await mappingValueResponse.json();
    const index = baseUriPart.indexOf('u128');
    symbolBigInts.push(BigInt(baseUriPart.substring(0, index)));
  } else {
    throw new Error(`Unknown mapping name ${mappingName}`);
  }

  return joinBigIntsToString(symbolBigInts);
}

export function joinBigIntsToString(bigInts: bigint[]): string {
  let result = '';

  for (let i = 0; i < bigInts.length; i++) {
    const chunkString = bigIntToString(bigInts[i]);
    result += chunkString;
  }

  return result;
}

export const bigIntToString = (bigIntValue: bigint) => {
  const bytes: number[] = [];
  let tempBigInt = bigIntValue;

  while (tempBigInt > BigInt(0)) {
    const byteValue = Number(tempBigInt & BigInt(255));
    bytes.push(byteValue);
    tempBigInt = tempBigInt >> BigInt(8);
  }

  const decoder = new TextDecoder();
  const asciiString = decoder.decode(Uint8Array.from(bytes));
  return asciiString;
};

export async function getStakedBalanceForAddress(aleoAddress: string) {
  const microcreditSums = await readOnlyKnexDB.select('function_name', readOnlyKnexDB.raw('SUM(microcredits)'))
    .from('explorer.staking_transactions')
    .where('aleo_address', aleoAddress)
    .groupBy('function_name');

  const stakedSum = microcreditSums.find(group => group.function_name === 'bond_public').sum;
  const unstakedSum = microcreditSums.find(group => group.function_name === 'unbond_public').sum;
  
  return stakedSum - unstakedSum;
}

export async function isBlockHeightCurrent() {
  const blockResult = await readOnlyKnexDB.select()
    .from<Block>('explorer.block')
    .orderBy('height', 'desc')
    .limit(1)
    .timeout(queryTimeout, {
      cancel: true
  });

  const block =  blockResult.length ? blockResult[0] : null;

  if (!block) {
    return false;
  } else {
    return !isMoreThanFiveMinutesDifferent(block.timestamp);
  }
}
