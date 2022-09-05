import type { PaginationResponse } from "../../../types";

export interface NumPoolsResponse {
  numPools: string;
}

interface Pool {
  type_url: string;
  value: string;
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
        token: {
          denom: string;
          amount: string;
        };
        weight: string;
      }[];
      targetPoolWeights: {
        token: {
          denom: string;
          amount: string;
        };
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
    token: {
      denom: string;
      amount: string;
    };
    weight: string;
  }[];
}

export interface PoolTotalShare {
  totalShare: {
    denom: string;
    amount: string;
  };
}

export interface TotalLiquidityResponse {
  liquidity: {
    denom: string;
    amount: string;
  }[];
}

export interface SwapExactAmountInResponse {
  tokenOutAmount: string;
}

export interface SwapExactAmountOutResponse {
  tokenInAmount: string;
}