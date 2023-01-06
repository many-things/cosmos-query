import { AxiosInstance } from "axios";
import type { Delegation, DelegationsResponse } from "./types";

export const submitDelegation =
  (instance: AxiosInstance) =>
  async ({
    delegatorAddress,
    delegation,
  }: {
    delegatorAddress: string;
    delegation?: Delegation;
  }): Promise<DelegationsResponse> => {
    return (
      await instance.post(
        `/staking/delegators/${delegatorAddress}/delegations`,
        {
          delegation,
        }
      )
    ).data;
  };

export const submitUnbondingDelegation =
  (instance: AxiosInstance) =>
  async ({
    delegatorAddress,
    delegation,
  }: {
    delegatorAddress: string;
    delegation?: Delegation;
  }): Promise<DelegationsResponse> => {
    return (
      await instance.post(
        `/staking/delegators/${delegatorAddress}/unbonding_delegations`,
        {
          delegation,
        }
      )
    ).data;
  };
