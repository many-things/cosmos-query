import * as Cosmos from "./apis/cosmos";
import { AxiosInstance, AxiosRequestConfig } from "axios";
import { getClient, QueryClient } from "./common";

/**
 * 1안
 */
export const getCosmosQueryClient = (config?: AxiosRequestConfig) => {
  const client = getClient(config);
  const setClient = <T>(callback: (client: AxiosInstance) => T) => {
    return callback(client);
  };

  return {
    /**
     * Accounts returns all the existing accounts.
     *
     * GET `/cosmos/auth/v1beta1/accounts`
     */
    // getAccounts: setBase(Cosmos.getAccounts),
    getAccounts: setClient(Cosmos.new_getAccounts),
  };
};

/**
 * 2안
 */
export class CosmosQueryClient extends QueryClient {
  constructor(config?: AxiosRequestConfig) {
    super(config);
  }

  public getAccounts = Cosmos.new_getAccounts(this.client);

  // or
  // public getAccountInfo = this.client.get("/something");
}
