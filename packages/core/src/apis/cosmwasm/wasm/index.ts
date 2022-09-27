import { getUrlFromObj, getWasmDUrlFromObj, instance } from "../../../utils";

export const getQuerySmartContract =
  (baseURL: string) =>
  async <T>({
    contractAddress,
    contractQueryInterface,
    wasmd = false,
  }: {
    contractAddress: string;
    contractQueryInterface: object;
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
