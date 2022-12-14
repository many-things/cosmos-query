import type { PaginationResponse } from "../../../types";

export interface EthereumAccount {
  "@type": string;
  base_account: {
    account_number: string;
    address: string;
    pub_key: null;
    sequence: string;
  };
  code_hash: string;
}

export interface Account {
  "@type": string;
  account_number: string;
  address: string;
  pub_key: {
    "@type": string;
    key: string;
  };
  sequence: string;
}

export interface AccountsResponse {
  accounts: Account[];
  pagination: PaginationResponse;
}

export interface AccountResponse {
  account: Account | EthereumAccount;
}

export interface AuthParamsResponse {
  params: {
    max_memo_characters: string;
    tx_sig_limit: string;
    tx_size_cost_per_byte: string;
    sig_verify_cost_ed25519: string;
    sig_verify_cost_secp256k1: string;
  };
}
