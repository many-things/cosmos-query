import type { BondStatus, PaginationResponse } from "../../../types";
import type { BlockIdentity } from "../../../types/common";
import type { Coin } from "../../../types/common";

interface DelegationResponse {
  delegation: {
    delegator_address: string;
    validator_address: string;
    shares: string;
  };
  balance: Coin;
}

export interface DelegatorDelegationsResponse {
  delegation_responses: DelegationResponse[];
  pagination: PaginationResponse;
}

export interface DelegatorRedelegationsResponse {
  redelegation_responses: {
    redelegation: {
      delegator_address: string;
      validator_src_address: string;
      validator_dst_address: string;
      entries: {
        creation_height: string;
        completion_time: string;
        initial_balance: string;
        shares_dst: string;
      }[];
    };
    entries: {
      redelegation_entry: {
        creation_height: string;
        completion_time: string;
        initial_balance: string;
        shares_dst: string;
      };
      balance: string;
    }[];
  }[];

  pagination: PaginationResponse;
}

interface UnbondingResponse {
  delegator_address: string;
  validator_address: string;
  entries: {
    creation_height: string;
    completion_time: string;
    initial_balance: string;
    balance: string;
  }[];
}

export interface DelegatorUnbondingDelegationsResponse {
  unbonding_responses: UnbondingResponse[];
  pagination: PaginationResponse;
}

interface Validator {
  operator_address: string;
  consensus_pubkey: {
    type_url: string;
    value: string;
  };
  jailed: boolean;
  status: BondStatus;
  tokens: string;
  delegator_shares: string;
  description: {
    moniker: string;
    identity: string;
    website: string;
    security_contact: string;
    details: string;
  };
  unbonding_height: string;
  unbonding_time: string;
  commission: {
    commission_rates: {
      rate: string;
      max_rate: string;
      max_change_rate: string;
    };
    update_time: string;
  };
  min_self_delegation: string;
}

export interface DelegatorValidatorsResponse {
  validators: Validator[];
  pagination: PaginationResponse;
}

export interface DelegatorValidatorResponse {
  validator: Validator;
}

export interface HistoricalInfoResponse {
  hist: {
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
    valset: Validator[];
  };
}

export interface StakingParamsResponse {
  params: {
    unbonding_time: string;
    max_validators: number;
    max_entries: number;
    historical_entries: number;
    bond_denom: string;
  };
}

export interface PoolResponse {
  pool: {
    not_bonded_tokens: string;
    bonded_tokens: string;
  };
}

export interface ValidatorsResponse {
  validators: Validator[];
  pagination: PaginationResponse;
}

export interface ValidatorResponse {
  validator: Validator;
}

export interface ValidatorDelegationsResponse {
  delegation_responses: DelegationResponse[];
  pagination: PaginationResponse;
}

export interface ValidatorDelegationResponse {
  delegation_response: DelegationResponse;
}

export interface ValidatorUnbondingDelegationsResponse {
  unbonding_responses: UnbondingResponse[];
  pagination: PaginationResponse;
}

export interface ValidatorUnbondingDelegationResponse {
  unbond: UnbondingResponse;
}
