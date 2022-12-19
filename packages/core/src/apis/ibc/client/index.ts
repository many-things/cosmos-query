import { instance } from "../../../common";
import type { ClientParamsResponse } from "./types";

export type { ClientParamsResponse };

export const getClientParams =
  (baseURL: string, isIBCGo = false) =>
  async (): Promise<ClientParamsResponse> => {
    return (
      await instance(baseURL).get(
        isIBCGo ? "/ibc/client/v1/params" : "/ibc/client/v1beta1/params"
      )
    ).data;
  };
