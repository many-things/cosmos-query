import { instance } from "../../../common";
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
  (baseURL: string) =>
  async ({ address }: { address: string }): Promise<ClaimRecordResponse> => {
    return (
      await instance(baseURL).get(
        `/osmosis/claim/v1beta1/claim_record/${address}`
      )
    ).data;
  };

export const getClaimableForAction =
  (baseURL: string) =>
  async ({
    address,
    action,
  }: {
    address: string;
    action: ActionParams;
  }): Promise<ClaimableForActionResponse> => {
    return (
      await instance(baseURL).get(
        `/osmosis/claim/v1beta1/claimable_for_action/${address}/${action}`
      )
    ).data;
  };

export const getModuleAccountBalance =
  (baseURL: string) => async (): Promise<ModuleAccountBalanceResponse> => {
    return (
      await instance(baseURL).get(
        "/osmosis/claim/v1beta1/module_account_balance"
      )
    ).data;
  };

export const getClaimParams =
  (baseURL: string) => async (): Promise<ClaimParamsResponse> => {
    return (await instance(baseURL).get("/osmosis/claim/v1beta1/params")).data;
  };

export const getTotalClaimable =
  (baseURL: string) =>
  async ({ address }: { address: string }): Promise<TotalClaimableResponse> => {
    return (
      await instance(baseURL).get(
        `/osmosis/claim/v1beta1/total_claimable/${address}`
      )
    ).data;
  };
