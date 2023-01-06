import { AxiosInstance } from "axios";
import type { PaginationParams } from "../../../types";
import type {
  DelegatorDelegationsResponse,
  DelegatorRedelegationsResponse,
  DelegatorUnbondingDelegationsResponse,
  DelegatorValidatorResponse,
  DelegatorValidatorsResponse,
  HistoricalInfoResponse,
  PoolResponse,
  StakingParamsResponse,
  ValidatorDelegationResponse,
  ValidatorDelegationsResponse,
  ValidatorResponse,
  ValidatorsResponse,
  ValidatorUnbondingDelegationResponse,
  ValidatorUnbondingDelegationsResponse,
} from "./types";

export type {
  DelegatorDelegationsResponse,
  DelegatorRedelegationsResponse,
  DelegatorUnbondingDelegationsResponse,
  DelegatorValidatorResponse,
  DelegatorValidatorsResponse,
  HistoricalInfoResponse,
  PoolResponse,
  StakingParamsResponse,
  ValidatorDelegationResponse,
  ValidatorDelegationsResponse,
  ValidatorResponse,
  ValidatorsResponse,
  ValidatorUnbondingDelegationResponse,
  ValidatorUnbondingDelegationsResponse,
};

export const getDelegatorDelegations =
  (instance: AxiosInstance) =>
  async ({
    delegatorAddress,
    pagination,
  }: {
    delegatorAddress: string;
    pagination?: PaginationParams;
  }): Promise<DelegatorDelegationsResponse> => {
    return (
      await instance.get(
        `/cosmos/staking/v1beta1/delegations/${delegatorAddress}`,
        {
          params: { pagination },
        }
      )
    ).data;
  };

export const getDelegatorRedelegations =
  (instance: AxiosInstance) =>
  async ({
    delegatorAddress,
    srcValidatorAddress,
    dstValidatorAddress,
    pagination,
  }: {
    delegatorAddress: string;
    srcValidatorAddress?: string;
    dstValidatorAddress?: string;
    pagination?: PaginationParams;
  }): Promise<DelegatorRedelegationsResponse> => {
    return (
      await instance.get(
        `/cosmos/staking/v1beta1/delegators/${delegatorAddress}/redelegations`,
        {
          params: {
            src_validator_addr: srcValidatorAddress,
            dst_validator_addr: dstValidatorAddress,
            pagination,
          },
        }
      )
    ).data;
  };

export const getDelegatorUnbondingDelegations =
  (instance: AxiosInstance) =>
  async ({
    delegatorAddress,
    pagination,
  }: {
    delegatorAddress: string;
    pagination?: PaginationParams;
  }): Promise<DelegatorUnbondingDelegationsResponse> => {
    return (
      await instance.get(
        `/cosmos/staking/v1beta1/delegators/${delegatorAddress}/unbonding_delegations`,
        {
          params: { pagination },
        }
      )
    ).data;
  };

export const getDelegatorValidators =
  (instance: AxiosInstance) =>
  async ({
    delegatorAddress,
    pagination,
  }: {
    delegatorAddress: string;
    pagination?: PaginationParams;
  }): Promise<DelegatorValidatorsResponse> => {
    return (
      await instance.get(
        `/cosmos/staking/v1beta1/delegators/${delegatorAddress}/validators`,
        {
          params: { pagination },
        }
      )
    ).data;
  };

export const getDelegatorValidator =
  (instance: AxiosInstance) =>
  async ({
    delegatorAddress,
    validatorAddress,
  }: {
    delegatorAddress: string;
    validatorAddress: string;
  }): Promise<DelegatorValidatorResponse> => {
    return (
      await instance.get(
        `/cosmos/staking/v1beta1/delegators/${delegatorAddress}/validators/${validatorAddress}`
      )
    ).data;
  };

export const getHistoricalInfo =
  (instance: AxiosInstance) =>
  async ({ height }: { height: string }): Promise<HistoricalInfoResponse> => {
    return (
      await instance.get(`/cosmos/staking/v1beta1/historical_info/${height}`)
    ).data;
  };

export const getStakingParams =
  (instance: AxiosInstance) => async (): Promise<StakingParamsResponse> => {
    return (await instance.get("/cosmos/staking/v1beta1/params")).data;
  };

export const getPool =
  (instance: AxiosInstance) => async (): Promise<PoolResponse> => {
    return (await instance.get("/cosmos/staking/v1beta1/pool")).data;
  };

export const getValidators =
  (instance: AxiosInstance) =>
  async ({
    status,
    pagination,
  }: {
    status?: string;
    pagination?: PaginationParams;
  }): Promise<ValidatorsResponse> => {
    return (
      await instance.get("/cosmos/staking/v1beta1/validators", {
        params: {
          status,
          pagination,
        },
      })
    ).data;
  };

export const getValidator =
  (instance: AxiosInstance) =>
  async ({
    validatorAddress,
  }: {
    validatorAddress: string;
  }): Promise<ValidatorResponse> => {
    return (
      await instance.get(
        `/cosmos/staking/v1beta1/validators/${validatorAddress}`
      )
    ).data;
  };

export const getValidatorDelegations =
  (instance: AxiosInstance) =>
  async ({
    validatorAddress,
    pagination,
  }: {
    validatorAddress: string;
    pagination?: PaginationParams;
  }): Promise<ValidatorDelegationsResponse> => {
    return (
      await instance.get(
        `/cosmos/staking/v1beta1/validators/${validatorAddress}/delegations`,
        {
          params: { pagination },
        }
      )
    ).data;
  };

export const getValidatorDelegation =
  (instance: AxiosInstance) =>
  async ({
    validatorAddress,
    delegatorAddress,
  }: {
    validatorAddress: string;
    delegatorAddress: string;
  }): Promise<ValidatorDelegationResponse> => {
    return (
      await instance.get(
        `/cosmos/staking/v1beta1/validators/${validatorAddress}/delegations/${delegatorAddress}`
      )
    ).data;
  };

export const getValidatorUnbondingDelegations =
  (instance: AxiosInstance) =>
  async ({
    validatorAddress,
    pagination,
  }: {
    validatorAddress: string;
    pagination?: PaginationParams;
  }): Promise<ValidatorUnbondingDelegationsResponse> => {
    return (
      await instance.get(
        `/cosmos/staking/v1beta1/validators/${validatorAddress}/unbonding_delegations`,
        {
          params: { pagination },
        }
      )
    ).data;
  };

export const getValidatorUnbondingDelegation =
  (instance: AxiosInstance) =>
  async ({
    validatorAddress,
    delegatorAddress,
  }: {
    validatorAddress: string;
    delegatorAddress: string;
  }): Promise<ValidatorUnbondingDelegationResponse> => {
    return (
      await instance.get(
        `/cosmos/staking/v1beta1/validators/${validatorAddress}/delegations/${delegatorAddress}/unbonding_delegation`
      )
    ).data;
  };
