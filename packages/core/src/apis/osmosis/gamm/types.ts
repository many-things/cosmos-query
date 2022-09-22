import type { PaginationResponse } from "../../../types";
import type { Coin } from "../../../types/common";

export interface NumPoolsResponse {
  numPools: string;
}

interface Pool {
  "@type": string;
  address: string;
  id: string;
  poolParams: {
    lock: boolean;
    swapFee: string;
    exitFee: string;
    smoothWeightChangeParams: {
      start_time: string;
      duration: string;
      initialPoolWeights: {
        token: Coin;
        weight: string;
      }[];
      targetPoolWeights: {
        token: Coin;
        weight: string;
      }[];
    } | null;
  };
  future_pool_governor: string;
  totalWeight: string;
  totalShares: Coin;
  poolAssets: {
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
    swapFee: string;
    exitFee: string;
    smoothWeightChangeParams: {
      start_time: string;
      duration: string;
      initialPoolWeights: {
        token: Coin;
        weight: string;
      }[];
      targetPoolWeights: {
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
  poolAssets: {
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
