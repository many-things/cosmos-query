import { getUrlFromObj, getWasmDUrlFromObj, instance } from "../../../utils";
import type { ContractCodeHashResponse } from "./types";

export const getQuerySmartContract =
  (baseURL: string) =>
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
      await instance(baseURL).get(
        isWasmd
          ? getWasmDUrlFromObj(contractAddress, contractQueryInterface)
          : getUrlFromObj(contractAddress, contractQueryInterface)
      )
    ).data;
  };

export const getContractCodeHash =
  (baseURL: string) => async (contractAddress: string) =>
    (
      await instance(baseURL).get<ContractCodeHashResponse>(
        `/wasm/contract/${contractAddress}/code-hash`
      )
    ).data;
