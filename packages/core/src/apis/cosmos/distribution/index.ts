import { instance } from "../../../common";
import type { PaginationParams } from "../../../types";
import type {
  CommunityPoolResponse,
  DelegationRewardsResponse,
  DelegationTotalRewardsResponse,
  DelegatorValidatorAddressesResponse,
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
  DelegatorValidatorAddressesResponse,
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
  async ({
    delegatorAddress,
  }: {
    delegatorAddress: string;
  }): Promise<DelegationTotalRewardsResponse> => {
    return (
      await instance(baseURL).get(
        `/cosmos/distribution/v1beta1/delegators/${delegatorAddress}/rewards`
      )
    ).data;
  };

export const getDelegationRewards =
  (baseURL: string) =>
  async ({
    delegatorAddress,
    validatorAddress,
  }: {
    delegatorAddress: string;
    validatorAddress: string;
  }): Promise<DelegationRewardsResponse> => {
    return (
      await instance(baseURL).get(
        `/cosmos/distribution/v1beta1/delegators/${delegatorAddress}/rewards/${validatorAddress}`
      )
    ).data;
  };

export const getDelegatorValidatorAddresses =
  (baseURL: string) =>
  async ({
    delegatorAddress,
  }: {
    delegatorAddress: string;
  }): Promise<DelegatorValidatorAddressesResponse> => {
    return (
      await instance(baseURL).get(
        `/cosmos/distribution/v1beta1/delegators/${delegatorAddress}/validators`
      )
    ).data;
  };

export const getDelegatorWithdrawAddress =
  (baseURL: string) =>
  async ({
    delegatorAddress,
  }: {
    delegatorAddress: string;
  }): Promise<DelegatorWithdrawAddressResponse> => {
    return (
      await instance(baseURL).get(
        `/cosmos/distribution/v1beta1/delegators/${delegatorAddress}/withdraw_address`
      )
    ).data;
  };

export const getDistributionParams =
  (baseURL: string) => async (): Promise<DistributionParamsResponse> => {
    return (await instance(baseURL).get("/cosmos/distribution/v1beta1/params"))
      .data;
  };

export const getValidatorCommission =
  (baseURL: string) =>
  async ({
    validatorAddress,
  }: {
    validatorAddress: string;
  }): Promise<ValidatorCommissionResponse> => {
    return (
      await instance(baseURL).get(
        `/cosmos/distribution/v1beta1/validators/${validatorAddress}/commission`
      )
    ).data;
  };

export const getValidatorOutstandingRewards =
  (baseURL: string) =>
  async ({
    validatorAddress,
  }: {
    validatorAddress: string;
  }): Promise<ValidatorOutstandingRewardsResponse> => {
    return (
      await instance(baseURL).get(
        `/cosmos/distribution/v1beta1/validators/${validatorAddress}/outstanding_rewards`
      )
    ).data;
  };

export const getValidatorSlashes =
  (baseURL: string) =>
  async ({
    validatorAddress,
    startingHeight,
    endingHeight,
    pagination,
  }: {
    validatorAddress: string;
    startingHeight?: string;
    endingHeight?: string;
    pagination?: PaginationParams;
  }): Promise<ValidatorSlashesResponse> => {
    return (
      await instance(baseURL).get(
        `/cosmos/distribution/v1beta1/validators/${validatorAddress}/slashes`,
        {
          params: {
            pagination,
            starting_height: startingHeight,
            ending_height: endingHeight,
          },
        }
      )
    ).data;
  };
