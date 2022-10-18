import * as Wasm from "./apis/cosmwasm";

export const getCosmwasmQuery = (
  baseURL: string | undefined,
  isWasmd = false
) => {
  const setBase = <T>(
    callback: (url: string, wasmFeatureFlag: boolean) => T
  ) => {
    return callback(baseURL ?? "", isWasmd);
  };

  return {
    /**
     * Call Smart contract with given contract address & query interface 
     * eg. { total_info : {} } or { balance : {} } whatever.
     *
     * GET `contractAddress`
     */
    getQuerySmartContract: setBase(Wasm.getQuerySmartContract),
  };
};
