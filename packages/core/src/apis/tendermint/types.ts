export interface SyncingResponse {
  syncing: boolean;
}

interface BlockHeader {
  chain_id: string;
  height: number;
  time: string;
  num_txs: number;
  last_block_id: {
    hash: string;
    parts: {
      total: number;
      hash: string;
    };
  };
  total_txs: number;
  last_commit_hash: string;
  data_hash: string;
  validators_hash: string;
  next_validators_hash: string;
  consensus_hash: string;
  app_hash: string;
  last_results_hash: string;
  evidence_hash: string;
  proposer_address: string;
  version: {
    block: number;
    app: number;
  };
}

export interface BlockResponse {
  block_meta: {
    header: BlockHeader;
    block_id: {
      hash: string;
      parts: {
        total: number;
        hash: string;
      };
    };
  };
  block: {
    header: BlockHeader;
    txs: string[];
    evidence: string[];
    last_commit: {
      block_id: {
        hash: string;
        parts: {
          total: number;
          hash: string;
        };
      };
      precommits: [
        {
          validator_address: string;
          validator_index: string;
          height: string;
          round: string;
          timestamp: string;
          type: number;
          block_id: {
            hash: string;
            parts: {
              total: number;
              hash: string;
            };
          };
          signature: string;
        }
      ];
    };
  };
}

export interface ValidatorSetResponse {
  block_height: string;
  validators: [
    {
      address: string;
      pub_key: string;
      voting_power: string;
      proposer_priority: string;
    }
  ];
}
