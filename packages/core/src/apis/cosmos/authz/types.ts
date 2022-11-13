import type { PaginationResponse } from "../../../types";

export interface GrantsResponse {
  grants: {
    authorization: {
      "@type": string;
      msg: string;
    };
    expiration: string;
  }[];
  pagination: PaginationResponse;
}
