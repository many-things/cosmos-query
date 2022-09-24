export interface MetricsResponse {
  volume_24h: number;
  volume_24h_change: number;
  liquidity_usd: number;
  liquidity_usd_24h: number;
}

export interface MessageResponse {
  message: string;
  status: string;
}
