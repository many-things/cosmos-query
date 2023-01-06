import { AxiosInstance } from "axios";
import type { PaginationParams } from "../../../types";
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
  (instance: AxiosInstance) =>
  async ({
    address,
    pagination,
  }: {
    address: string;
    pagination?: PaginationParams;
  }): Promise<AllBalancesResponse> => {
    return (
      await instance.get(`/cosmos/bank/v1beta1/balances/${address}`, {
        params: { pagination },
      })
    ).data;
  };

export const getBalance =
  (instance: AxiosInstance) =>
  async ({
    address,
    denom,
  }: {
    address: string;
    denom: string;
  }): Promise<BalanceResponse> => {
    return (
      await instance.get(`/cosmos/bank/v1beta1/balances/${address}/${denom}`)
    ).data;
  };

export const getDenomOwners =
  (instance: AxiosInstance) =>
  async ({
    denom,
    pagination,
  }: {
    denom: string;
    pagination?: PaginationParams;
  }): Promise<DenomOwnersResponse> => {
    return (
      await instance.get(`/cosmos/bank/v1beta1/denom_owners/${denom}`, {
        params: { pagination },
      })
    ).data;
  };

export const getAllDenomsMetadata =
  (instance: AxiosInstance) =>
  async ({
    pagination,
  }: {
    pagination?: PaginationParams;
  }): Promise<AllDenomsMetadataResponse> => {
    return (
      await instance.get("/cosmos/bank/v1beta1/denoms_metadata", {
        params: { pagination },
      })
    ).data;
  };

export const getDenomMetadata =
  (instance: AxiosInstance) =>
  async ({ denom }: { denom: string }): Promise<DenomMetadataResponse> => {
    return (await instance.get(`/cosmos/bank/v1beta1/denoms_metadata/${denom}`))
      .data;
  };

export const getBankParams =
  (instance: AxiosInstance) => async (): Promise<BankParamsResponse> => {
    return (await instance.get("/cosmos/bank/v1beta1/params")).data;
  };

export const getTotalSupply =
  (instance: AxiosInstance) =>
  async ({
    pagination,
  }: {
    pagination?: PaginationParams;
  }): Promise<TotalSupplyResponse> => {
    return (
      await instance.get("/cosmos/bank/v1beta1/supply", {
        params: { pagination },
      })
    ).data;
  };

export const getSupply =
  (instance: AxiosInstance) =>
  async ({ denom }: { denom: string }): Promise<SupplyResponse> => {
    return (await instance.get(`/cosmos/bank/v1beta1/supply/${denom}`)).data;
  };
