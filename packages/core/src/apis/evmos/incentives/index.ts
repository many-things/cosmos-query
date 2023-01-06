import { AxiosInstance } from "axios";
import type { PaginationParams } from "../../../types";
import type {
  AllocationMeterResponse,
  AllocationMetersResponse,
  GasMeterResponse,
  GasMetersResponse,
  IncentiveResponse,
  IncentivesParamsResponse,
  IncentivesResponse,
} from "./types";

export type {
  AllocationMeterResponse,
  AllocationMetersResponse,
  GasMeterResponse,
  GasMetersResponse,
  IncentiveResponse,
  IncentivesParamsResponse,
  IncentivesResponse,
};

export const getAllocationMeters =
  (instance: AxiosInstance) =>
  async ({
    pagination,
  }: {
    pagination?: PaginationParams;
  }): Promise<AllocationMetersResponse> => {
    return (
      await instance.get("/evmos/incentives/v1/allocation_meters", {
        params: { pagination },
      })
    ).data;
  };

export const getAllocationMeter =
  (instance: AxiosInstance) =>
  async ({ denom }: { denom: string }): Promise<AllocationMeterResponse> => {
    return (
      await instance.get(`/evmos/incentives/v1/allocation_meters/${denom}`)
    ).data;
  };

export const getGasMeters =
  (instance: AxiosInstance) =>
  async ({
    contract,
    pagination,
  }: {
    contract: string;
    pagination?: PaginationParams;
  }): Promise<GasMetersResponse> => {
    return (
      await instance.get(`/evmos/incentives/v1/gas_meters/${contract}`, {
        params: { pagination },
      })
    ).data;
  };

export const getGasMeter =
  (instance: AxiosInstance) =>
  async ({
    contract,
    participant,
  }: {
    contract: string;
    participant: string;
  }): Promise<GasMeterResponse> => {
    return (
      await instance.get(
        `/evmos/incentives/v1/gas_meters/${contract}/${participant}`
      )
    ).data;
  };

export const getIncentives =
  (instance: AxiosInstance) =>
  async ({
    pagination,
  }: {
    pagination?: PaginationParams;
  }): Promise<IncentivesResponse> => {
    return (
      await instance.get("/evmos/incentives/v1/incentives", {
        params: { pagination },
      })
    ).data;
  };

export const getIncentive =
  (instance: AxiosInstance) =>
  async ({ contract }: { contract: string }): Promise<IncentiveResponse> => {
    return (await instance.get(`/evmos/incentives/v1/incentives/${contract}`))
      .data;
  };

export const getIncentivesParams =
  (instance: AxiosInstance) => async (): Promise<IncentivesParamsResponse> => {
    return (await instance.get("/evmos/incentives/v1/params")).data;
  };
