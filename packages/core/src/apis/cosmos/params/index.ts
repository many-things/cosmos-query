import { AxiosInstance } from "axios";
import type { ParamsResponse } from "./types";

export type { ParamsResponse };

export const getParams =
  (instance: AxiosInstance) => async (): Promise<ParamsResponse> => {
    return (await instance.get("/cosmos/params/v1beta1/params")).data;
  };
