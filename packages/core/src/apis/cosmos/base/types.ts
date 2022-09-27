import type { PaginationResponse } from "../../../types";
import type { BlockIdentity } from "../../../types";

export interface BlockResponse {
  block_id: BlockIdentity;
  block: {
    header: {
      version: {
        block: string;
        app: string;
      };
      chain_id: string;
      height: string;
      time: string;
      last_block_id: BlockIdentity;
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
      evidence: {
        duplicate_vote_evidence: {
          vote_a: {
            type: string;
            height: string;
            round: number;
            block_id: BlockIdentity;
            timestamp: string;
            validator_address: string;
            validator_index: number;
            signature: string;
          };
          vote_b: {
            type: string;
            height: string;
            round: number;
            block_id: BlockIdentity;
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
                last_block_id: BlockIdentity;
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
                block_id: BlockIdentity;
                signatures: {
                  block_id_flag: string;
                  validator_address: string;
                  timestamp: string;
                  signature: string;
                }[];
              };
            };
            validator_set: {
              validators: {
                address: string;
                pub_key: {
                  ed25519: string;
                  secp256k1: string;
                };
                voting_power: string;
                proposer_priority: string;
              }[];
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
      }[];
    };
    last_commit: {
      height: string;
      round: number;
      block_id: BlockIdentity;
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
  pagination: PaginationResponse;
}
