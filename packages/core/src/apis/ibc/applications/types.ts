import type { PaginationResponse } from "../../../types";

export interface DenomTrace {
  path: string;
  base_denom: string;
}

export interface DenomTracesResponse {
  denom_traces: DenomTrace[];
  pagination: PaginationResponse;
}

export interface DenomTraceResponse {
  denom_trace: DenomTrace;
}

export interface TransferParamsResponse {
  params: {
    send_enabled: boolean;
    receive_enabled: boolean;
  };
}
