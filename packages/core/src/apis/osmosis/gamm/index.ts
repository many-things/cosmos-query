import { instance } from "../../../utils";
import type { OsmosisPaginationParams } from "../../../types";
import type {
  NumPoolsResponse,
  PoolParamsResponse,
  PoolPriceResponse,
  PoolsResponse,
  PoolResponse,
  PoolTokensResponse,
  PoolTotalShare,
  SwapExactAmountInResponse,
  SwapExactAmountOutResponse,
  TotalLiquidityResponse,
} from "./types";

export type {
  NumPoolsResponse,
  PoolParamsResponse,
  PoolPriceResponse,
  PoolsResponse,
  PoolResponse,
  PoolTokensResponse,
  PoolTotalShare,
  SwapExactAmountInResponse,
  SwapExactAmountOutResponse,
  TotalLiquidityResponse,
};

export const getNumPools =
  (baseURL: string) => async (): Promise<NumPoolsResponse> => {
    return (await instance(baseURL).get("/osmosis/gamm/v1beta1/num_pools"))
      .data;
  };

export const getPools =
  (baseURL: string) =>
  async ({
    pagination,
  }: {
    pagination?: OsmosisPaginationParams;
  }): Promise<PoolsResponse> => {
    return (
      await instance(baseURL).get("/osmosis/gamm/v1beta1/pools", {
        params: { pagination },
      })
    ).data;
  };

export const getPool =
  (baseURL: string) =>
  async ({ poolId }: { poolId: string }): Promise<PoolResponse> => {
    return (
      await instance(baseURL).get(`/osmosis/gamm/v1beta1/pools/${poolId}`)
    ).data;
  };

export const getPoolParams =
  (baseURL: string) =>
  async ({ poolId }: { poolId: string }): Promise<PoolParamsResponse> => {
    return (
      await instance(baseURL).get(
        `/osmosis/gamm/v1beta1/pools/${poolId}/params`
      )
    ).data;
  };

export const getPoolPrice =
  (baseURL: string) =>
  async ({
    poolId,
    tokenInDenom,
    tokenOutDenom,
    withSwapFee,
  }: {
    poolId: string;
    tokenInDenom?: string;
    tokenOutDenom?: string;
    withSwapFee?: boolean;
  }): Promise<PoolPriceResponse> => {
    return (
      await instance(baseURL).get(
        `/osmosis/gamm/v1beta1/pools/${poolId}/prices`,
        {
          params: {
            tokenInDenom,
            tokenOutDenom,
            withSwapFee,
          },
        }
      )
    ).data;
  };

export const getPoolTokens =
  (baseURL: string) =>
  async ({ poolId }: { poolId: string }): Promise<PoolTokensResponse> => {
    return (
      await instance(baseURL).get(
        `/osmosis/gamm/v1beta1/pools/${poolId}/tokens`
      )
    ).data;
  };

export const getPoolTotalShare =
  (baseURL: string) =>
  async ({ poolId }: { poolId: string }): Promise<PoolTotalShare> => {
    return (
      await instance(baseURL).get(
        `/osmosis/gamm/v1beta1/pools/${poolId}/total_share`
      )
    ).data;
  };

export const getTotalLiquidity =
  (baseURL: string) => async (): Promise<TotalLiquidityResponse> => {
    return (
      await instance(baseURL).get("/osmosis/gamm/v1beta1/total_liquidity")
    ).data;
  };

export const getSwapExactAmountIn =
  (baseURL: string) =>
  async ({
    poolId,
    sender,
    tokenIn,
  }: {
    poolId: string;
    sender?: string;
    tokenIn?: string;
  }): Promise<SwapExactAmountInResponse> => {
    return (
      await instance(baseURL).get(
        `/osmosis/gamm/v1beta1/${poolId}/estimate/swap_exact_amount_in`,
        {
          params: { sender, tokenIn },
        }
      )
    ).data;
  };

export const getSwapExactAmountOut =
  (baseURL: string) =>
  async ({
    poolId,
    sender,
    tokenOut,
  }: {
    poolId: string;
    sender?: string;
    tokenOut?: string;
  }): Promise<SwapExactAmountOutResponse> => {
    return (
      await instance(baseURL).get(
        `/osmosis/gamm/v1beta1/${poolId}/estimate/swap_exact_amount_out`,
        {
          params: {
            sender,
            tokenOut,
          },
        }
      )
    ).data;
  };
