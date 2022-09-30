import type { PaginationResponse } from "../../../types";
import type { Coin } from "../../../types";

export interface NumPoolsResponse {
  numPools: string;
}

interface Pool {
  "@type": string;
  address: string;
  id: string;
  pool_params: {
    lock: boolean;
    swap_fee: string;
    exitFee: string;
    smooth_weight_change_params: {
      start_time: string;
      duration: string;
      initial_pool_weights: {
        token: Coin;
        weight: string;
      }[];
      target_pool_weights: {
        token: Coin;
        weight: string;
      }[];
    } | null;
  };
  future_pool_governor: string;
  total_weight: string;
  total_shares: Coin;
  pool_assets: {
    weight: string;
    token: Coin;
  }[];
}

export interface PoolsResponse {
  pools: Pool[];
  pagination: PaginationResponse;
}

export interface PoolResponse {
  pool: Pool;
}

export interface PoolParamsResponse {
  params: {
    swap_fee: string;
    exitFee: string;
    smooth_weight_change_params: {
      start_time: string;
      duration: string;
      initial_pool_weights: {
        token: Coin;
        weight: string;
      }[];
      target_pool_weights: {
        token: Coin;
        weight: string;
      }[];
    };
    start_time: string;
  };
}

export interface PoolPriceResponse {
  spotPrice: string;
}

export interface PoolTokensResponse {
  pool_assets: {
    token: Coin;
    weight: string;
  }[];
}

export interface PoolTotalShare {
  totalShare: Coin;
}

export interface TotalLiquidityResponse {
  liquidity: Coin[];
}

export interface SwapExactAmountInResponse {
  tokenOutAmount: string;
}

export interface SwapExactAmountOutResponse {
  tokenInAmount: string;
}
