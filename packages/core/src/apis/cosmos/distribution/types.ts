import { PaginationResponse } from "../../../types";

export interface CommunityPoolResponse {
  pool: {
    denom: string;
    amount: string;
  }[];
}

export interface DelegationTotalRewardsResponse {
  rewards: {
    validator_address: string;
    reward: {
      denom: string;
      amount: string;
    }[];
  }[];
  total: {
    denom: string;
    amount: string;
  }[];
}

export interface DelegationRewardsResponse {
  rewards: {
    denom: string;
    amount: string;
  }[];
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
    commission: {
      denom: string;
      amount: string;
    }[];
  };
}

export interface ValidatorOutstandingRewardsResponse {
  rewards: {
    rewards: {
      denom: string;
      amount: string;
    }[];
  };
}

export interface ValidatorSlashesResponse {
  slashes: {
    validator_period: string;
    fraction: string;
  }[];
  pagination: PaginationResponse;
}
