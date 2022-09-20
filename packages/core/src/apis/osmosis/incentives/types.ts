import type { PaginationResponse } from "../../../types";
import { Coin } from "../../../types/common";

interface Gauge {
  id: string;
  is_perpetual: boolean;
  distribute_to: {
    lock_query_type: "ByDuration" | "ByTime";
    denom: string;
    duration: string;
    timestamp: string;
  };
  coins: Coin[];
  start_time: string;
  num_epochs_paid_over: string;
  filled_epochs: string;
  distributed_coins: Coin[];
}

export interface ActiveGaugesResponse {
  data: Gauge[];
  pagination: PaginationResponse;
}

export interface GaugeByIdResponse {
  Gauge: Gauge;
}

export interface GaugesResponse {
  data: Gauge[];
  pagination: PaginationResponse;
}

export interface ModuleDistributedCoinsResponse {
  coins: Coin[];
}

export interface ModuleToDistributeCoinsResponse {
  coins: Coin[];
}

export interface RewardsEstResponse {
  coins: Coin[];
}

export interface UpcomingGaugesResponse {
  data: Gauge[];
  pagination: PaginationResponse;
}
