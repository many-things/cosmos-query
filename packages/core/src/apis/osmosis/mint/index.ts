import { instance } from "../../../common";
import type {
  EpochProvisionsResponse,
  OsmosisMintingParamsResponse,
} from "./types";

export type { EpochProvisionsResponse, OsmosisMintingParamsResponse };

export const getEpochProvisions =
  (baseURL: string) => async (): Promise<EpochProvisionsResponse> => {
    return (
      await instance(baseURL).get("/osmosis/mint/v1beta1/epoch_provisions")
    ).data;
  };

export const getMintingParams =
  (baseURL: string) => async (): Promise<OsmosisMintingParamsResponse> => {
    return (await instance(baseURL).get("/osmosis/mint/v1beta1/params")).data;
  };
