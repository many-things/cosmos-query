import { getUrlFromObj, getWasmDUrlFromObj, instance } from "../../../utils";

export const getQuerySmartContract =
  (baseURL: string) =>
  async <T>({
    contractAddress,
    contractQueryInterface,
    isWasmd = false,
  }: {
    contractAddress: string;
    contractQueryInterface: object;
    isWasmd: boolean;
  }): Promise<T> => {
    return (
      await instance(baseURL).get(
        isWasmd
          ? getWasmDUrlFromObj(contractAddress, contractQueryInterface)
          : getUrlFromObj(contractAddress, contractQueryInterface)
      )
    ).data;
  };
