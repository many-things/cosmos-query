import { AxiosInstance } from "axios";
import type { PaginationParams } from "../../../types";
import type {
  SigningInfoResponse,
  SigningInfosResponse,
  SlashingParams,
} from "./types";

export type { SigningInfoResponse, SigningInfosResponse, SlashingParams };

export const getSlashingParams =
  (instance: AxiosInstance) => async (): Promise<SlashingParams> => {
    return (await instance.get("/cosmos/slashing/v1beta1/params")).data;
  };

export const getSigningInfos =
  (instance: AxiosInstance) =>
  async ({
    pagination,
  }: {
    pagination?: PaginationParams;
  }): Promise<SigningInfosResponse> => {
    return (
      await instance.get("/cosmos/slashing/v1beta1/signing_infos", {
        params: { pagination },
      })
    ).data;
  };

export const getSigningInfo =
  (instance: AxiosInstance) =>
  async ({
    consAddress,
  }: {
    consAddress: string;
  }): Promise<SigningInfoResponse> => {
    return (
      await instance.get(
        `/cosmos/slashing/v1beta1/signing_infos/${consAddress}`
      )
    ).data;
  };
