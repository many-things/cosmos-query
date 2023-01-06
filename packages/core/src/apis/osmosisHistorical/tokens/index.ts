import { AxiosInstance } from "axios";
import type {
  TokenCountResponse,
  TokensHistoricalChartParams,
  TokensHistoricalChartResponse,
  TokensLiquidityChartResponse,
  TokenPriceResponse,
  TokenResponse,
  AllTokensResponse,
  TokensMarketCapResponse,
  TokensTopResponse,
  TokensVolumeGlobalResponse,
  TokensVolumeChartResponse,
  TokensVolumeChartByPoolResponse,
} from "./types";

export type {
  TokenCountResponse,
  TokensHistoricalChartParams,
  TokensHistoricalChartResponse,
  TokensLiquidityChartResponse,
  TokenPriceResponse,
  TokenResponse,
  AllTokensResponse,
  TokensMarketCapResponse,
  TokensTopResponse,
  TokensVolumeGlobalResponse,
  TokensVolumeChartResponse,
  TokensVolumeChartByPoolResponse,
};

export const getAllTokens =
  (instance: AxiosInstance) => async (): Promise<AllTokensResponse> => {
    return (await instance.get("/tokens/v2/all")).data;
  };

export const getTokensMarketCap =
  (instance: AxiosInstance) => async (): Promise<TokensMarketCapResponse> => {
    return (await instance.get("/tokens/v2/mcap")).data;
  };

export const getToken =
  (instance: AxiosInstance) =>
  async ({ symbol }: { symbol: string }): Promise<TokenResponse> => {
    return (await instance.get(`/tokens/v2/${symbol}`)).data;
  };

export const getTokenHistoricalChart =
  (instance: AxiosInstance) =>
  async ({
    symbol,
  }: TokensHistoricalChartParams): Promise<TokensHistoricalChartResponse> => {
    return (await instance.get(`/tokens/v2/historical/${symbol}/chart`)).data;
  };

export const getTokenLiquidityChart =
  (instance: AxiosInstance) =>
  async ({
    symbol,
  }: {
    symbol: string;
  }): Promise<TokensLiquidityChartResponse> => {
    return (await instance.get(`/tokens/v2/liquidity/${symbol}/chart`)).data;
  };

export const getTokenVolumeChart =
  (instance: AxiosInstance) =>
  async ({
    symbol,
  }: {
    symbol: string;
  }): Promise<TokensVolumeChartResponse> => {
    return (await instance.get(`/tokens/v2/volume/${symbol}/chart`)).data;
  };

export const getTokenPrice =
  (instance: AxiosInstance) =>
  async ({ symbol }: { symbol: string }): Promise<TokenPriceResponse> => {
    return (await instance.get(`/tokens/v2/price/${symbol}`)).data;
  };

export const getTokensTop =
  (instance: AxiosInstance) =>
  async ({
    type,
  }: {
    type: "gainer" | "losers";
  }): Promise<TokensTopResponse> => {
    return (await instance.get(`/tokens/v2/top/${type}`)).data;
  };

export const getTokensCount =
  (instance: AxiosInstance) =>
  async ({
    poolId,
    rangeStart,
    rangeStop,
  }: {
    poolId: string;
    rangeStart: string;
    rangeStop: string;
  }): Promise<TokenCountResponse> => {
    return (
      await instance.get(`/tokens/v2/count/${poolId}`, {
        params: {
          range_start: rangeStart,
          range_stop: rangeStop,
        },
      })
    ).data;
  };

export const getTokensVolumeGlobal =
  (instance: AxiosInstance) =>
  async (): Promise<TokensVolumeGlobalResponse> => {
    return (await instance.get("/tokens/v2/volume/global")).data;
  };

export const getTokensCoinVolumeChart =
  (instance: AxiosInstance) =>
  async ({
    symbol,
  }: {
    symbol: string;
  }): Promise<TokensVolumeChartResponse> => {
    return (await instance.get(`/tokens/v2/volume/coin/${symbol}/chart`)).data;
  };

export const getTokensVolumeChartByPool =
  (instance: AxiosInstance) =>
  async ({
    poolId,
  }: {
    poolId: number;
  }): Promise<TokensVolumeChartByPoolResponse> => {
    return (await instance.get(`/tokens/v2/volume/${poolId}/coin/chart`)).data;
  };
