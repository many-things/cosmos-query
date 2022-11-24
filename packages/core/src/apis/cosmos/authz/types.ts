import type { PaginationResponse } from "../../../types";

export interface Grant {
  authorization: {
    "@type": string;
    msg: string;
  };
  expiration: string;
}

export interface GrantsResponse {
  grants: Grant[];
  pagination: PaginationResponse;
}
