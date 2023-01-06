import { AxiosInstance } from "axios";
import type { LiquidityHistoricalChartResponse } from "./types";

export type { LiquidityHistoricalChartResponse };

export const getLiquidityHistoricalChart =
  (instance: AxiosInstance) =>
  async (): Promise<LiquidityHistoricalChartResponse> => {
    return (await instance.get("/liquidity/v2/historical/chart")).data;
  };
