import { AxiosInstance } from "axios";
import type {
  CirculatingSupplyResponse,
  EpochMintProvisionResponse,
  InflationParamsResponse,
  InflationPeriodResponse,
  InflationRateResponse,
  SkippedEpochsResponse,
} from "./types";

export type {
  CirculatingSupplyResponse,
  EpochMintProvisionResponse,
  InflationParamsResponse,
  InflationPeriodResponse,
  InflationRateResponse,
  SkippedEpochsResponse,
};

export const getCirculatingSupply =
  (instance: AxiosInstance) => async (): Promise<CirculatingSupplyResponse> => {
    return (await instance.get("/evmos/inflation/v1/circulating_supply")).data;
  };

export const getEpochMintProvision =
  (instance: AxiosInstance) =>
  async (): Promise<EpochMintProvisionResponse> => {
    return (await instance.get("/evmos/inflation/v1/epoch_mint_provision"))
      .data;
  };

export const getInflationRate =
  (instance: AxiosInstance) => async (): Promise<InflationRateResponse> => {
    return (await instance.get("/evmos/inflation/v1/inflation_rate")).data;
  };

export const getInflationParams =
  (instance: AxiosInstance) => async (): Promise<InflationParamsResponse> => {
    return (await instance.get("/evmos/inflation/v1/params")).data;
  };

export const getInflationPeriod =
  (instance: AxiosInstance) => async (): Promise<InflationPeriodResponse> => {
    return (await instance.get("/evmos/inflation/v1/period")).data;
  };

export const getSkippedEpochs =
  (instance: AxiosInstance) => async (): Promise<SkippedEpochsResponse> => {
    return (await instance.get("/evmos/inflation/v1/skipped_epochs")).data;
  };
