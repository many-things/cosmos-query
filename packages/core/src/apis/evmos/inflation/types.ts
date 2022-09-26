export interface CirculatingSupplyResponse {
  circulating_supply: {
    denom: string;
    amount: string;
  };
}

export interface EpochMintProvisionResponse {
  epoch_mint_provision: {
    denom: string;
    amount: string;
  };
}

export interface InflationRateResponse {
  inflation_rate: string;
}

export interface InflationParamsResponse {
  params: {
    mint_denom: string;
    exponential_calculation: {
      a: string;
      r: string;
      c: string;
      bonding_target: string;
      max_variance: string;
    };
    inflation_distribution: {
      staking_rewards: string;
      usage_incentives: string;
      community_pool: string;
    };
    enable_inflation: boolean;
  };
}
export interface InflationPeriodResponse {
  period: string;
}

export interface SkippedEpochsResponse {
  skipped_epochs: string;
}
