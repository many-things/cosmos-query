import type { BroadcastMode, SignMode } from "../../../types";
import type { Coin } from "../../../types/common";

export type OrderBy = "ORDER_BY_UNSPECIFIED" | "ORDER_BY_ASC" | "ORDER_BY_DESC";

export interface SimulateTxResponse {
  gas_info: {
    gas_wanted: string;
    gas_used: string;
  };
  result: {
    data: string;
    log: string;
    events: {
      type: string;
      attributes: {
        key: string;
        value: string;
        index: boolean;
      }[];
    }[];
  };
}

interface Tx {
  body: {
    messages: {
      type_url: string;
      value: string;
    }[];

    memo: string;
    timeout_height: string;
    extension_options: {
      type_url: string;
      value: string;
    }[];
    non_critical_extension_options: {
      type_url: string;
      value: string;
    }[];
  };
  auth_info: {
    signer_infos: {
      public_key: {
        type_url: string;
        value: string;
      };
      mode_info: {
        single: {
          mode: SignMode;
        };
        multi: {
          bitarray: {
            extra_bits_stored: number;
            elems: string;
          };
          mode_infos: Record<string, string>[];
        };
      };
      sequence: string;
    }[];
    fee: {
      amount: Coin[];

      gas_limit: string;
      payer: string;
      granter: string;
    };
  };
  signatures: string[];
}

export interface SimulateTx {
  tx: Tx;
  tx_bytes: string;
}

interface TxResponse {
  height: string;
  txhash: string;
  codespace: string;
  code: number;
  data: string;
  raw_log: string;
  logs: {
    msg_index: number;
    log: string;
    events: {
      type: string;
      attributes: {
        key: string;
        value: string;
      }[];
    }[];
  }[];
  info: string;
  gas_wanted: string;
  gas_used: string;
  tx: {
    type_url: string;
    value: string;
  };
  timestamp: string;
}

export interface TxsEventResponse {
  txs: Tx[];
  tx_responses: TxResponse[];
  pagination: {
    next_key: string;
    total: string;
  };
}

export interface BroadcastTx {
  tx_bytes: string;
  mode: BroadcastMode;
}

export interface BroadcastTxResponse {
  tx_response: TxResponse;
}

export interface TxByHashResponse {
  tx: Tx;
  tx_response: TxResponse;
}
