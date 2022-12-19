import { osmosisInstance } from "../../../common";
import type { APRResponse, StakingAPRResponse } from "./types";

export type { APRResponse, StakingAPRResponse };

export const getStakingAPR = async (): Promise<StakingAPRResponse> => {
  return (await osmosisInstance.get("/apr/v2/staking")).data;
};

export const getAllAPR = async (): Promise<APRResponse> => {
  return (await osmosisInstance.get("/apr/v2/all")).data;
};

export const getAPR = async ({
  poolId,
}: {
  poolId: number;
}): Promise<APRResponse> => {
  return (await osmosisInstance.get(`/apr/v2/${poolId}`)).data;
};
