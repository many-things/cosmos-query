import type { PaginationResponse } from "../../../types";

export interface CurrentEpochResponse {
  current_epoch: string;
}

export interface EpochsResponse {
  epochs: {
    identifier: string;
    start_time: string;
    duration: string;
    current_epoch: string;
    current_epoch_start_time: string;
    epoch_counting_started: boolean;
    current_epoch_start_height: string;
  }[];
  pagination: PaginationResponse;
}
