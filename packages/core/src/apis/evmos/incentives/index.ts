import { instance } from "../../../utils";
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
  (baseURL: string) =>
  async ({
    pagination,
  }: {
    pagination?: PaginationParams;
  }): Promise<AllocationMetersResponse> => {
    return (
      await instance(baseURL).get("/evmos/incentives/v1/allocation_meters", {
        params: { pagination },
      })
    ).data;
  };

export const getAllocationMeter =
  (baseURL: string) =>
  async ({ denom }: { denom: string }): Promise<AllocationMeterResponse> => {
    return (
      await instance(baseURL).get(
        `/evmos/incentives/v1/allocation_meters/${denom}`
      )
    ).data;
  };

export const getGasMeters =
  (baseURL: string) =>
  async ({
    contract,
    pagination,
  }: {
    contract: string;
    pagination?: PaginationParams;
  }): Promise<GasMetersResponse> => {
    return (
      await instance(baseURL).get(
        `/evmos/incentives/v1/gas_meters/${contract}`,
        {
          params: { pagination },
        }
      )
    ).data;
  };

export const getGasMeter =
  (baseURL: string) =>
  async ({
    contract,
    participant,
  }: {
    contract: string;
    participant: string;
  }): Promise<GasMeterResponse> => {
    return (
      await instance(baseURL).get(
        `/evmos/incentives/v1/gas_meters/${contract}/${participant}`
      )
    ).data;
  };

export const getIncentives =
  (baseURL: string) =>
  async ({
    pagination,
  }: {
    pagination?: PaginationParams;
  }): Promise<IncentivesResponse> => {
    return (
      await instance(baseURL).get("/evmos/incentives/v1/incentives", {
        params: { pagination },
      })
    ).data;
  };

export const getIncentive =
  (baseURL: string) =>
  async ({ contract }: { contract: string }): Promise<IncentiveResponse> => {
    return (
      await instance(baseURL).get(`/evmos/incentives/v1/incentives/${contract}`)
    ).data;
  };

export const getIncentivesParams =
  (baseURL: string) => async (): Promise<IncentivesParamsResponse> => {
    return (await instance(baseURL).get("/evmos/incentives/v1/params")).data;
  };
