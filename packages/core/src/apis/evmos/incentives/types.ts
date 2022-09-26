import type { PaginationResponse } from "../../../types";

export interface AllocationMetersResponse {
  allocation_meters: {
    denom: string;
    amount: string;
  }[];
  pagination: PaginationResponse;
}

export interface AllocationMeterResponse {
  allocation_meter: {
    denom: string;
    amount: string;
  };
}

export interface GasMetersResponse {
  gas_meters: {
    contract: string;
    participant: string;
    cumulative_gas: string;
  }[];
  pagination: PaginationResponse;
}

export interface GasMeterResponse {
  gas_meter: string;
}

interface Incentive {
  contract: string;
  allocations: {
    denom: string;
    amount: string;
  }[];
  epochs: number;
  start_time: string;
  total_gas: string;
}

export interface IncentivesResponse {
  incentives: Incentive[];
  pagination: PaginationResponse;
}

export interface IncentiveResponse {
  incentive: Incentive;
}

export interface IncentivesParamsResponse {
  params: {
    enable_incentives: boolean;
    allocation_limit: string;
    incentives_epoch_identifier: string;
    reward_scaler: string;
  };
}
