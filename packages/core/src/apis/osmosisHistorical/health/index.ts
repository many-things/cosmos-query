import { osmosisInstance } from "../../../utils";
import type { HealthResponse } from "./types";

export type { HealthResponse };

export const getHealth = async (): Promise<HealthResponse> => {
  return (await osmosisInstance.get("/health/v1/check")).data;
};
