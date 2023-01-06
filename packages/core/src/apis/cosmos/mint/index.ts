import { AxiosInstance } from "axios";
import type {
  AnnualProvisionsResponse,
  InflationResponse,
  MintingParamsResponse,
} from "./types";

export type {
  AnnualProvisionsResponse,
  InflationResponse,
  MintingParamsResponse,
};

export const getAnnualProvisions =
  (instance: AxiosInstance) => async (): Promise<AnnualProvisionsResponse> => {
    return (await instance.get("/cosmos/mint/v1beta1/annual_provisions")).data;
  };

export const getInflation =
  (instance: AxiosInstance) => async (): Promise<InflationResponse> => {
    return (await instance.get("/cosmos/mint/v1beta1/inflation")).data;
  };

export const getMintingParams =
  (instance: AxiosInstance) => async (): Promise<MintingParamsResponse> => {
    return (await instance.get("/cosmos/mint/v1beta1/params")).data;
  };
