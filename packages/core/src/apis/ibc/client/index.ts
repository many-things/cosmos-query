import { instance } from "../../../utils";
import type { ClientParamsResponse } from "./types";

export type { ClientParamsResponse };

export const getClientParams =
  (baseURL: string) => async (): Promise<ClientParamsResponse> => {
    return (await instance(baseURL).get("/ibc/client/v1beta1/params")).data;
  };
