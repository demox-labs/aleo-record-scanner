import { StringLiteral } from "typescript";

export interface Block {
  id: number;
  height: string;
  block_hash: string;
  previous_hash: string;
  previous_state_root: string;
  transactions_root: string;
  coinbase_accumulator_point: string;
  round: string;
  coinbase_target: string;
  proof_target: string;
  last_coinbase_target: string;
  last_coinbase_timestamp: string;
  timestamp: string;
  signature: string;
  coinbase_reward: string;
  transactions: Transaction[];
}

export interface Transaction {
  id: number;
  block_id: number;
  transaction_id: string;
  type: 'Execute' | 'Deploy' | 'Fee';
  index: number;
  status: 'accepted' | 'rejected';
}

export interface TransactionExecute {
  id: number;
  transaction_id: number;
  global_state_root: string;
  proof: string;
  index: number;
}

export interface TransactionDeploy {
  id: number;
  transaction_id: number;
  edition: number;
}

export interface Program {
  id: number;
  transaction_deploy_id: number;
  program_id: string;
  program: string;
  program_type: string;
}

export interface Transition {
  id: number;
  transition_id: string;
  transaction_execute_id: number;
  fee_id: number;
  program_id: string;
  function_name: string;
  proof: string;
  tpk: string;
  tcm: string;
  fee: number;
  index: number;
}

export interface Fee {
  id: number;
  transaction_id: number;
  global_state_root: string;
  proof: string;
}

export interface TransitionInput {
  id: number;
  transition_id: number;
  type: string;
  index: number;
}

export interface TransitionInputPrivate {
  id: number;
  transition_input_id: number;
  ciphertext_hash: string;
  ciphertext: string;
}

export interface TransitionInputPublic {
  id: number;
  transition_input_id: number;
  plaintext_hash: string;
  plaintext: any;
}

export interface TransitionInputRecord { 
  id: number;
  transition_input_id: number;
  serial_number: string;
  tag: string;
}

export interface TransitionInputExternalRecord {
  id: number;
  transition_input_id: number;
  commitment: string;
}

export interface TransitionOutput {
  id: number;
  transition_id: number;
  type: string;
  index: number;
}

export interface TransitionOutputPrivate {
  id: number;
  transition_output_id: number;
  ciphertext_hash: string;
  ciphertext: string;
}

export interface TransitionOutputPublic {
  id: number;
  transition_output_id: number;
  plaintext_hash: string;
  plaintext: any;
}

export interface TransitionOutputRecord {
  id: number;
  transition_output_id: number;
  commitment: string;
  checksum: string;
  record_ciphertext: string;
  nonce_x_coordinate: string | null;
  nonce_y_coordinate: string | null;
  record_owner_x_coordinate: string | null;
  is_owner_public: boolean | null;
}

export interface TransitionOutputFuture {
  id: number;
  commitment: string;
  future_value: string;
}

export enum TransitionFinalizeType {
  Plaintext = 'Plaintext',
  Record = 'Record',
}

export interface TransitionFinalize {
  id: number;
  transition_id: number;
  type: TransitionFinalizeType;
  index: number;
}

export interface TransitionFinalizePlaintext {
  id: number;
  transition_finalize_id: number;
  plaintext: BinaryData;
}

export interface TransitionOutputExternalRecord {
  id: number;
  transition_output_id: number;
  commitment: string;
}

export interface Program {
  id: number;
  transaction_deploy_id: number;
  program_id: string;
  program: string;
  program_type: string;
}

export interface TokenEditionHash {
  id: number;
  program_id: number;
  aleo_address: string;
  token_edition_hash: string;
  transition_id: string;
}

export interface NFTData {
  id: number;
  program_id: number;
  token_edition_hash_id: number;
  token_id: BinaryData;
  edition: string;
  transition_id: string;
}

export interface FinalizeOperationDb {
  id: number,
  transaction_id: number,
  type: 'InitializeMapping' | 'InsertKeyValue' | 'UpdateKeyValue' | 'RemoveKeyValue' | 'RemoveMapping'
}

export interface FinalizeOperationInitializeMappingDb {
  id: number,
  finalize_operation_id: number,
  mapping_id: string
}

export interface FinalizeOperationInsertKeyValueDb {
  id: number,
  finalize_operation_id: number,
  mapping_id: string,
  key_id: string,
  value_id: string
}

export interface FinalizeOperationRemoveKeyValueDb {
  id: number,
  finalize_operation_id: number,
  mapping_id: string,
  key_id: string,
  index: number
}

export interface FinalizeOperationRemoveMappingDb {
  id: number,
  finalize_operation_id: number,
  mapping_id: string
}

export interface FinalizeOperationUpdateKeyValueDb {
  id: number,
  finalize_operation_id: number,
  mapping_id: string,
  key_id: string,
  value_id: string,
  index: number
}

export interface DBBlockHeightJob {
  id: number,
  job_name: string;
  target_block_height: number;
  current_updated_block_height: number;
}

export interface RecordMetadata {
  id: number;
  transition_id: string;
  nonce_x: string;
  nonce_y: string;
  owner_x: string;
  outputIndex: number;
}