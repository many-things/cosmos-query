export type PoolsAllResponse = {
  [poolId: string]: {
    symbol: string;
    amount: number;
    denom: string;
    coingecko_id: string;
    liquidity: number;
    liquidity_24h_change: number;
    volume_24h: number;
    volume_24h_change: number;
    volume_7d: number;
    price: number;
    fees: string;
    main: boolean;
  }[];
};

export type PoolResponse = {
  symbol: string;
  amount: number;
  denom: string;
  coingecko_id: string;
  liquidity: number;
  liquidity_24h_change: number;
  volume_24h: number;
  volume_24h_change: number;
  price: number;
  price_24h_change: number;
  fees: string;
}[];

interface Chart {
  time: string;
  value: number;
}

export type PoolLiquidityChartResponse = Chart[];

export type PoolVolumeChartResponse = Chart[];
