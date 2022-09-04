import { instance } from "../../../utils";
import type { PaginationParams } from "../base";
import type {
  AllBalancesResponse,
  BalanceResponse,
  DenomOwnersResponse,
  AllDenomsMetadataResponse,
  DenomMetadataResponse,
  BankParamsResponse,
  TotalSupplyResponse,
  SupplyResponse,
} from "./types";

export type {
  AllBalancesResponse,
  BalanceResponse,
  DenomOwnersResponse,
  AllDenomsMetadataResponse,
  DenomMetadataResponse,
  BankParamsResponse,
  TotalSupplyResponse,
  SupplyResponse,
};

export const getAllBalances =
  (baseURL: string) =>
  async ({
    address,
    pagination,
  }: {
    address: string;
    pagination?: PaginationParams;
  }): Promise<AllBalancesResponse> => {
    return (
      await instance(baseURL).get(`/cosmos/bank/v1beta1/balances/${address}`, {
        params: { pagination },
      })
    ).data;
  };

export const getBalance =
  (baseURL: string) =>
  async ({
    address,
    denom,
  }: {
    address: string;
    denom: string;
  }): Promise<BalanceResponse> => {
    return (
      await instance(baseURL).get(
        `/cosmos/bank/v1beta1/balances/${address}/${denom}`
      )
    ).data;
  };

export const getDenomOwners =
  (baseURL: string) =>
  async ({
    denom,
    pagination,
  }: {
    denom: string;
    pagination?: PaginationParams;
  }): Promise<DenomOwnersResponse> => {
    return (
      await instance(baseURL).get(
        `/cosmos/bank/v1beta1/denom_owners/${denom}`,
        {
          params: { pagination },
        }
      )
    ).data;
  };

export const getAllDenomsMetadata =
  (baseURL: string) =>
  async ({
    pagination,
  }: {
    pagination?: PaginationParams;
  }): Promise<AllDenomsMetadataResponse> => {
    return (
      await instance(baseURL).get("/cosmos/bank/v1beta1/denoms_metadata", {
        params: { pagination },
      })
    ).data;
  };

export const getDenomMetadata =
  (baseURL: string) =>
  async ({ denom }: { denom: string }): Promise<DenomMetadataResponse> => {
    return (
      await instance(baseURL).get(
        `/cosmos/bank/v1beta1/denoms_metadata/${denom}`
      )
    ).data;
  };

export const getBankParams =
  (baseURL: string) => async (): Promise<BankParamsResponse> => {
    return (await instance(baseURL).get("/cosmos/bank/v1beta1/params")).data;
  };

export const getTotalSupply =
  (baseURL: string) =>
  async ({
    pagination,
  }: {
    pagination?: PaginationParams;
  }): Promise<TotalSupplyResponse> => {
    return (
      await instance(baseURL).get("/cosmos/bank/v1beta1/supply", {
        params: { pagination },
      })
    ).data;
  };

export const getSupply =
  (baseURL: string) =>
  async ({ denom }: { denom: string }): Promise<SupplyResponse> => {
    return (await instance(baseURL).get(`/cosmos/bank/v1beta1/supply/${denom}`))
      .data;
  };
