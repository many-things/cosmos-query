import { osmosisInstance } from "../../../utils";
import type {
  TotalVolumeResponse,
  VolumeHistoricalChartResponse,
} from "./types";

export type { TotalVolumeResponse, VolumeHistoricalChartResponse };

export const getVolumeHistoricalChart =
  async (): Promise<VolumeHistoricalChartResponse> => {
    return (await osmosisInstance.get("/volume/v2/historical/chart")).data;
  };

export const getTotalVolume = async (): Promise<TotalVolumeResponse> => {
  return (await osmosisInstance.get("/volume/v2/total")).data;
};
