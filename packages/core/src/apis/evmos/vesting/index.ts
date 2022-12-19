import { instance } from "../../../common";
import type { VestingBalancesResponse } from "./types";

export type { VestingBalancesResponse };

export const getVestingBalances =
  (baseURL: string) =>
  async ({
    address,
  }: {
    address: string;
  }): Promise<VestingBalancesResponse> => {
    return (
      await instance(baseURL).get(`/evmos/vesting/v1/balances/${address}`)
    ).data;
  };
