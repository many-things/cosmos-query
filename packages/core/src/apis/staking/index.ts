import { instance } from "../../utils";
import type { Delegation, DelegationsResponse } from "./types";

export const postDelegations =
  (baseURL: string) =>
  async (
    delegatorAddress: string,
    delegation?: Delegation
  ): Promise<DelegationsResponse> => {
    return (
      await instance(baseURL).post(
        `​/staking​/delegators​/${delegatorAddress}​/delegations`,
        {
          delegation,
        }
      )
    ).data;
  };

export const postUnbondingDelegations =
  (baseURL: string) =>
  async (
    delegatorAddress: string,
    delegation?: Delegation
  ): Promise<DelegationsResponse> => {
    return (
      await instance(baseURL).post(
        `/staking/delegators/${delegatorAddress}/unbonding_delegations`,
        {
          delegation,
        }
      )
    ).data;
  };
