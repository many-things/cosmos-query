import { AxiosInstance } from "axios";
import type {
  DistrInfoResponse,
  GaugeIdsResponse,
  IncentivizedPoolsResponse,
  LockableDurationsResponse,
  PoolIncentivesParamsResponse,
} from "./types";

export type {
  DistrInfoResponse,
  GaugeIdsResponse,
  IncentivizedPoolsResponse,
  LockableDurationsResponse,
  PoolIncentivesParamsResponse,
};

export const getDistrInfo =
  (instance: AxiosInstance) => async (): Promise<DistrInfoResponse> => {
    return (await instance.get("/osmosis/pool-incentives/v1beta1/distr_info"))
      .data;
  };

export const getGaugeIds =
  (instance: AxiosInstance) =>
  async ({ poolId }: { poolId: string }): Promise<GaugeIdsResponse> => {
    return (
      await instance.get(`/osmosis/pool-incentives/v1beta1/gauge-ids/${poolId}`)
    ).data;
  };

export const getIncentivizedPools =
  (instance: AxiosInstance) => async (): Promise<IncentivizedPoolsResponse> => {
    return (
      await instance.get("/osmosis/pool-incentives/v1beta1/incentivized_pools")
    ).data;
  };

export const getLockableDurations =
  (instance: AxiosInstance) => async (): Promise<LockableDurationsResponse> => {
    return (
      await instance.get("/osmosis/pool-incentives/v1beta1/lockable_durations")
    ).data;
  };

export const getPoolIncentivesParams =
  (instance: AxiosInstance) =>
  async (): Promise<PoolIncentivesParamsResponse> => {
    return (await instance.get("/osmosis/pool-incentives/v1beta1/params")).data;
  };
