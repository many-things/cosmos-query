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
    getQuerySmartContract: setBase(Wasm.getQuerySmartContract),
  };
};
