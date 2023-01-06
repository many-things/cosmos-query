import { AxiosInstance } from "axios";
import type {
  TotalVolumeResponse,
  VolumeHistoricalChartResponse,
} from "./types";

export type { TotalVolumeResponse, VolumeHistoricalChartResponse };

export const getVolumeHistoricalChart =
  (instance: AxiosInstance) =>
  async (): Promise<VolumeHistoricalChartResponse> => {
    return (await instance.get("/volume/v2/historical/chart")).data;
  };

export const getTotalVolume =
  (instance: AxiosInstance) => async (): Promise<TotalVolumeResponse> => {
    return (await instance.get("/volume/v2/total")).data;
  };
