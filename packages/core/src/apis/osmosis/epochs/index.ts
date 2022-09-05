import { instance } from "../../../utils";
import type { CurrentEpochResponse, EpochsResponse } from "./types";

export type { CurrentEpochResponse, EpochsResponse };

export const getCurrentEpoch =
  (baseURL: string) => async (): Promise<CurrentEpochResponse> => {
    return (
      await instance(baseURL).get("/osmosis/epochs/v1beta1/current_epoch")
    ).data;
  };

export const getEpochs =
  (baseURL: string) => async (): Promise<EpochsResponse> => {
    return (await instance(baseURL).get("/osmosis/epochs/v1beta1/epochs")).data;
  };
