import { osmosisInstance } from "../../../utils";
import type { LiquidityHistoricalChartResponse } from "./types";

export type { LiquidityHistoricalChartResponse };

export const getLiquidityHistoricalChart =
  async (): Promise<LiquidityHistoricalChartResponse> => {
    return (await osmosisInstance.get("/liquidity/v2/historical/chart")).data;
  };
