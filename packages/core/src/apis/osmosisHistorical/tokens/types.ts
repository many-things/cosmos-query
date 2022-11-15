export type AllTokensResponse = {
  price: number;
  denom: string;
  symbol: string;
  main: boolean;
  liquidity: number;
  volume_24h: number;
  volume_24h_change: number;
  name: string;
  price_24h_change: number;
  price_7d_change: number;
  exponent: number;
  display: string;
}[];

export type TokensMarketCapResponse = {
  symbol: string;
  market_cap: number;
}[];

export type TokenResponse = {
  price: number;
  denom: string;
  symbol: string;
  main: boolean;
  liquidity: number;
  liquidity_24h_change: number;
  volume_24h: number;
  volume_24h_change: number;
  name: string;
  price_24h_change: number;
  exponent: number;
  display: string;
}[];

export interface TokensHistoricalChartParams {
  symbol: string;
  tf: 5 | 15 | 30 | 60 | 120 | 240 | 720 | 1440 | 10080 | 43800;
}

export type TokensHistoricalChartResponse = {
  time: number;
  close: number;
  high: number;
  low: number;
  open: number;
  volume: number;
}[];

export interface Chart {
  time: string;
  value: number;
}

export type TokensLiquidityChartResponse = Chart[];

export type TokensVolumeChartResponse = Chart[];

export type TokenPriceResponse = {
  price: number;
  "24h_change": number;
};

export type TokensTopResponse = {
  name: string;
  symbol: string;
  denom: string;
  price: number;
  price_24h_change: number;
  main: boolean;
}[];

// TODO: Add type
export type TokenCountResponse = any;

export type TokensVolumeGlobalResponse = {
  count: { [symbol: string]: number };
};

export type TokensVolumeChartByPoolResponse = ({
  [symbol: string]: number | null;
} & {
  time: string;
})[];
