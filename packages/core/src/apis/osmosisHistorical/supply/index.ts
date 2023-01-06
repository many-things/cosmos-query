import { AxiosInstance } from "axios";
import type { SupplyResponse } from "./types";

export type { SupplyResponse };

export const getSupplyOsmo =
  (instance: AxiosInstance) => async (): Promise<SupplyResponse> => {
    return (await instance.get("/supply/v1/osmo")).data;
  };

export const getSupplyIon =
  (instance: AxiosInstance) => async (): Promise<SupplyResponse> => {
    return (await instance.get("/supply/v1/ion")).data;
  };
