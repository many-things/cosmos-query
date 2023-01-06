import { AxiosInstance } from "axios";
import type { CoinsResponse, LockedByIdResponse, LocksResponse } from "./types";

export type { CoinsResponse, LockedByIdResponse, LocksResponse };

export const getAccountLockedCoins =
  (instance: AxiosInstance) =>
  async ({ owner }: { owner: string }): Promise<CoinsResponse> => {
    return (
      await instance.get(
        `/osmosis/lockup/v1beta1/account_locked_coins/${owner}`
      )
    ).data;
  };

export const getAccountLockedLongerDuration =
  (instance: AxiosInstance) =>
  async ({
    owner,
    duration,
  }: {
    owner: string;
    duration?: string;
  }): Promise<LocksResponse> => {
    return (
      await instance.get(
        `/osmosis/lockup/v1beta1/account_locked_longer_duration/${owner}`,
        {
          params: { duration },
        }
      )
    ).data;
  };

export const getAccountLockedLongerDurationDenom =
  (instance: AxiosInstance) =>
  async ({
    owner,
    duration,
    denom,
  }: {
    owner: string;
    duration?: string;
    denom?: string;
  }): Promise<LocksResponse> => {
    return (
      await instance.get(
        `/osmosis/lockup/v1beta1/account_locked_longer_duration_denom/${owner}`,
        {
          params: {
            duration,
            denom,
          },
        }
      )
    ).data;
  };

export const getAccountLockedLongerDurationNotUnlockingOnly =
  (instance: AxiosInstance) =>
  async ({
    owner,
    duration,
  }: {
    owner: string;
    duration?: string;
  }): Promise<LocksResponse> => {
    return (
      await instance.get(
        `/osmosis/lockup/v1beta1/account_locked_longer_duration_not_unlocking_only/${owner}`,
        {
          params: { duration },
        }
      )
    ).data;
  };

export const getAccountLockedPastTime =
  (instance: AxiosInstance) =>
  async ({
    owner,
    timestamp,
  }: {
    owner: string;
    timestamp?: string;
  }): Promise<LocksResponse> => {
    return (
      await instance.get(
        `/osmosis/lockup/v1beta1/account_locked_pasttime/${owner}`,
        {
          params: { timestamp },
        }
      )
    ).data;
  };

export const getAccountLockedPastTimeDenom =
  (instance: AxiosInstance) =>
  async ({
    owner,
    timestamp,
    denom,
  }: {
    owner: string;
    timestamp?: string;
    denom?: string;
  }): Promise<LocksResponse> => {
    return (
      await instance.get(
        `/osmosis/lockup/v1beta1/account_locked_pasttime_denom/${owner}`,
        {
          params: { timestamp, denom },
        }
      )
    ).data;
  };

export const getAccountLockedPastTimeNotUnlockingOnly =
  (instance: AxiosInstance) =>
  async ({
    owner,
    timestamp,
  }: {
    owner: string;
    timestamp?: string;
  }): Promise<LocksResponse> => {
    return (
      await instance.get(
        `/osmosis/lockup/v1beta1/account_locked_pasttime_not_unlocking_only/${owner}`,
        {
          params: { timestamp },
        }
      )
    ).data;
  };

export const getAccountUnlockableCoins =
  (instance: AxiosInstance) =>
  async ({ owner }: { owner: string }): Promise<LocksResponse> => {
    return (
      await instance.get(
        `/osmosis/lockup/v1beta1/account_unlockable_coins/${owner}`
      )
    ).data;
  };

export const getAccountUnlockedBeforeTime =
  (instance: AxiosInstance) =>
  async ({
    owner,
    timestamp,
  }: {
    owner: string;
    timestamp?: string;
  }): Promise<LocksResponse> => {
    return (
      await instance.get(
        `/osmosis/lockup/v1beta1/account_unlocked_before_time/${owner}`,
        {
          params: { timestamp },
        }
      )
    ).data;
  };

export const getAccountUnlockingCoins =
  (instance: AxiosInstance) =>
  async ({ owner }: { owner: string }): Promise<LocksResponse> => {
    return (
      await instance.get(
        `/osmosis/lockup/v1beta1/account_unlocking_coins/${owner}`
      )
    ).data;
  };

export const getLockedById =
  (instance: AxiosInstance) =>
  async ({ lockId }: { lockId: string }): Promise<LockedByIdResponse> => {
    return (
      await instance.get(`/osmosis/lockup/v1beta1/locked_by_id/${lockId}`)
    ).data;
  };

export const getModuleBalance =
  (instance: AxiosInstance) => async (): Promise<LocksResponse> => {
    return (await instance.get("/osmosis/lockup/v1beta1/module_balance")).data;
  };

export const getModuleLockedAmount =
  (instance: AxiosInstance) => async (): Promise<LocksResponse> => {
    return (await instance.get("/osmosis/lockup/v1beta1/module_locked_amount"))
      .data;
  };
