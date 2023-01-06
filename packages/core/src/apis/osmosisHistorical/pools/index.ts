import { AxiosInstance } from "axios";
import type {
  AllPoolsResponse,
  PoolResponse,
  PoolLiquidityChartResponse,
  PoolVolumeChartResponse,
} from "./types";

export type {
  AllPoolsResponse,
  PoolResponse,
  PoolLiquidityChartResponse,
  PoolVolumeChartResponse,
};

export const getAllPools =
  (instance: AxiosInstance) =>
  async ({
    lowLiquidity,
  }: {
    lowLiquidity: boolean;
  }): Promise<AllPoolsResponse> => {
    return (
      await instance.get("/pools/v2/all", {
        params: {
          low_liquidity: lowLiquidity,
        },
      })
    ).data;
  };

export const getPool =
  (instance: AxiosInstance) =>
  async ({ poolId }: { poolId: number }): Promise<PoolResponse> => {
    return (await instance.get(`/pools/v2/${poolId}`)).data;
  };

export const getPoolLiquidityChart =
  (instance: AxiosInstance) =>
  async ({
    poolId,
  }: {
    poolId: number;
  }): Promise<PoolLiquidityChartResponse> => {
    return (await instance.get(`/pools/v2/liquidity/${poolId}/chart`)).data;
  };

export const getPoolVolumeChart =
  (instance: AxiosInstance) =>
  async ({ poolId }: { poolId: number }): Promise<PoolVolumeChartResponse> => {
    return (await instance.get(`/pools/v2/volume/${poolId}/chart`)).data;
  };
