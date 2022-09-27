import { instance, getUrlFromObj, getWasmDUrlFromObj } from "../../../utils";
import { Cw20TokenInfoResponse, Cw20BalanceByContractResponse } from "./types";

export type { Cw20TokenInfoResponse, Cw20BalanceByContractResponse };

export const getContractTokenInfo =
  (baseURL: string) =>
  async ({
    contractAddress,
    wasmd = false,
  }: {
    contractAddress: string;
    wasmd: boolean;
  }): Promise<Cw20TokenInfoResponse> => {
    return (
      await instance(baseURL).get(
        wasmd
          ? getUrlFromObj(contractAddress, { token_info: {} })
          : getWasmDUrlFromObj(contractAddress, { token_info: {} })
      )
    ).data;
  };

export const getBalanceInfoByContract =
  (baseURL: string) =>
  async ({
    contractAddress,
    userAddress,
    wasmd = false,
  }: {
    contractAddress: string;
    userAddress: string;
    wasmd: boolean;
  }): Promise<Cw20BalanceByContractResponse> => {
    return (
      await instance(baseURL).get(
        wasmd
          ? getUrlFromObj(contractAddress, {
              balance: { address: userAddress },
            })
          : getWasmDUrlFromObj(contractAddress, {
              balance: { address: userAddress },
            })
      )
    ).data;
  };
