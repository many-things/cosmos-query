import { AxiosInstance } from "axios";
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
  (instance: AxiosInstance) => async (): Promise<CommunityPoolResponse> => {
    return (await instance.get("/cosmos/distribution/v1beta1/community_pool"))
      .data;
  };

export const getDelegationTotalRewards =
  (instance: AxiosInstance) =>
  async ({
    delegatorAddress,
  }: {
    delegatorAddress: string;
  }): Promise<DelegationTotalRewardsResponse> => {
    return (
      await instance.get(
        `/cosmos/distribution/v1beta1/delegators/${delegatorAddress}/rewards`
      )
    ).data;
  };

export const getDelegationRewards =
  (instance: AxiosInstance) =>
  async ({
    delegatorAddress,
    validatorAddress,
  }: {
    delegatorAddress: string;
    validatorAddress: string;
  }): Promise<DelegationRewardsResponse> => {
    return (
      await instance.get(
        `/cosmos/distribution/v1beta1/delegators/${delegatorAddress}/rewards/${validatorAddress}`
      )
    ).data;
  };

export const getDelegatorValidatorAddresses =
  (instance: AxiosInstance) =>
  async ({
    delegatorAddress,
  }: {
    delegatorAddress: string;
  }): Promise<DelegatorValidatorAddressesResponse> => {
    return (
      await instance.get(
        `/cosmos/distribution/v1beta1/delegators/${delegatorAddress}/validators`
      )
    ).data;
  };

export const getDelegatorWithdrawAddress =
  (instance: AxiosInstance) =>
  async ({
    delegatorAddress,
  }: {
    delegatorAddress: string;
  }): Promise<DelegatorWithdrawAddressResponse> => {
    return (
      await instance.get(
        `/cosmos/distribution/v1beta1/delegators/${delegatorAddress}/withdraw_address`
      )
    ).data;
  };

export const getDistributionParams =
  (instance: AxiosInstance) =>
  async (): Promise<DistributionParamsResponse> => {
    return (await instance.get("/cosmos/distribution/v1beta1/params")).data;
  };

export const getValidatorCommission =
  (instance: AxiosInstance) =>
  async ({
    validatorAddress,
  }: {
    validatorAddress: string;
  }): Promise<ValidatorCommissionResponse> => {
    return (
      await instance.get(
        `/cosmos/distribution/v1beta1/validators/${validatorAddress}/commission`
      )
    ).data;
  };

export const getValidatorOutstandingRewards =
  (instance: AxiosInstance) =>
  async ({
    validatorAddress,
  }: {
    validatorAddress: string;
  }): Promise<ValidatorOutstandingRewardsResponse> => {
    return (
      await instance.get(
        `/cosmos/distribution/v1beta1/validators/${validatorAddress}/outstanding_rewards`
      )
    ).data;
  };

export const getValidatorSlashes =
  (instance: AxiosInstance) =>
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
      await instance.get(
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
