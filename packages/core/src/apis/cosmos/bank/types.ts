import type { PaginationResponse } from "../../../types";
import type { Coin } from "../../../types/common";

export interface AllBalancesResponse {
  balances: Coin[];
  pagination: PaginationResponse;
}

export interface BalanceResponse {
  balance: Coin;
}

export interface DenomOwnersResponse {
  denom_owners: {
    address: string;
    balance: Coin;
  }[];
  pagination: PaginationResponse;
}

interface Metadata {
  description: string;
  denom_units: {
    denom: string;
    exponent: number;
    aliases: string[];
  }[];
  base: string;
  display: string;
  name: string;
  symbol: string;
  uri: string;
  uri_hash: string;
}

export interface AllDenomsMetadataResponse {
  metadatas: Metadata[];
  pagination: PaginationResponse;
}

export interface DenomMetadataResponse {
  metadata: Metadata;
}

export interface BankParamsResponse {
  params: {
    send_enabled: {
      denom: string;
      enabled: boolean;
    }[];
    default_send_enabled: boolean;
  };
}

export interface TotalSupplyResponse {
  supply: Coin[];
  pagination: PaginationResponse;
}

export interface SupplyResponse {
  amount: Coin;
}
