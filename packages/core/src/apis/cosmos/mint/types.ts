export interface AnnualProvisionsResponse {
  annual_provisions: string;
}

export interface InflationResponse {
  inflation: string;
}

export interface MintingParamsResponse {
  params: {
    mint_denom: string;
    inflation_rate_change: string;
    inflation_max: string;
    inflation_min: string;
    goal_bonded: string;
    blocks_per_year: string;
  };
}
