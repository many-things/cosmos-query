import { AxiosInstance } from "axios";
import type { MessageResponse, MetricsResponse } from "./types";

export type { MessageResponse, MetricsResponse };

export const getMetrics =
  (instance: AxiosInstance) => async (): Promise<MetricsResponse> => {
    return (await instance.get("/overview/v1/metrics")).data;
  };

export const getMessage =
  (instance: AxiosInstance) => async (): Promise<MessageResponse> => {
    return (await instance.get("/overview/v1/message")).data;
  };
