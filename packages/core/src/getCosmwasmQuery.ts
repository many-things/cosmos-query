import * as Wasm from "./apis/cosmwasm";

export const getCosmwasmQuery = (baseURL: string | undefined) => {
  const setBase = <T>(callback: (url: string) => T) => {
    return callback(baseURL ?? "");
  };

  return {
    /**
     * Call Smart contract with given contract address & query interface
     * eg. { total_info : {} } or { balance : {} } whatever.
     *
     * GET `contractAddress`
     */
    getQuerySmartContract: setBase(Wasm.getQuerySmartContract),
    /**
     * GET `/wasm/contract/{contractAddress}/code-hash`
     */
    getContractCodeHash: setBase(Wasm.getContractCodeHash),
  };
};
