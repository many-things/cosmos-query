import { AxiosInstance } from "axios";
import type { CurrentEpochResponse, EpochsResponse } from "./types";

export type { CurrentEpochResponse, EpochsResponse };

export const getCurrentEpoch =
  (instance: AxiosInstance) => async (): Promise<CurrentEpochResponse> => {
    return (await instance.get("/osmosis/epochs/v1beta1/current_epoch")).data;
  };

export const getEpochs =
  (instance: AxiosInstance) => async (): Promise<EpochsResponse> => {
    return (await instance.get("/osmosis/epochs/v1beta1/epochs")).data;
  };
