import { AxiosInstance } from "axios";
import * as Wasm from "./apis/cosmwasm";

export const getCosmwasmQuery = (instance: AxiosInstance) => {
  const setInstance = <T>(callback: (instance: AxiosInstance) => T) => {
    return callback(instance);
  };

  return {
    /**
     * Call Smart contract with given contract address & query interface
     * eg. { total_info : {} } or { balance : {} } whatever.
     *
     * GET `contractAddress`
     */
    getQuerySmartContract: setInstance(Wasm.getQuerySmartContract),
    /**
     * GET `/wasm/contract/{contractAddress}/code-hash`
     */
    getContractCodeHash: setInstance(Wasm.getContractCodeHash),
  };
};
