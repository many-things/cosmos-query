import { instance } from "../../../utils";
import type { RecoveryParamsResponse } from "./types";

export type { RecoveryParamsResponse };

export const getRecoveryParams =
  (baseURL: string) => async (): Promise<RecoveryParamsResponse> => {
    return (await instance(baseURL).get("/evmos/recovery/v1/params")).data;
  };
