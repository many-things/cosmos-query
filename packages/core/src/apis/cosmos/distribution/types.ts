import type { PaginationResponse } from "../../../types";
import type { Coin } from "../../../types";

export interface CommunityPoolResponse {
  pool: Coin[];
}

export interface DelegationTotalRewardsResponse {
  rewards: {
    validator_address: string;
    reward: Coin[];
  }[];
  total: Coin[];
}

export interface DelegationRewardsResponse {
  rewards: Coin[];
}

export interface DelegatorValidatorAddressesResponse {
  validators: string[];
}

export interface DelegatorWithdrawAddressResponse {
  withdraw_address: string;
}

export interface DistributionParamsResponse {
  params: {
    community_tax: string;
    base_proposer_reward: string;
    bonus_proposer_reward: string;
    withdraw_addr_enabled: boolean;
  };
}

export interface ValidatorCommissionResponse {
  commission: {
    commission: Coin[];
  };
}

export interface ValidatorOutstandingRewardsResponse {
  rewards: {
    rewards: Coin[];
  };
}

export interface ValidatorSlashesResponse {
  slashes: {
    validator_period: string;
    fraction: string;
  }[];
  pagination: PaginationResponse;
}
