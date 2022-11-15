import type { PaginationResponse } from "../../../types";

export interface Evidence {
  type_url: string;
  value: string;
}

export interface AllEvidenceResponse {
  evidence: Evidence[];
  pagination: PaginationResponse;
}

export interface EvidenceResponse {
  evidence: Evidence;
}
