import { osmosisInstance } from "../../../utils";
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

export const getPairsSummary = async (): Promise<PairsSummaryResponse> => {
  return (await osmosisInstance.get("/pairs/v1/summary")).data;
};

export const getPairsHistoricalChart = async ({
  poolId,
  assetIn,
  assetOut,
  assetType,
  range,
}: PairsHistoricalChartParams): Promise<PairsHistoricalChartResponse> => {
  return (
    await osmosisInstance.get(`/pairs/v1/historical/${poolId}/chart`, {
      params: {
        asset_in: assetIn,
        asset_out: assetOut,
        asset_type: assetType,
        range,
      },
    })
  ).data;
};
