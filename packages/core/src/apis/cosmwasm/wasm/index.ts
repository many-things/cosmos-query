import { getUrlFromObj, getWasmDUrlFromObj, instance } from "../../../utils";

export const getQuerySmartContract =
  (baseURL: string, isWasmd = false) =>
  async <T>({
    contractAddress,
    contractQueryInterface,
  }: {
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
