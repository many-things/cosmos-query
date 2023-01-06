import { AxiosInstance } from "axios";
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
  (instance: AxiosInstance) =>
  async ({
    pagination,
  }: {
    pagination?: PaginationParams;
  }): Promise<ActiveGaugesResponse> => {
    return (
      await instance.get("osmosis/incentives/v1beta1/active_gauges", {
        params: { pagination },
      })
    ).data;
  };

export const getGaugeById =
  (instance: AxiosInstance) =>
  async ({ id }: { id: string }): Promise<GaugeByIdResponse> => {
    return (await instance.get(`/osmosis/incentives/v1beta1/gauge_by_id/${id}`))
      .data;
  };

export const getGauges =
  (instance: AxiosInstance) =>
  async ({
    pagination,
  }: {
    pagination?: PaginationParams;
  }): Promise<GaugesResponse> => {
    return (
      await instance.get("/osmosis/incentives/v1beta1/gauges", {
        params: { pagination },
      })
    ).data;
  };

export const getModuleDistributedCoins =
  (instance: AxiosInstance) =>
  async (): Promise<ModuleDistributedCoinsResponse> => {
    return (
      await instance.get("/osmosis/incentives/v1beta1/module_distributed_coins")
    ).data;
  };

export const getModuleToDistributeCoins =
  (instance: AxiosInstance) =>
  async (): Promise<ModuleToDistributeCoinsResponse> => {
    return (
      await instance.get(
        "/osmosis/incentives/v1beta1/module_to_distribute_coins"
      )
    ).data;
  };

// TODO: check lockIds param
export const getRewardsEst =
  (instance: AxiosInstance) =>
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
      await instance.get(`/osmosis/incentives/v1beta1/rewards_est/${owner}`, {
        params: { lock_ids: lockIds, end_epoch: endEpoch },
      })
    ).data;
  };

export const getUpcomingGauges =
  (instance: AxiosInstance) =>
  async ({
    pagination,
  }: {
    pagination?: PaginationParams;
  }): Promise<UpcomingGaugesResponse> => {
    return (
      await instance.get("/osmosis/incentives/v1beta1/upcoming_gauges", {
        params: { pagination },
      })
    ).data;
  };
