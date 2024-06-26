type AleoInputType = {
  type: 'record' | 'private' | 'public' | 'external_record';
  id: string;
  value: string;
  tag?: string;
};
  
type AleoOutputType = {
  type: 'record' | 'private' | 'public' | 'external_record' | 'future';
  id: string;
  checksum?: string;
  value: string;
};

export type AleoTransition = {
  id: string;
  program: string;
  function: string;
  inputs: AleoInputType[];
  outputs: AleoOutputType[];
  tpk: string;
  tcm: string;
};

export type DeployTransaction = {
  type: 'deploy';
  id: string;
  deployment: {
    edition: number;
    program: string;
  };
  fee?: {
    transition: AleoTransition;
    global_state_root: string;
    proof: string;
  };
};

export type ExecuteTransaction = {
  type: 'execute';
  id: string;
  execution: {
    transitions: AleoTransition[];
    global_state_root: string;
    proof: string;
  };
  fee?: {
    transition: AleoTransition;
    global_state_root: string;
    proof: string;
  };
};

export type FeeTransaction = {
  type: 'fee';
  id: string;
  fee?: {
    transition: AleoTransition;
    global_state_root: string;
    proof: string;
  };
}

export type AleoTransaction = {
  status: string;
  type: 'execute' | 'deploy' | 'fee';
  index: number;
  transaction: AleoTransactionInfo;
  finalizedAt: number;
}

export type AleoTransactionInfo = DeployTransaction | ExecuteTransaction | FeeTransaction;