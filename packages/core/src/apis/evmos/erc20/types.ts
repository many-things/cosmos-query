import type { Owner, PaginationResponse } from "../../../types";

export interface ERC20ParamsResponse {
  params: {
    enable_erc20: boolean;
    enable_evm_hook: boolean;
  };
}

interface TokenPair {
  erc20_address: string;
  denom: string;
  enabled: boolean;
  contract_owner: Owner;
}

export interface TokenPairsResponse {
  token_pairs: TokenPair[];
  pagination: PaginationResponse;
}

export interface TokenPairResponse {
  token_pair: TokenPair;
}
