import { AxiosInstance } from "axios";
import type { HealthResponse } from "./types";

export type { HealthResponse };

export const getHealth =
  (instance: AxiosInstance) => async (): Promise<HealthResponse> => {
    return (await instance.get("/health/v1/check")).data;
  };
