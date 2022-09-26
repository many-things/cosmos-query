import { instance } from "../../../utils";
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
  (baseURL: string) => async (): Promise<CirculatingSupplyResponse> => {
    return (
      await instance(baseURL).get("/evmos/inflation/v1/circulating_supply")
    ).data;
  };

export const getEpochMintProvision =
  (baseURL: string) => async (): Promise<EpochMintProvisionResponse> => {
    return (
      await instance(baseURL).get("/evmos/inflation/v1/epoch_mint_provision")
    ).data;
  };

export const getInflationRate =
  (baseURL: string) => async (): Promise<InflationRateResponse> => {
    return (await instance(baseURL).get("/evmos/inflation/v1/inflation_rate"))
      .data;
  };

export const getInflationParams =
  (baseURL: string) => async (): Promise<InflationParamsResponse> => {
    return (await instance(baseURL).get("/evmos/inflation/v1/params")).data;
  };

export const getInflationPeriod =
  (baseURL: string) => async (): Promise<InflationPeriodResponse> => {
    return (await instance(baseURL).get("/evmos/inflation/v1/period")).data;
  };

export const getSkippedEpochs =
  (baseURL: string) => async (): Promise<SkippedEpochsResponse> => {
    return (await instance(baseURL).get("/evmos/inflation/v1/skipped_epochs"))
      .data;
  };
