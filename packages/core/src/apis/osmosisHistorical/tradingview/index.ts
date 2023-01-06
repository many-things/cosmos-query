// TODO: Add return types
import { AxiosInstance } from "axios";

export const postTradingViewAuthorize =
  (instance: AxiosInstance) =>
  async (body: { login: string; password: string; scope?: string }) => {
    return (await instance.post("/tradingview/v1/authorize", body)).data;
  };

export const getTradingViewSymbolInfo =
  (instance: AxiosInstance) => async () => {
    return (await instance.get("/tradingview/v1/symbol_info")).data;
  };

export const getTradingViewHistory =
  (instance: AxiosInstance) =>
  async ({
    symbol,
    to,
    from,
    resolution,
  }: {
    symbol: string;
    to: number;
    from: number;
    resolution: string;
  }) => {
    return (
      await instance.get("/tradingview/v1/history", {
        params: { symbol, to, from, resolution },
      })
    ).data;
  };

export const getTradingViewStreaming =
  (instance: AxiosInstance) => async () => {
    return (await instance.get("/tradingview/v1/streaming")).data;
  };
