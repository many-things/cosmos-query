import { Coin } from "../../types/common";

export interface Delegation {
  base_req: {
    from: string;
    memo: string;
    chain_id: string;
    account_number: string;
    sequence: string;
    gas: string;
    gas_adjustment: string;
    fees: Coin[];

    simulate: boolean;
  };
  delegator_address: string;
  validator_address: string;
  amount: Coin;
}

export interface DelegationsResponse {
  msg: string[];
  fee: {
    gas: string;
    amount: Coin[];
  };
  memo: string;
  signature: {
    signature: string;
    pub_key: {
      type: string;
      value: string;
    };
    account_number: string;
    sequence: string;
  };
}
