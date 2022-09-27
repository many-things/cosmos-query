import * as Wasm from "./apis/cosmwasm";

export const getCosmwasmQuery = (baseURL: string | undefined) => {
  const setBase = <T>(callback: (url: string) => T) => {
    return callback(baseURL ?? "");
  };

  return {
    getQuerySmartContract: setBase(Wasm.getQuerySmartContract),
    getWasmDQuerySmartContract: setBase(Wasm.getWasmDQuerySmartContract),
    getContractTokenInfo: setBase(Wasm.getContractTokenInfo),
    getBalanceInfoByContract: setBase(Wasm.getBalanceInfoByContract),
  };
};
