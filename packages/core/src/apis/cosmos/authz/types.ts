import type { PaginationResponse } from "../../../types";

export interface GrantsResponse {
  grants: {
    authorization: {
      type_url: string;
      value: string;
    };
    expiration: string;
  }[];
  pagination: PaginationResponse;
}
