import type { PaginationResponse } from "../../../types";

export interface grant {
  authorization: {
    "@type": string;
    msg: string;
  };
  expiration: string;
}

export interface GrantsResponse {
  grants: grant[];
  pagination: PaginationResponse;
}
