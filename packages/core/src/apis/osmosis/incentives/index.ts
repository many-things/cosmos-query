import { instance } from "../../../utils";
import type { PaginationParams } from "../../cosmos";
import type {
  ActiveGuagesResponse,
  GuageByIdResponse,
  GuagesResponse,
  ModuleDistributedCoinsResponse,
  ModuleToDistributeCoinsResponse,
  RewardsEstResponse,
  UpcomingGaugesResponse,
} from "./types";

export type {
  ActiveGuagesResponse,
  GuageByIdResponse,
  GuagesResponse,
  ModuleDistributedCoinsResponse,
  ModuleToDistributeCoinsResponse,
  RewardsEstResponse,
  UpcomingGaugesResponse,
};

export const getActiveGuages =
  (baseURL: string) =>
  async ({
    pagination,
  }: {
    pagination?: PaginationParams;
  }): Promise<ActiveGuagesResponse> => {
    return (
      await instance(baseURL).get("osmosis/incentives/v1beta1/active_gauges", {
        params: { pagination },
      })
    ).data;
  };

export const getGaugeById =
  (baseURL: string) =>
  async ({ id }: { id: string }): Promise<GuageByIdResponse> => {
    return (
      await instance(baseURL).get(
        `/osmosis/incentives/v1beta1/gauge_by_id/${id}`
      )
    ).data;
  };

export const addGuages =
  (baseURL: string) =>
  async ({
    pagination,
  }: {
    pagination?: PaginationParams;
  }): Promise<GuagesResponse> => {
    return (
      await instance(baseURL).get("/osmosis/incentives/v1beta1/gauges", {
        params: { pagination },
      })
    ).data;
  };

export const getModuleDistributedCoins =
  (baseURL: string) => async (): Promise<ModuleDistributedCoinsResponse> => {
    return (
      await instance(baseURL).get(
        "/osmosis/incentives/v1beta1/module_distributed_coins"
      )
    ).data;
  };

export const getModuleToDistributeCoins =
  (baseURL: string) => async (): Promise<ModuleToDistributeCoinsResponse> => {
    return (
      await instance(baseURL).get(
        "/osmosis/incentives/v1beta1/module_to_distribute_coins"
      )
    ).data;
  };

// TODO: check lockIds param
export const getRewardsEst =
  (baseURL: string) =>
  async ({
    owner,
    lockIds,
    endEpoch,
  }: {
    owner: string;
    lockIds?: string[];
    endEpoch?: string;
  }): Promise<RewardsEstResponse> => {
    return (
      await instance(baseURL).get(
        `/osmosis/incentives/v1beta1/rewards_est/${owner}`,
        {
          params: { lock_ids: lockIds, end_epoch: endEpoch },
        }
      )
    ).data;
  };

export const getUpcomingGuages =
  (baseURL: string) =>
  async ({
    pagination,
  }: {
    pagination?: PaginationParams;
  }): Promise<UpcomingGaugesResponse> => {
    return (
      await instance(baseURL).get(
        "/osmosis/incentives/v1beta1/upcoming_gauges",
        {
          params: { pagination },
        }
      )
    ).data;
  };
