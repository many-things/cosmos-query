import { instance } from "../../../utils";
import { PaginationParams } from "../base";
import type {
  CommunityPoolResponse,
  DelegationRewardsResponse,
  DelegationTotalRewardsResponse,
  DelegatorValidatorsResponse,
  DelegatorWithdrawAddressResponse,
  DistributionParamsResponse,
  ValidatorCommissionResponse,
  ValidatorOutstandingRewardsResponse,
  ValidatorSlashesResponse,
} from "./types";

export type {
  CommunityPoolResponse,
  DelegationRewardsResponse,
  DelegationTotalRewardsResponse,
  DelegatorValidatorsResponse,
  DelegatorWithdrawAddressResponse,
  DistributionParamsResponse,
  ValidatorCommissionResponse,
  ValidatorOutstandingRewardsResponse,
  ValidatorSlashesResponse,
};

export const getCommunityPool =
  (baseURL: string) => async (): Promise<CommunityPoolResponse> => {
    return (
      await instance(baseURL).get("/cosmos/distribution/v1beta1/community_pool")
    ).data;
  };

export const getDelegationTotalRewards =
  (baseURL: string) =>
  async (delegatorAddress: string): Promise<DelegationTotalRewardsResponse> => {
    return (
      await instance(baseURL).get(
        `/cosmos/distribution/v1beta1/delegators/${delegatorAddress}/rewards`
      )
    ).data;
  };

export const getDelegationRewards =
  (baseURL: string) =>
  async (
    delegatorAddress: string,
    validatorAddress: string
  ): Promise<DelegationRewardsResponse> => {
    return (
      await instance(baseURL).get(
        `​/cosmos​/distribution​/v1beta1​/delegators​/${delegatorAddress}​/rewards​/${validatorAddress}`
      )
    ).data;
  };

export const getDelegatorValidators =
  (baseURL: string) =>
  async (delegatorAddress: string): Promise<DelegatorValidatorsResponse> => {
    return (
      await instance(baseURL).get(
        `/cosmos/distribution/v1beta1/delegators/${delegatorAddress}/validators`
      )
    ).data;
  };

export const getDelegatorWithdrawAddress =
  (baseURL: string) =>
  async (
    delegatorAddress: string
  ): Promise<DelegatorWithdrawAddressResponse> => {
    return (
      await instance(baseURL).get(
        `/cosmos/distribution/v1beta1/delegators/${delegatorAddress}/withdraw_address`
      )
    ).data;
  };

export const getDistributionParams =
  (baseURL: string) => async (): Promise<DistributionParamsResponse> => {
    return (
      await instance(baseURL).get("​/cosmos​/distribution​/v1beta1​/params")
    ).data;
  };

export const getValidatorCommission =
  (baseURL: string) =>
  async (validatorAddress: string): Promise<ValidatorCommissionResponse> => {
    return (
      await instance(baseURL).get(
        `/cosmos/distribution/v1beta1/validators/${validatorAddress}/commission`
      )
    ).data;
  };

export const getValidatorOutstandingRewards =
  (baseURL: string) =>
  async (
    validatorAddress: string
  ): Promise<ValidatorOutstandingRewardsResponse> => {
    return (
      await instance(baseURL).get(
        `/cosmos/distribution/v1beta1/validators/${validatorAddress}/outstanding_rewards`
      )
    ).data;
  };

export const getValidatorSlashes =
  (baseURL: string) =>
  async (
    validatorAddress: string,
    pagination?: PaginationParams,
    startingHeight?: string,
    endingHeight?: string
  ): Promise<ValidatorSlashesResponse> => {
    return (
      await instance(baseURL).get(
        `/cosmos/distribution/v1beta1/validators/${validatorAddress}/slashes`,
        {
          params: {
            ...pagination,
            starting_height: startingHeight,
            ending_height: endingHeight,
          },
        }
      )
    ).data;
  };
