import type { Coin } from "../../../types/common";

export interface SuperfluidDelegationResponse {
  superfluid_delegation_records: {
    delegator_address: string;
    validator_address: string;
    delegation_amount: Coin;
    equivalent_staked_amount: Coin;
  }[];
  total_delegated_coins: Coin[];
  total_equivalent_staked_amount: Coin;
}
