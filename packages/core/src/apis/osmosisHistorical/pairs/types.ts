export interface PairsSummaryResponse {
  updated_at: number;
  data: {
    pool_address: string;
    pool_id: string;
    base_name: string;
    base_symbol: string;
    base_address: string;
    quote_name: string;
    quote_symbol: string;
    quote_address: string;
    price: number;
    base_volume_24h: number;
    quote_volume_24h: number;
    volume_24h: number;
    volume_7d: number;
    liquidity: number;
    liquidity_atom: number;
  }[];
}

export interface PairsHistoricalChartParams {
  poolId: number;
  assetIn: string;
  assetOut: string;
  assetType: "7d" | "1mo" | "1y" | "all";
  range: "symbol" | "denom";
}

export type PairsHistoricalChartResponse = {
  close: number;
  high: number;
  low: number;
  open: number;
  time: number;
}[];
