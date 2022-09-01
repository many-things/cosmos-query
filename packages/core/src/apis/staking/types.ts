export interface Delegation {
  base_req: {
    from: string;
    memo: string;
    chain_id: string;
    account_number: string;
    sequence: string;
    gas: string;
    gas_adjustment: string;
    fees: {
      denom: string;
      amount: string;
    }[];

    simulate: boolean;
  };
  delegator_address: string;
  validator_address: string;
  amount: {
    denom: string;
    amount: string;
  };
}

export interface DelegationsResponse {
  msg: string[];
  fee: {
    gas: string;
    amount: {
      denom: string;
      amount: string;
    }[];
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
