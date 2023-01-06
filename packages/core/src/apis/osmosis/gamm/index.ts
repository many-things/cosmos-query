import { AxiosInstance } from "axios";
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
  (instance: AxiosInstance) => async (): Promise<NumPoolsResponse> => {
    return (await instance.get("/osmosis/gamm/v1beta1/num_pools")).data;
  };

export const getPools =
  (instance: AxiosInstance) =>
  async ({
    pagination,
  }: {
    pagination?: OsmosisPaginationParams;
  }): Promise<PoolsResponse> => {
    return (
      await instance.get("/osmosis/gamm/v1beta1/pools", {
        params: { pagination },
      })
    ).data;
  };

export const getPool =
  (instance: AxiosInstance) =>
  async ({ poolId }: { poolId: string }): Promise<PoolResponse> => {
    return (await instance.get(`/osmosis/gamm/v1beta1/pools/${poolId}`)).data;
  };

export const getPoolParams =
  (instance: AxiosInstance) =>
  async ({ poolId }: { poolId: string }): Promise<PoolParamsResponse> => {
    return (await instance.get(`/osmosis/gamm/v1beta1/pools/${poolId}/params`))
      .data;
  };

export const getPoolPrice =
  (instance: AxiosInstance) =>
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
      await instance.get(`/osmosis/gamm/v1beta1/pools/${poolId}/prices`, {
        params: {
          tokenInDenom,
          tokenOutDenom,
          withSwapFee,
        },
      })
    ).data;
  };

export const getPoolTokens =
  (instance: AxiosInstance) =>
  async ({ poolId }: { poolId: string }): Promise<PoolTokensResponse> => {
    return (await instance.get(`/osmosis/gamm/v1beta1/pools/${poolId}/tokens`))
      .data;
  };

export const getPoolTotalShare =
  (instance: AxiosInstance) =>
  async ({ poolId }: { poolId: string }): Promise<PoolTotalShare> => {
    return (
      await instance.get(`/osmosis/gamm/v1beta1/pools/${poolId}/total_share`)
    ).data;
  };

export const getTotalLiquidity =
  (instance: AxiosInstance) => async (): Promise<TotalLiquidityResponse> => {
    return (await instance.get("/osmosis/gamm/v1beta1/total_liquidity")).data;
  };

export const getSwapExactAmountIn =
  (instance: AxiosInstance) =>
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
      await instance.get(
        `/osmosis/gamm/v1beta1/${poolId}/estimate/swap_exact_amount_in`,
        {
          params: { sender, tokenIn },
        }
      )
    ).data;
  };

export const getSwapExactAmountOut =
  (instance: AxiosInstance) =>
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
      await instance.get(
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
