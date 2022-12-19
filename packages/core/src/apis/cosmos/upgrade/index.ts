import { instance } from "../../../common";
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
  (baseURL: string) =>
  async ({ name }: { name: string }): Promise<AppliedPlanResponse> => {
    return (
      await instance(baseURL).get(
        `/cosmos/upgrade/v1beta1/applied_plan/${name}`
      )
    ).data;
  };

export const getCurrentPlan =
  (baseURL: string) => async (): Promise<CurrentPlanResponse> => {
    return (await instance(baseURL).get("/cosmos/upgrade/v1beta1/current_plan"))
      .data;
  };

export const getModuleVersions =
  (baseURL: string) =>
  async ({
    moduleName,
  }: {
    moduleName?: string;
  }): Promise<ModuleVersionsResponse> => {
    return (
      await instance(baseURL).get("/cosmos/upgrade/v1beta1/module_versions", {
        params: { module_name: moduleName },
      })
    ).data;
  };

export const getUpgradedConsensusState =
  (baseURL: string) =>
  async ({
    lastHeight,
  }: {
    lastHeight: string;
  }): Promise<UpgradedConsensusStateResponse> => {
    return (
      await instance(baseURL).get(
        `/cosmos/upgrade/v1beta1/upgraded_consensus_state/${lastHeight}`
      )
    ).data;
  };
