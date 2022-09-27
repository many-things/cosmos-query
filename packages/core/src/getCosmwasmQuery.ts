import * as Wasm from "./apis/cosmwasm";

export const getCosmwasmQuery = (baseURL: string | undefined) => {
  const setBase = <T>(callback: (url: string) => T) => {
    return callback(baseURL ?? "");
  };

  return {
    /**
     * Call Smart contract with given contract addrss
     *
     * GET `contractAddress`
     */
    getQuerySmartContract: setBase(Wasm.getQuerySmartContract),
  };
};
