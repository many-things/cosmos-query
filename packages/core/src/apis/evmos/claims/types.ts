import type { Action, PaginationResponse } from "../../../types";

export interface ClaimsRecordsResponse {
  claims: {
    address: string;
    initial_claimable_amount: string;
    actions_completed: boolean[];
  }[];
  pagination: PaginationResponse;
}

export interface ClaimsRecordResponse {
  initial_claimable_amount: string;
  claims: {
    action: Action;
    completed: boolean;
    claimable_amount: string;
  }[];
}

export interface ClaimsParamsResponse {
  params: {
    enable_claims: boolean;
    airdrop_start_time: string;
    duration_until_decay: string;
    duration_of_decay: string;
    claims_denom: string;
    authorized_channels: string[];
    evm_channels: string[];
  };
}

export interface TotalUnclaimedResponse {
  coins: {
    denom: string;
    amount: string;
  }[];
}
