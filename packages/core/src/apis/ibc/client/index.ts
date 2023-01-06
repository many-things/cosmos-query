import { AxiosInstance } from "axios";
import type { ClientParamsResponse } from "./types";

export type { ClientParamsResponse };

export const getClientParams =
  (instance: AxiosInstance, isIBCGo = false) =>
  async (): Promise<ClientParamsResponse> => {
    return (
      await instance.get(
        isIBCGo ? "/ibc/client/v1/params" : "/ibc/client/v1beta1/params"
      )
    ).data;
  };
