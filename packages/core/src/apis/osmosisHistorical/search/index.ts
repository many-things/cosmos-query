import { osmosisInstance } from "../../../common";
import type {
  SearchDenomResponse,
  SearchExponentResponse,
  SearchSymbolResponse,
} from "./types";

export type {
  SearchDenomResponse,
  SearchExponentResponse,
  SearchSymbolResponse,
};

export const getSearchDenom = async ({
  symbol,
}: {
  symbol: string;
}): Promise<SearchDenomResponse> => {
  return (
    await osmosisInstance.get("/search/v1/denom", {
      params: {
        symbol,
      },
    })
  ).data;
};

export const getSearchSymbol = async ({
  denom,
}: {
  denom: string;
}): Promise<SearchSymbolResponse> => {
  return (
    await osmosisInstance.get("/search/v1/symbol", {
      params: {
        denom,
      },
    })
  ).data;
};

export const getSearchExponent = async ({
  symbol,
}: {
  symbol: string;
}): Promise<SearchExponentResponse> => {
  return (
    await osmosisInstance.get("/search/v1/exponent", {
      params: {
        symbol,
      },
    })
  ).data;
};
