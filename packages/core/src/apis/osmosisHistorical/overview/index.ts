import { osmosisInstance } from "../../../common";
import type { MessageResponse, MetricsResponse } from "./types";

export type { MessageResponse, MetricsResponse };

export const getMetrics = async (): Promise<MetricsResponse> => {
  return (await osmosisInstance.get("/overview/v1/metrics")).data;
};

export const getMessage = async (): Promise<MessageResponse> => {
  return (await osmosisInstance.get("/overview/v1/message")).data;
};
