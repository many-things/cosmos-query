import { Coin } from "../../../types/common";

export type ActionParams =
  | "ActionAddLiquidity"
  | "ActionSwap"
  | "ActionVote"
  | "ActionDelegateStake";

export interface ClaimRecordResponse {
  claim_record: {
    address: string;
    initial_claimable_amount: Coin[];
    action_completed: boolean[];
  };
}

export interface ClaimableForActionResponse {
  coins: Coin[];
}

export interface ModuleAccountBalanceResponse {
  moduleAccountBalance: Coin[];
}

export interface ClaimParamsResponse {
  params: {
    airdrop_start_time: string;
    duration_until_decay: string;
    duration_of_decay: string;
    claim_denom: string;
  };
}

export interface TotalClaimableResponse {
  coins: Coin[];
}
