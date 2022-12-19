import { osmosisInstance } from "../../../common";
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

export const getAllPools = async ({
  lowLiquidity,
}: {
  lowLiquidity: boolean;
}): Promise<AllPoolsResponse> => {
  return (
    await osmosisInstance.get("/pools/v2/all", {
      params: {
        low_liquidity: lowLiquidity,
      },
    })
  ).data;
};

export const getPool = async ({
  poolId,
}: {
  poolId: number;
}): Promise<PoolResponse> => {
  return (await osmosisInstance.get(`/pools/v2/${poolId}`)).data;
};

export const getPoolLiquidityChart = async ({
  poolId,
}: {
  poolId: number;
}): Promise<PoolLiquidityChartResponse> => {
  return (await osmosisInstance.get(`/pools/v2/liquidity/${poolId}/chart`))
    .data;
};

export const getPoolVolumeChart = async ({
  poolId,
}: {
  poolId: number;
}): Promise<PoolVolumeChartResponse> => {
  return (await osmosisInstance.get(`/pools/v2/volume/${poolId}/chart`)).data;
};
