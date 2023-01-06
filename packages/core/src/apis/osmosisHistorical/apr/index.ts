import { AxiosInstance } from "axios";
import type { APRResponse, StakingAPRResponse } from "./types";

export type { APRResponse, StakingAPRResponse };

export const getStakingAPR =
  (instance: AxiosInstance) => async (): Promise<StakingAPRResponse> => {
    return (await instance.get("/apr/v2/staking")).data;
  };

export const getAllAPR =
  (instance: AxiosInstance) => async (): Promise<APRResponse> => {
    return (await instance.get("/apr/v2/all")).data;
  };

export const getAPR =
  (instance: AxiosInstance) =>
  async ({ poolId }: { poolId: number }): Promise<APRResponse> => {
    return (await instance.get(`/apr/v2/${poolId}`)).data;
  };
