import { instance } from "../../../utils";
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
  (baseURL: string) => async (): Promise<AnnualProvisionsResponse> => {
    return (
      await instance(baseURL).get("/cosmos/mint/v1beta1/annual_provisions")
    ).data;
  };

export const getInflation =
  (baseURL: string) => async (): Promise<InflationResponse> => {
    return (await instance(baseURL).get("/cosmos/mint/v1beta1/inflation")).data;
  };

export const getMintingParams =
  (baseURL: string) => async (): Promise<MintingParamsResponse> => {
    return (await instance(baseURL).get("/cosmos/mint/v1beta1/params")).data;
  };
