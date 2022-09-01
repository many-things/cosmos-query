export interface BlockResponse {
  block_id: {
    hash: string;
    part_set_header: {
      total: number;
      hash: string;
    };
  };
  block: {
    header: {
      version: {
        block: string;
        app: string;
      };
      chain_id: string;
      height: string;
      time: string;
      last_block_id: {
        hash: string;
        part_set_header: {
          total: number;
          hash: string;
        };
      };
      last_commit_hash: string;
      data_hash: string;
      validators_hash: string;
      next_validators_hash: string;
      consensus_hash: string;
      app_hash: string;
      last_results_hash: string;
      evidence_hash: string;
      proposer_address: string;
    };
    data: {
      txs: string[];
    };
    evidence: {
      evidence: [
        {
          duplicate_vote_evidence: {
            vote_a: {
              type: string;
              height: string;
              round: number;
              block_id: {
                hash: string;
                part_set_header: {
                  total: number;
                  hash: string;
                };
              };
              timestamp: string;
              validator_address: string;
              validator_index: number;
              signature: string;
            };
            vote_b: {
              type: string;
              height: string;
              round: number;
              block_id: {
                hash: string;
                part_set_header: {
                  total: number;
                  hash: string;
                };
              };
              timestamp: string;
              validator_address: string;
              validator_index: number;
              signature: string;
            };
            total_voting_power: string;
            validator_power: string;
            timestamp: string;
          };
          light_client_attack_evidence: {
            conflicting_block: {
              signed_header: {
                header: {
                  version: {
                    block: string;
                    app: string;
                  };
                  chain_id: string;
                  height: string;
                  time: string;
                  last_block_id: {
                    hash: string;
                    part_set_header: {
                      total: number;
                      hash: string;
                    };
                  };
                  last_commit_hash: string;
                  data_hash: string;
                  validators_hash: string;
                  next_validators_hash: string;
                  consensus_hash: string;
                  app_hash: string;
                  last_results_hash: string;
                  evidence_hash: string;
                  proposer_address: string;
                };
                commit: {
                  height: string;
                  round: number;
                  block_id: {
                    hash: string;
                    part_set_header: {
                      total: number;
                      hash: string;
                    };
                  };
                  signatures: {
                    block_id_flag: string;
                    validator_address: string;
                    timestamp: string;
                    signature: string;
                  }[];
                };
              };
              validator_set: {
                validators: [
                  {
                    address: string;
                    pub_key: {
                      ed25519: string;
                      secp256k1: string;
                    };
                    voting_power: string;
                    proposer_priority: string;
                  }
                ];
                proposer: {
                  address: string;
                  pub_key: {
                    ed25519: string;
                    secp256k1: string;
                  };
                  voting_power: string;
                  proposer_priority: string;
                };
                total_voting_power: string;
              };
            };
            common_height: string;
            byzantine_validators: {
              address: string;
              pub_key: {
                ed25519: string;
                secp256k1: string;
              };
              voting_power: string;
              proposer_priority: string;
            }[];
            total_voting_power: string;
            timestamp: string;
          };
        }
      ];
    };
    last_commit: {
      height: string;
      round: number;
      block_id: {
        hash: string;
        part_set_header: {
          total: number;
          hash: string;
        };
      };
      signatures: {
        block_id_flag: string;
        validator_address: string;
        timestamp: string;
        signature: string;
      }[];
    };
  };
}

export interface NodeInfoResponse {
  default_node_info: {
    protocol_version: {
      p2p: string;
      block: string;
      app: string;
    };
    default_node_id: string;
    listen_addr: string;
    network: string;
    version: string;
    channels: string;
    moniker: string;
    other: {
      tx_index: string;
      rpc_address: string;
    };
  };
  application_version: {
    name: string;
    app_name: string;
    version: string;
    git_commit: string;
    build_tags: string;
    go_version: string;
    build_deps: {
      path: string;
      version: string;
      sum: string;
    }[];
    cosmos_sdk_version: string;
  };
}

export interface SyncingResponse {
  syncing: boolean;
}

export interface ValidatorSetResponse {
  block_height: string;
  validators: {
    address: string;
    pub_key: {
      type_url: string;
      value: string;
    };
    voting_power: string;
    proposer_priority: string;
  }[];
  pagination: {
    next_key: string;
    total: string;
  };
}

export type PaginationParams =
  | {
      pagination?: {
        key?: string;
        offset?: string;
        limit?: string;
        count_total?: boolean;
        reverse?: boolean;
      };
    }
  | undefined;

export type OrderBy = "ORDER_BY_UNSPECIFIED" | "ORDER_BY_ASC" | "ORDER_BY_DESC";

export interface SimulateTxResponse {
  gas_info: {
    gas_wanted: string;
    gas_used: string;
  };
  result: {
    data: string;
    log: string;
    events: {
      type: string;
      attributes: {
        key: string;
        value: string;
        index: true;
      }[];
    }[];
  };
}

interface Tx {
  body: {
    messages: {
      type_url: string;
      value: string;
    }[];

    memo: string;
    timeout_height: string;
    extension_options: {
      type_url: string;
      value: string;
    }[];
    non_critical_extension_options: [
      {
        type_url: string;
        value: string;
      }
    ];
  };
  auth_info: {
    signer_infos: {
      public_key: {
        type_url: string;
        value: string;
      };
      mode_info: {
        single: {
          mode:
            | "SIGN_MODE_UNSPECIFIED"
            | "SIGN_MODE_DIRECT"
            | "SIGN_MODE_TEXTUAL"
            | "SIGN_MODE_LEGACY_AMINO_JSON";
        };
        multi: {
          bitarray: {
            extra_bits_stored: number;
            elems: string;
          };
          mode_infos: Record<string, string>[];
        };
      };
      sequence: string;
    }[];
    fee: {
      amount: [
        {
          denom: string;
          amount: string;
        }
      ];
      gas_limit: string;
      payer: string;
      granter: string;
    };
  };
  signatures: string[];
}

export interface SimulateTx {
  tx: Tx;
  tx_bytes: string;
}

interface TxResponse {
  height: string;
  txhash: string;
  codespace: string;
  code: number;
  data: string;
  raw_log: string;
  logs: {
    msg_index: number;
    log: string;
    events: {
      type: string;
      attributes: {
        key: string;
        value: string;
      }[];
    }[];
  }[];
  info: string;
  gas_wanted: string;
  gas_used: string;
  tx: {
    type_url: string;
    value: string;
  };
  timestamp: string;
}

export interface TxsEventResponse {
  txs: Tx[];
  tx_responses: TxResponse[];
  pagination: {
    next_key: string;
    total: string;
  };
}

export interface BroadcastTx {
  tx_bytes: string;
  mode:
    | "BROADCAST_MODE_UNSPECIFIED"
    | "BROADCAST_MODE_ASYNC"
    | "BROADCAST_MODE_BLOCK"
    | "BROADCAST_MODE_SYNC";
}

export interface BroadcastTxResponse {
  tx_response: TxResponse;
}

export interface TxByHashResponse {
  tx: Tx;
  tx_response: TxResponse;
}
