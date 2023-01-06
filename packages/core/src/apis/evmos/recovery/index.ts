import { AxiosInstance } from "axios";
import type { RecoveryParamsResponse } from "./types";

export type { RecoveryParamsResponse };

export const getRecoveryParams =
  (instance: AxiosInstance) => async (): Promise<RecoveryParamsResponse> => {
    return (await instance.get("/evmos/recovery/v1/params")).data;
  };
