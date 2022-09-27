import { instance } from "../../../utils";
import type { PaginationParams } from "../../../types";
import type { AllowanceResponse, AllowancesResponse } from "./types";

export type { AllowanceResponse, AllowancesResponse };

export const getAllowances =
  (baseURL: string) =>
  async ({
    grantee,
    pagination,
  }: {
    grantee: string;
    pagination?: PaginationParams;
  }): Promise<AllowancesResponse> => {
    return (
      await instance(baseURL).get(
        `/cosmos/feegrant/v1beta1/allowances/${grantee}`,
        {
          params: { pagination },
        }
      )
    ).data;
  };

export const getAllowance =
  (baseURL: string) =>
  async ({
    granter,
    grantee,
  }: {
    granter: string;
    grantee: string;
  }): Promise<AllowanceResponse> => {
    return (
      await instance(baseURL).get(
        `/cosmos/feegrant/v1beta1/allowance/${granter}/${grantee}`
      )
    ).data;
  };
