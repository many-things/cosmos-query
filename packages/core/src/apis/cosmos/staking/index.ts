import { instance } from "../../../utils";
import type { PaginationParams } from "../base";
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
  (baseURL: string) =>
  async ({
    delegatorAddress,
    pagination,
  }: {
    delegatorAddress: string;
    pagination?: PaginationParams;
  }): Promise<DelegatorDelegationsResponse> => {
    return (
      await instance(baseURL).get(
        `/cosmos/staking/v1beta1/delegations/${delegatorAddress}`,
        {
          params: { pagination },
        }
      )
    ).data;
  };

export const getDelegatorRedelegations =
  (baseURL: string) =>
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
      await instance(baseURL).get(
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
  (baseURL: string) =>
  async ({
    delegatorAddress,
    pagination,
  }: {
    delegatorAddress: string;
    pagination?: PaginationParams;
  }): Promise<DelegatorUnbondingDelegationsResponse> => {
    return (
      await instance(baseURL).get(
        `/cosmos/staking/v1beta1/delegators/${delegatorAddress}/unbonding_delegations`,
        {
          params: { pagination },
        }
      )
    ).data;
  };

export const getDelegatorValidators =
  (baseURL: string) =>
  async ({
    delegatorAddress,
    pagination,
  }: {
    delegatorAddress: string;
    pagination?: PaginationParams;
  }): Promise<DelegatorValidatorsResponse> => {
    return (
      await instance(baseURL).get(
        `/cosmos/staking/v1beta1/delegators/${delegatorAddress}/validators`,
        {
          params: { pagination },
        }
      )
    ).data;
  };

export const getDelegatorValidator =
  (baseURL: string) =>
  async ({
    delegatorAddress,
    validatorAddress,
  }: {
    delegatorAddress: string;
    validatorAddress: string;
  }): Promise<DelegatorValidatorResponse> => {
    return (
      await instance(baseURL).get(
        `/cosmos/staking/v1beta1/delegators/${delegatorAddress}/validators/${validatorAddress}`
      )
    ).data;
  };

export const getHistoricalInfo =
  (baseURL: string) =>
  async ({ height }: { height: string }): Promise<HistoricalInfoResponse> => {
    return (
      await instance(baseURL).get(
        `/cosmos/staking/v1beta1/historical_info/${height}`
      )
    ).data;
  };

export const getStakingParams =
  (baseURL: string) => async (): Promise<StakingParamsResponse> => {
    return (await instance(baseURL).get("/cosmos/staking/v1beta1/params")).data;
  };

export const getPool = (baseURL: string) => async (): Promise<PoolResponse> => {
  return (await instance(baseURL).get("/cosmos/staking/v1beta1/pool")).data;
};

export const getValidators =
  (baseURL: string) =>
  async ({
    status,
    pagination,
  }: {
    status?: string;
    pagination?: PaginationParams;
  }): Promise<ValidatorsResponse> => {
    return (
      await instance(baseURL).get("/cosmos/staking/v1beta1/validators", {
        params: {
          status,
          pagination,
        },
      })
    ).data;
  };

export const getValidator =
  (baseURL: string) =>
  async ({
    validatorAddress,
  }: {
    validatorAddress: string;
  }): Promise<ValidatorResponse> => {
    return (
      await instance(baseURL).get(
        `/cosmos/staking/v1beta1/validators${validatorAddress}`
      )
    ).data;
  };

export const getValidatorDelegations =
  (baseURL: string) =>
  async ({
    validatorAddress,
    pagination,
  }: {
    validatorAddress: string;
    pagination?: PaginationParams;
  }): Promise<ValidatorDelegationsResponse> => {
    return (
      await instance(baseURL).get(
        `/cosmos/staking/v1beta1/validators/${validatorAddress}/delegations`,
        {
          params: { pagination },
        }
      )
    ).data;
  };

export const getValidatorDelegation =
  (baseURL: string) =>
  async ({
    validatorAddress,
    delegatorAddress,
  }: {
    validatorAddress: string;
    delegatorAddress: string;
  }): Promise<ValidatorDelegationResponse> => {
    return (
      await instance(baseURL).get(
        `/cosmos/staking/v1beta1/validators/${validatorAddress}/delegations/${delegatorAddress}`
      )
    ).data;
  };

export const getValidatorUnbondingDelegations =
  (baseURL: string) =>
  async ({
    validatorAddress,
    pagination,
  }: {
    validatorAddress: string;
    pagination?: PaginationParams;
  }): Promise<ValidatorUnbondingDelegationsResponse> => {
    return (
      await instance(baseURL).get(
        `/cosmos/staking/v1beta1/validators/${validatorAddress}/unbonding_delegations`,
        {
          params: { pagination },
        }
      )
    ).data;
  };

export const getValidatorUnbondingDelegation =
  (baseURL: string) =>
  async ({
    validatorAddress,
    delegatorAddress,
  }: {
    validatorAddress: string;
    delegatorAddress: string;
  }): Promise<ValidatorUnbondingDelegationResponse> => {
    return (
      await instance(baseURL).get(
        `/cosmos/staking/v1beta1/validators/${validatorAddress}/delegations/${delegatorAddress}/unbonding_delegation`
      )
    ).data;
  };
