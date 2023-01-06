import { AxiosInstance } from "axios";
import type { VestingBalancesResponse } from "./types";

export type { VestingBalancesResponse };

export const getVestingBalances =
  (instance: AxiosInstance) =>
  async ({
    address,
  }: {
    address: string;
  }): Promise<VestingBalancesResponse> => {
    return (await instance.get(`/evmos/vesting/v1/balances/${address}`)).data;
  };
