import { instance } from "../../../utils";
import type { ParamsResponse } from "./types";

export type { ParamsResponse };

export const getParams =
  (baseURL: string) => async (): Promise<ParamsResponse> => {
    return (await instance(baseURL).get("/cosmos/params/v1beta1/params")).data;
  };
