import { getUrlFromObj, getWasmDUrlFromObj, instance } from "../../../utils";

export const getWasmDQuerySmartContract =
  (baseURL: string) =>
  async <T>(
    contractAddress: string,
    contractQueryInterface: Object
  ): Promise<T> => {
    return (
      await instance(baseURL).get(
        getUrlFromObj(contractAddress, contractQueryInterface)
      )
    ).data;
  };

export const getQuerySmartContract =
  (baseURL: string) =>
  async <T>({
    contractAddress,
    contractQueryInterface,
    wasmd = false,
  }: {
    contractAddress: string;
    contractQueryInterface: Object;
    wasmd: boolean;
  }): Promise<T> => {
    return (
      await instance(baseURL).get(
        wasmd
          ? getUrlFromObj(contractAddress, contractQueryInterface)
          : getWasmDUrlFromObj(contractAddress, contractQueryInterface)
      )
    ).data;
  };
