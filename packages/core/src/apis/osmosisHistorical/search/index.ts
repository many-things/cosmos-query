import { AxiosInstance } from "axios";
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

export const getSearchDenom =
  (instance: AxiosInstance) =>
  async ({ symbol }: { symbol: string }): Promise<SearchDenomResponse> => {
    return (
      await instance.get("/search/v1/denom", {
        params: {
          symbol,
        },
      })
    ).data;
  };

export const getSearchSymbol =
  (instance: AxiosInstance) =>
  async ({ denom }: { denom: string }): Promise<SearchSymbolResponse> => {
    return (
      await instance.get("/search/v1/symbol", {
        params: {
          denom,
        },
      })
    ).data;
  };

export const getSearchExponent =
  (instance: AxiosInstance) =>
  async ({ symbol }: { symbol: string }): Promise<SearchExponentResponse> => {
    return (
      await instance.get("/search/v1/exponent", {
        params: {
          symbol,
        },
      })
    ).data;
  };
