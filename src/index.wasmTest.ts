import { checkStandards, checkExtractProgramName } from './shared/aleo-program/index.wasmTest';

console.log('Running wasm tests...');

console.log('Checking program standards...');
await checkStandards();

console.log('Checking program extraction...');
await checkExtractProgramName();
