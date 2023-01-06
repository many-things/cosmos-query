import { AxiosInstance } from "axios";
import { getUrlFromObj, getWasmDUrlFromObj } from "../../../common";
import type { ContractCodeHashResponse } from "./types";

export const getQuerySmartContract =
  (instance: AxiosInstance) =>
  async <T>({
    isWasmd = false,
    contractAddress,
    contractQueryInterface,
  }: {
    isWasmd?: boolean;
    contractAddress: string;
    contractQueryInterface: object;
  }): Promise<T> => {
    return (
      await instance.get(
        isWasmd
          ? getWasmDUrlFromObj(contractAddress, contractQueryInterface)
          : getUrlFromObj(contractAddress, contractQueryInterface)
      )
    ).data;
  };

export const getContractCodeHash =
  (instance: AxiosInstance) => async (contractAddress: string) =>
    (
      await instance.get<ContractCodeHashResponse>(
        `/wasm/contract/${contractAddress}/code-hash`
      )
    ).data;
