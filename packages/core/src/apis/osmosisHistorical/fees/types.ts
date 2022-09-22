export interface TotalFeesResponse {
  value: number;
}

export interface PoolFeesResponse {
  last_update_at: number;
  data: {
    pool_id: string;
    volume_24h: string;
    volume_7d: string;
    fees_spent_24h: string;
    fees_spent_7d: string;
    fees_percentage: string;
  }[];
}

export type HistoricalFeeResponse = {
  time: string;
  fees_spent: number;
}[];
