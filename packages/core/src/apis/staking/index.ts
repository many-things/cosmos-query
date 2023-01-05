import { AxiosInstance } from "axios";
import { instance } from "../../common";
import type { Delegation, DelegationsResponse } from "./types";

export const submitDelegation =
  (baseURL: string) =>
  async ({
    delegatorAddress,
    delegation,
  }: {
    delegatorAddress: string;
    delegation?: Delegation;
  }): Promise<DelegationsResponse> => {
    return (
      await instance(baseURL).post(
        `/staking/delegators/${delegatorAddress}/delegations`,
        {
          delegation,
        }
      )
    ).data;
  };

export const submitUnbondingDelegation =
  (baseURL: string) =>
  async ({
    delegatorAddress,
    delegation,
  }: {
    delegatorAddress: string;
    delegation?: Delegation;
  }): Promise<DelegationsResponse> => {
    return (
      await instance(baseURL).post(
        `/staking/delegators/${delegatorAddress}/unbonding_delegations`,
        {
          delegation,
        }
      )
    ).data;
  };
