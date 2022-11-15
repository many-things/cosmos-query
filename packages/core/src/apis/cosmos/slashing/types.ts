import type { PaginationResponse } from "../../../types";

export interface SlashingParams {
  params: {
    signed_blocks_window: string;
    min_signed_per_window: string;
    downtime_jail_duration: string;
    slash_fraction_double_sign: string;
    slash_fraction_downtime: string;
  };
}

export interface SigningInfo {
  address: string;
  start_height: string;
  index_offset: string;
  jailed_until: string;
  tombstoned: boolean;
  missed_blocks_counter: string;
}

export interface SigningInfosResponse {
  info: SigningInfo[];
  pagination: PaginationResponse;
}

export interface SigningInfoResponse {
  val_signing_info: SigningInfo;
}
