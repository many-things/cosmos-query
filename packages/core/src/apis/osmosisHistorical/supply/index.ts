import { osmosisInstance } from "../../../utils";
import type { SupplyResponse } from "./types";

export type { SupplyResponse };

export const getSupplyOsmo = async (): Promise<SupplyResponse> => {
  return (await osmosisInstance.get("/supply/v1/osmo")).data;
};

export const getSupplyIon = async (): Promise<SupplyResponse> => {
  return (await osmosisInstance.get("/supply/v1/ion")).data;
};
