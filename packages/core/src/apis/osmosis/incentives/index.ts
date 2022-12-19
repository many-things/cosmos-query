import { instance } from "../../../common";
import type { PaginationParams } from "../../../types";
import type {
  ActiveGaugesResponse,
  GaugeByIdResponse,
  GaugesResponse,
  ModuleDistributedCoinsResponse,
  ModuleToDistributeCoinsResponse,
  RewardsEstResponse,
  UpcomingGaugesResponse,
} from "./types";

export type {
  ActiveGaugesResponse,
  GaugeByIdResponse,
  GaugesResponse,
  ModuleDistributedCoinsResponse,
  ModuleToDistributeCoinsResponse,
  RewardsEstResponse,
  UpcomingGaugesResponse,
};

export const getActiveGauges =
  (baseURL: string) =>
  async ({
    pagination,
  }: {
    pagination?: PaginationParams;
  }): Promise<ActiveGaugesResponse> => {
    return (
      await instance(baseURL).get("osmosis/incentives/v1beta1/active_gauges", {
        params: { pagination },
      })
    ).data;
  };

export const getGaugeById =
  (baseURL: string) =>
  async ({ id }: { id: string }): Promise<GaugeByIdResponse> => {
    return (
      await instance(baseURL).get(
        `/osmosis/incentives/v1beta1/gauge_by_id/${id}`
      )
    ).data;
  };

export const getGauges =
  (baseURL: string) =>
  async ({
    pagination,
  }: {
    pagination?: PaginationParams;
  }): Promise<GaugesResponse> => {
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

export const getUpcomingGauges =
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
