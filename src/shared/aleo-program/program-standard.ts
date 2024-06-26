import * as Aleo from '@demox-labs/aleo-sdk-staging';

type AleoMapping = {
  name: string;
  key_type: string;
  value_type: string;
}

type AleoRecordMember = {
  name: string;
  type: string;
  struct_id?: string;
}

type AleoRecord = {
  record: string,
  members: AleoRecordMember[];
}

export type ProgramStandard = {
  db_type: string;
  mappings: AleoMapping[];
  records: AleoRecord[];
  functions: string[];
}

export const TokenStandard: ProgramStandard = {
  db_type: 'token',
  mappings: [
    {
      name: 'account',
      key_type: 'address',
      value_type: 'u64'
    },
    {
      name: 'approvals',
      key_type: 'field',
      value_type: 'u64'
    }
  ],
  records: [
    {
      record: 'token',
      members: [
        {
          name: 'amount',
          type: 'u64',
        }
      ]
    }
  ],
  functions: [
    'approve_public',
    'unapprove_public',
    'transfer_from_public',
    'transfer_public',
    'transfer_private',
    'transfer_private_to_public',
    'transfer_public_to_private'
  ]
}


export const NFTStandard: ProgramStandard = {
  db_type: 'nft',
  mappings: [
    {
      name: 'nft_owners',
      key_type: 'field',
      value_type: 'address'
    }
  ],
  records: [
    {
      record: 'NFT',
      members: [
        {
          name: 'data',
          type: 'struct',
          struct_id: 'TokenId',
        },
        {
          name: 'edition',
          type: 'scalar',
        }
      ]
    }
  ],
  functions: [
    // TODO: Add approve_public & unapprove_public
    "convert_public_to_private",
    "convert_private_to_public",
    "transfer_private",
    "transfer_public"
  ]
}

export const Standards: ProgramStandard[] = [
  TokenStandard,
  NFTStandard
]

export async function programMatchesStandard(programString: string, standard: ProgramStandard): Promise<boolean> {
  try {
    const aleoProgram = Aleo.Program.fromString(programString);

    // Check mappings
    const mappings = aleoProgram.getMappings();
    const mappingsMatch = standard.mappings.every((standardMapping: AleoMapping) => {
      const programMapping = mappings.find((mapping: AleoMapping) => standardMapping.name === mapping.name);
      return programMapping && standardMapping.key_type === programMapping.key_type && standardMapping.value_type === programMapping.value_type;
    });
    if (!mappingsMatch) return false;

    // Check records
    const recordsMatch = standard.records.every((standardRecord: AleoRecord) => {
      const programRecord = aleoProgram.getRecordMembers(standardRecord.record);
      if (!programRecord) return false;

      const membersMatch = standardRecord.members.every((standardMember: AleoRecordMember) => {
        const programMember = (programRecord as any).members.find((member: AleoRecordMember) => standardMember.name === member.name);
        return programMember && standardMember.type === programMember.type;
      });

      return membersMatch;
    });
    if (!recordsMatch) return false;

    // Check functions
    const functions = aleoProgram.getFunctions();
    const functionsMatch = standard.functions.every((standardFunction: string) => {
      return functions.includes(standardFunction);
    });

    return functionsMatch;
  } catch {
    return false;
  }
}
