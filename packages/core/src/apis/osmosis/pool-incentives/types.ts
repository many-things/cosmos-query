export interface DistrInfoResponse {
  distr_info: {
    total_weight: string;
    records: {
      gauge_id: string;
      weight: string;
    }[];
  };
}

export interface GaugeIdsResponse {
  gauge_ids_with_duration: {
    gauge_id: string;
    duration: string;
  }[];
}

export interface IncentivizedPoolsResponse {
  incentivized_pools: {
    pool_id: string;
    lockable_duration: string;
    gauge_id: string;
  }[];
}

export interface LockableDurationsResponse {
  lockable_durations: string[];
}

export interface PoolIncentivesParamsResponse {
  params: {
    minted_denom: string;
  };
}
