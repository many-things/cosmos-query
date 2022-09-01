export interface TxBroadcast {
  tx: {
    msg: string[];
    fee: {
      gas: string;
      amount: [
        {
          denom: string;
          amount: string;
        }
      ];
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
  };
  mode: "block" | "sync" | "async";
}

interface Tx {
  code: number;
  data: string;
  log: string;
  gas_used: number;
  gas_wanted: number;
  info: string;
  tags: Record<string, string>[];
}

export interface TxsResponse {
  check_tx: Tx;
  deliver_tx: Tx;
  hash: string;
  height: number;
}
