import { AxiosInstance } from "axios";
import type {
  ActionParams,
  ClaimableForActionResponse,
  ClaimParamsResponse,
  ClaimRecordResponse,
  ModuleAccountBalanceResponse,
  TotalClaimableResponse,
} from "./types";

export type {
  ActionParams,
  ClaimableForActionResponse,
  ClaimParamsResponse,
  ClaimRecordResponse,
  ModuleAccountBalanceResponse,
  TotalClaimableResponse,
};

export const getClaimRecord =
  (instance: AxiosInstance) =>
  async ({ address }: { address: string }): Promise<ClaimRecordResponse> => {
    return (
      await instance.get(
        `/osmosis/claim/v1beta1/claim_record/${address}`
      )
    ).data;
  };

export const getClaimableForAction =
  (instance: AxiosInstance) =>
  async ({
    address,
    action,
  }: {
    address: string;
    action: ActionParams;
  }): Promise<ClaimableForActionResponse> => {
    return (
      await instance.get(
        `/osmosis/claim/v1beta1/claimable_for_action/${address}/${action}`
      )
    ).data;
  };

export const getModuleAccountBalance =
  (instance: AxiosInstance) => async (): Promise<ModuleAccountBalanceResponse> => {
    return (
      await instance.get(
        "/osmosis/claim/v1beta1/module_account_balance"
      )
    ).data;
  };

export const getClaimParams =
  (instance: AxiosInstance) => async (): Promise<ClaimParamsResponse> => {
    return (await instance.get("/osmosis/claim/v1beta1/params")).data;
  };

export const getTotalClaimable =
  (instance: AxiosInstance) =>
  async ({ address }: { address: string }): Promise<TotalClaimableResponse> => {
    return (
      await instance.get(
        `/osmosis/claim/v1beta1/total_claimable/${address}`
      )
    ).data;
  };
