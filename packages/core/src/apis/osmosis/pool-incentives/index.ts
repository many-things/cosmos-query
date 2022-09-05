import { instance } from "../../../utils";
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
  (baseURL: string) => async (): Promise<DistrInfoResponse> => {
    return (
      await instance(baseURL).get("/osmosis/pool-incentives/v1beta1/distr_info")
    ).data;
  };

export const getGaugeIds =
  (baseURL: string) =>
  async ({ poolId }: { poolId: string }): Promise<GaugeIdsResponse> => {
    return (
      await instance(baseURL).get(
        `/osmosis/pool-incentives/v1beta1/gauge-ids/${poolId}`
      )
    ).data;
  };

export const getIncentivizedPools =
  (baseURL: string) => async (): Promise<IncentivizedPoolsResponse> => {
    return (
      await instance(baseURL).get(
        "/osmosis/pool-incentives/v1beta1/incentivized_pools"
      )
    ).data;
  };

export const getLockableDurations =
  (baseURL: string) => async (): Promise<LockableDurationsResponse> => {
    return (
      await instance(baseURL).get(
        "/osmosis/pool-incentives/v1beta1/lockable_durations"
      )
    ).data;
  };

export const getPoolIncentivesParams =
  (baseURL: string) => async (): Promise<PoolIncentivesParamsResponse> => {
    return (
      await instance(baseURL).get("/osmosis/pool-incentives/v1beta1/params")
    ).data;
  };
