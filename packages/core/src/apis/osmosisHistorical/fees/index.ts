import { AxiosInstance } from "axios";
import type {
  HistoricalFeeResponse,
  PoolFeesResponse,
  TotalFeesResponse,
} from "./types";

export type { HistoricalFeeResponse, PoolFeesResponse, TotalFeesResponse };

export const getTotalFees =
  (instance: AxiosInstance) => async (): Promise<TotalFeesResponse> => {
    return (await instance.get("/fees/v1/total")).data;
  };

export const getPoolsFees =
  (instance: AxiosInstance) => async (): Promise<PoolFeesResponse> => {
    return (await instance.get("/fees/v1/pools")).data;
  };

export const getPoolFees =
  (instance: AxiosInstance) =>
  async ({ poolId }: { poolId: number }): Promise<PoolFeesResponse> => {
    return (await instance.get(`/fees/v1/${poolId}`)).data;
  };

export const getHistoricalFees =
  (instance: AxiosInstance) => async (): Promise<HistoricalFeeResponse> => {
    return (await instance.get("/fees/v1/total/historical")).data;
  };

export const getHistoricalFee =
  (instance: AxiosInstance) =>
  async ({ poolId }: { poolId: number }): Promise<HistoricalFeeResponse> => {
    return (await instance.get(`/fees/v1/historical/${poolId}`)).data;
  };
