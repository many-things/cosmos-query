import type { PaginationResponse } from "../../../types";

interface Guage {
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

export interface ActiveGuagesResponse {
  data: Guage[];
  pagination: PaginationResponse;
}

export interface GuageByIdResponse {
  guage: Guage;
}

export interface GuagesResponse {
  data: Guage[];
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
  data: Guage[];
  pagination: PaginationResponse;
}
