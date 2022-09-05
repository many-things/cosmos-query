import type { PaginationResponse } from "../../../types";

interface Gauge {
  id: string;
  is_perpetual: boolean;
  distribute_to: {
    lock_query_type: "ByDuration" | "ByTime";
    denom: string;
    duration: string;
    timestamp: string;
  };
  coins: {
    denom: string;
    amount: string;
  }[];
  start_time: string;
  num_epochs_paid_over: string;
  filled_epochs: string;
  distributed_coins: {
    denom: string;
    amount: string;
  }[];
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

interface Coin {
  denom: string;
  amount: string;
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
