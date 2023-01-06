import { AxiosInstance } from "axios";
import type {
  PairsHistoricalChartParams,
  PairsHistoricalChartResponse,
  PairsSummaryResponse,
} from "./types";

export type {
  PairsHistoricalChartParams,
  PairsHistoricalChartResponse,
  PairsSummaryResponse,
};

export const getPairsSummary =
  (instance: AxiosInstance) => async (): Promise<PairsSummaryResponse> => {
    return (await instance.get("/pairs/v1/summary")).data;
  };

export const getPairsHistoricalChart =
  (instance: AxiosInstance) =>
  async ({
    poolId,
    assetIn,
    assetOut,
    assetType,
    range,
  }: PairsHistoricalChartParams): Promise<PairsHistoricalChartResponse> => {
    return (
      await instance.get(`/pairs/v1/historical/${poolId}/chart`, {
        params: {
          asset_in: assetIn,
          asset_out: assetOut,
          asset_type: assetType,
          range,
        },
      })
    ).data;
  };
