// TODO: Add return types
import { osmosisInstance } from "../../../common";

export const postTradingViewAuthorize = async (body: {
  login: string;
  password: string;
  scope?: string;
}) => {
  return (await osmosisInstance.post("/tradingview/v1/authorize", body)).data;
};

export const getTradingViewSymbolInfo = async () => {
  return (await osmosisInstance.get("/tradingview/v1/symbol_info")).data;
};

export const getTradingViewHistory = async ({
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
    await osmosisInstance.get("/tradingview/v1/history", {
      params: { symbol, to, from, resolution },
    })
  ).data;
};

export const getTradingViewStreaming = async () => {
  return (await osmosisInstance.get("/tradingview/v1/streaming")).data;
};
