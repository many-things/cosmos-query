import { AxiosInstance } from "axios";
import type {
  EpochProvisionsResponse,
  OsmosisMintingParamsResponse,
} from "./types";

export type { EpochProvisionsResponse, OsmosisMintingParamsResponse };

export const getEpochProvisions =
  (instance: AxiosInstance) => async (): Promise<EpochProvisionsResponse> => {
    return (await instance.get("/osmosis/mint/v1beta1/epoch_provisions")).data;
  };

export const getMintingParams =
  (instance: AxiosInstance) =>
  async (): Promise<OsmosisMintingParamsResponse> => {
    return (await instance.get("/osmosis/mint/v1beta1/params")).data;
  };
