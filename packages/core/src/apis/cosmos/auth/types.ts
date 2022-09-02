import type { PaginationResponse } from "../../../types";

interface Account {
  type_url: string;
  value: string;
}

export interface AccountsResponse {
  accounts: Account[];
  pagination: PaginationResponse;
}

export interface AccountResponse {
  account: Account;
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
