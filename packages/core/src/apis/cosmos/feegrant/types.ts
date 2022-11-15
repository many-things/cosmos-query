import type { PaginationResponse } from "../../../types";

export interface Allowance {
  granter: string;
  grantee: string;
  allowance: {
    type_url: string;
    value: string;
  };
}

export interface AllowancesResponse {
  allowances: Allowance[];
  pagination: PaginationResponse;
}

export interface AllowanceResponse {
  allowance: Allowance;
}
