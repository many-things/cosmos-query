import { instance } from "../../../utils";
import type { PaginationParams } from "../../../types";
import type {
  AccountResponse,
  AccountsResponse,
  AuthParamsResponse,
} from "./types";

export type { AccountResponse, AccountsResponse, AuthParamsResponse };

export const getAccounts =
  (baseURL: string) =>
  async ({
    pagination,
  }: {
    pagination?: PaginationParams;
  }): Promise<AccountsResponse> => {
    return (
      await instance(baseURL).get("/cosmos/auth/v1beta1/accounts", {
        params: { pagination },
      })
    ).data;
  };

export const getAccountByAddress =
  (baseURL: string) =>
  async ({ address }: { address: string }): Promise<AccountResponse> => {
    return (
      await instance(baseURL).get(`/cosmos/auth/v1beta1/accounts/${address}`)
    ).data;
  };

export const getAuthParams =
  (baseURL: string) => async (): Promise<AuthParamsResponse> => {
    return (await instance(baseURL).get("/cosmos/auth/v1beta1/params")).data;
  };
