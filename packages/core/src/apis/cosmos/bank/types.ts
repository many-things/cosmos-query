import type { PaginationResponse } from "../../../types";

interface Balance {
  denom: string;
  amount: string;
}

export interface AllBalancesResponse {
  balances: Balance[];
  pagination: PaginationResponse;
}

export interface BalanceResponse {
  balance: Balance;
}

export interface DenomOwnersResponse {
  denom_owners: {
    address: string;
    balance: {
      denom: string;
      amount: string;
    };
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

interface Supply {
  denom: string;
  amount: string;
}

export interface TotalSupplyResponse {
  supply: Supply[];
  pagination: PaginationResponse;
}

export interface SupplyResponse {
  amount: Supply;
}
