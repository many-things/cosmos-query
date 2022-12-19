import { osmosisInstance } from "../../../common";
import type {
  HistoricalFeeResponse,
  PoolFeesResponse,
  TotalFeesResponse,
} from "./types";

export type { HistoricalFeeResponse, PoolFeesResponse, TotalFeesResponse };

export const getTotalFees = async (): Promise<TotalFeesResponse> => {
  return (await osmosisInstance.get("/fees/v1/total")).data;
};

export const getPoolsFees = async (): Promise<PoolFeesResponse> => {
  return (await osmosisInstance.get("/fees/v1/pools")).data;
};

export const getPoolFees = async ({
  poolId,
}: {
  poolId: number;
}): Promise<PoolFeesResponse> => {
  return (await osmosisInstance.get(`/fees/v1/${poolId}`)).data;
};

export const getHistoricalFees = async (): Promise<HistoricalFeeResponse> => {
  return (await osmosisInstance.get("/fees/v1/total/historical")).data;
};

export const getHistoricalFee = async ({
  poolId,
}: {
  poolId: number;
}): Promise<HistoricalFeeResponse> => {
  return (await osmosisInstance.get(`/fees/v1/historical/${poolId}`)).data;
};
