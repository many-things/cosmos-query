import { osmosisInstance } from "../../../utils";
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

export const getAllTokens = async (): Promise<AllTokensResponse> => {
  return (await osmosisInstance.get("/tokens/v2/all")).data;
};

export const getTokensMarketCap =
  async (): Promise<TokensMarketCapResponse> => {
    return (await osmosisInstance.get("/tokens/v2/mcap")).data;
  };

export const getToken = async ({
  symbol,
}: {
  symbol: string;
}): Promise<TokenResponse> => {
  return (await osmosisInstance.get(`/tokens/v2/${symbol}`)).data;
};

export const getTokenHistoricalChart = async ({
  symbol,
}: TokensHistoricalChartParams): Promise<TokensHistoricalChartResponse> => {
  return (await osmosisInstance.get(`/tokens/v2/historical/${symbol}/chart`))
    .data;
};

export const getTokenLiquidityChart = async ({
  symbol,
}: {
  symbol: string;
}): Promise<TokensLiquidityChartResponse> => {
  return (await osmosisInstance.get(`/tokens/v2/liquidity/${symbol}/chart`))
    .data;
};

export const getTokenVolumeChart = async ({
  symbol,
}: {
  symbol: string;
}): Promise<TokensVolumeChartResponse> => {
  return (await osmosisInstance.get(`/tokens/v2/volume/${symbol}/chart`)).data;
};

export const getTokenPrice = async ({
  symbol,
}: {
  symbol: string;
}): Promise<TokenPriceResponse> => {
  return (await osmosisInstance.get(`/tokens/v2/price/${symbol}`)).data;
};

export const getTokensTop = async ({
  type,
}: {
  type: "gainer" | "losers";
}): Promise<TokensTopResponse> => {
  return (await osmosisInstance.get(`/tokens/v2/top/${type}`)).data;
};

export const getTokensCount = async ({
  poolId,
  rangeStart,
  rangeStop,
}: {
  poolId: string;
  rangeStart: string;
  rangeStop: string;
}): Promise<TokenCountResponse> => {
  return (
    await osmosisInstance.get(`/tokens/v2/count/${poolId}`, {
      params: {
        range_start: rangeStart,
        range_stop: rangeStop,
      },
    })
  ).data;
};

export const getTokensVolumeGlobal =
  async (): Promise<TokensVolumeGlobalResponse> => {
    return (await osmosisInstance.get("/tokens/v2/volume/global")).data;
  };

export const getTokensCoinVolumeChart = async ({
  symbol,
}: {
  symbol: string;
}): Promise<TokensVolumeChartResponse> => {
  return (await osmosisInstance.get(`/tokens/v2/volume/coin/${symbol}/chart`))
    .data;
};

export const getTokensVolumeChartByPool = async ({
  poolId,
}: {
  poolId: number;
}): Promise<TokensVolumeChartByPoolResponse> => {
  return (await osmosisInstance.get(`/tokens/v2/volume/${poolId}/coin/chart`))
    .data;
};
