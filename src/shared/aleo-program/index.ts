import * as Aleo from '@demox-labs/aleo-sdk-staging';
import logger from '../logger';
import { Standards, programMatchesStandard } from './program-standard';

export async function extractProgramName(programString: string): Promise<string | null> {
  try { 
    const program = Aleo.Program.fromString(programString);
    const programId = program.id();
    return programId;
  } catch (err) {
    logger.error(`Error extracting program name: ${err}`);
    return null;
  }
}

export function extractMicrocredits(record: string): bigint {
  const microcreditsRegex = /microcredits:\s*([\d]+)u64\.private/;
  const match = record.match(microcreditsRegex);
  return match ? BigInt(match[1]) : BigInt(0);
}

export async function getProgramType(programString: string): Promise<string> {
  for (const standard of Standards) {
    if (await programMatchesStandard(programString, standard)) {
      return standard.db_type;
    }
  }

  return 'untyped';
}