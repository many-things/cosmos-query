import { instance } from "../../../utils";
import type { PaginationParams } from "../base";
import type {
  SigningInfoResponse,
  SigningInfosResponse,
  SlashingParams,
} from "./types";

export type { SigningInfoResponse, SigningInfosResponse, SlashingParams };

export const getSlashingParams =
  (baseURL: string) => async (): Promise<SlashingParams> => {
    return (await instance(baseURL).get("/cosmos/slashing/v1beta1/params"))
      .data;
  };

export const getSigningInfos =
  (baseURL: string) =>
  async ({
    pagination,
  }: {
    pagination?: PaginationParams;
  }): Promise<SigningInfosResponse> => {
    return (
      await instance(baseURL).get("/cosmos/slashing/v1beta1/signing_infos", {
        params: { pagination },
      })
    ).data;
  };

export const getSigningInfo =
  (baseURL: string) =>
  async ({
    consAddress,
  }: {
    consAddress: string;
  }): Promise<SigningInfoResponse> => {
    return (
      await instance(baseURL).get(
        `/cosmos/slashing/v1beta1/signing_infos/${consAddress}`
      )
    ).data;
  };
