import { AxiosInstance } from "axios";
import type { PaginationParams } from "../../../types";
import type {
  AccountResponse,
  AccountsResponse,
  AuthParamsResponse,
} from "./types";

export type { AccountResponse, AccountsResponse, AuthParamsResponse };

export const getAccounts =
  (instance: AxiosInstance) =>
  async ({
    pagination,
  }: {
    pagination?: PaginationParams;
  }): Promise<AccountsResponse> => {
    return (
      await instance.get("/cosmos/auth/v1beta1/accounts", {
        params: { pagination },
      })
    ).data;
  };

export const getAccountByAddress =
  (instance: AxiosInstance) =>
  async ({ address }: { address: string }): Promise<AccountResponse> => {
    return (await instance.get(`/cosmos/auth/v1beta1/accounts/${address}`))
      .data;
  };

export const getAuthParams =
  (instance: AxiosInstance) => async (): Promise<AuthParamsResponse> => {
    return (await instance.get("/cosmos/auth/v1beta1/params")).data;
  };
