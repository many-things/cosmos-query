import { AxiosInstance } from "axios";
import type { ContractCodeHashResponse } from "./types";
import { Buffer } from "buffer";

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
    const msg = JSON.stringify(contractQueryInterface);
    const query = Buffer.from(msg).toString("base64");

    if (isWasmd) {
      return (
        await instance.get(
          `/cosmwasm/wasm/v1/contract/${contractAddress}/smart/${query}`
        )
      ).data;
    }

    return (
      await instance.get(`/wasm/v1/contract/${contractAddress}/smart/${query}`)
    ).data;
  };

export const getContractCodeHash =
  (instance: AxiosInstance) => async (contractAddress: string) =>
    (
      await instance.get<ContractCodeHashResponse>(
        `/wasm/contract/${contractAddress}/code-hash`
      )
    ).data;
