import { AxiosInstance } from "axios";
import type {
  AppliedPlanResponse,
  CurrentPlanResponse,
  ModuleVersionsResponse,
  UpgradedConsensusStateResponse,
} from "./types";

export type {
  AppliedPlanResponse,
  CurrentPlanResponse,
  ModuleVersionsResponse,
  UpgradedConsensusStateResponse,
};

export const getAppliedPlan =
  (instance: AxiosInstance) =>
  async ({ name }: { name: string }): Promise<AppliedPlanResponse> => {
    return (await instance.get(`/cosmos/upgrade/v1beta1/applied_plan/${name}`))
      .data;
  };

export const getCurrentPlan =
  (instance: AxiosInstance) => async (): Promise<CurrentPlanResponse> => {
    return (await instance.get("/cosmos/upgrade/v1beta1/current_plan")).data;
  };

export const getModuleVersions =
  (instance: AxiosInstance) =>
  async ({
    moduleName,
  }: {
    moduleName?: string;
  }): Promise<ModuleVersionsResponse> => {
    return (
      await instance.get("/cosmos/upgrade/v1beta1/module_versions", {
        params: { module_name: moduleName },
      })
    ).data;
  };

export const getUpgradedConsensusState =
  (instance: AxiosInstance) =>
  async ({
    lastHeight,
  }: {
    lastHeight: string;
  }): Promise<UpgradedConsensusStateResponse> => {
    return (
      await instance.get(
        `/cosmos/upgrade/v1beta1/upgraded_consensus_state/${lastHeight}`
      )
    ).data;
  };
