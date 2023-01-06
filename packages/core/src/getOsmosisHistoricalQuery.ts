import { AxiosInstance } from "axios";
import * as OsmosisHistorical from "./apis/osmosisHistorical";
import { osmosisInstance } from "./common";

export const getOsmosisHistoricalQuery = (instance?: AxiosInstance) => {
  const setInstance = <T>(callback: (instance: AxiosInstance) => T) => {
    return callback(instance || osmosisInstance);
  };
  return {
    /**
     * GET `/health/v1/check`
     */
    getHealth: setInstance(OsmosisHistorical.getHealth),
    /**
     * GET `/overview/v1/metrics`
     */
    getMetrics: setInstance(OsmosisHistorical.getMetrics),
    /**
     * GET `/overview/v1/message`
     */
    getMessage: setInstance(OsmosisHistorical.getMessage),
    /**
     * GET `/ibc/v1/info`
     */
    getIbcInfo: setInstance(OsmosisHistorical.getIbcInfo),
    /**
     * GET `/ibc/v1/all`
     */
    getAllIbc: setInstance(OsmosisHistorical.getAllIbc),
    /**
     * GET `/ibc/v1/source/{source}/destination{destination}`
     */
    getIbcSourceDestination: setInstance(
      OsmosisHistorical.getIbcSourceDestination
    ),
    /**
     * GET `/ibc/v1/source/{source}`
     */
    getIbcSource: setInstance(OsmosisHistorical.getIbcSource),
    /**
     * GET `/ibc/v1/destination/{destination}`
     */
    getIbcDestination: setInstance(OsmosisHistorical.getIbcDestination),
    /**
     * GET `/ibc/v1/raw`
     */
    getIbcRaw: setInstance(OsmosisHistorical.getIbcRaw),
    /**
     * GET `/pairs/v1/summary`
     */
    getPairsSummary: setInstance(OsmosisHistorical.getPairsSummary),
    /**
     * GET `/pairs/v1/historical/{pool_id}/chart`
     */
    getPairsHistoricalChart: setInstance(
      OsmosisHistorical.getPairsHistoricalChart
    ),
    /**
     * GET `/pools/v2/all`
     */
    getAllPools: setInstance(OsmosisHistorical.getAllPools),
    /**
     * GET `/pools/v2/{pool_id}`
     */
    getPool: setInstance(OsmosisHistorical.getPool),
    /**
     * GET `/pools/v2/liquidity/{pool_id}/chart`
     */
    getPoolLiquidityChart: setInstance(OsmosisHistorical.getPoolLiquidityChart),
    /**
     * GET `/pools/vs2/volume/{pool_id}/chart`
     */
    getPoolVolumeChart: setInstance(OsmosisHistorical.getPoolVolumeChart),
    /**
     * GET `/tokens/v2/all`
     */
    getAllTokens: setInstance(OsmosisHistorical.getAllTokens),
    /**
     * GET `/tokens/v2/mcap`
     */
    getTokensMarketCap: setInstance(OsmosisHistorical.getTokensMarketCap),
    /**
     * GET `/tokens/v2/{symbol}`
     */
    getToken: setInstance(OsmosisHistorical.getToken),
    /**
     * GET `/tokens/v2/historical/{symbol}/chart`
     */
    getTokenHistoricalChart: setInstance(
      OsmosisHistorical.getTokenHistoricalChart
    ),
    /**
     * GET `/tokens/v2/liquidity/{symbol}/chart`
     */
    getTokenLiquidityChart: setInstance(
      OsmosisHistorical.getTokenLiquidityChart
    ),
    /**
     * GET `/tokens/v2/volume/{symbol}/chart`
     */
    getTokenVolumeChart: setInstance(OsmosisHistorical.getTokenVolumeChart),
    /**
     * GET `/tokens/v2/price/{symbol}`
     */
    getTokenPrice: setInstance(OsmosisHistorical.getTokenPrice),
    /**
     * GET `/tokens/v2/top/{type}`
     */
    getTokensTop: setInstance(OsmosisHistorical.getTokensTop),
    /**
     * GET `/tokens/v2/count/{pool_id}`
     */
    getTokensCount: setInstance(OsmosisHistorical.getTokensCount),
    /**
     * GET `/tokens/v2/volume/global`
     */
    getTokensVolumeGlobal: setInstance(OsmosisHistorical.getTokensVolumeGlobal),
    /**
     * GET `/tokens/v2/volume/coin/{symbol}/chart`
     */
    getTokensCoinVolumeChart: setInstance(
      OsmosisHistorical.getTokensCoinVolumeChart
    ),
    /**
     * GET `/tokens/v2/volume/{pool_id}/coin/chart`
     */
    getTokensVolumeChartByPool: setInstance(
      OsmosisHistorical.getTokensVolumeChartByPool
    ),
    /**
     * GET `/liquidity/v2/historical/chart`
     */
    getLiquidityHistoricalChart: setInstance(
      OsmosisHistorical.getLiquidityHistoricalChart
    ),
    /**
     * GET `/volume/v2/historical/chart`
     */
    getVolumeHistoricalChart: setInstance(
      OsmosisHistorical.getVolumeHistoricalChart
    ),
    /**
     * GET `/volume/v2/total`
     */
    getTotalVolume: setInstance(OsmosisHistorical.getTotalVolume),
    /**
     * GET `/fees/v1/total`
     */
    getTotalFees: setInstance(OsmosisHistorical.getTotalFees),
    /**
     * GET `/fees/v1/pools`
     */
    getPoolsFees: setInstance(OsmosisHistorical.getPoolsFees),
    /**
     * GET `/fees/v1/{pool_id}`
     */
    getPoolFees: setInstance(OsmosisHistorical.getPoolFees),
    /**
     * GET `/fees/v1/total/historical`
     */
    getHistoricalFees: setInstance(OsmosisHistorical.getHistoricalFees),
    /**
     * GET `/fees/v1/historical/{pool_id}`
     */
    getHistoricalFee: setInstance(OsmosisHistorical.getHistoricalFee),
    /**
     * GET `/search/v1/denom`
     */
    getSearchDenom: setInstance(OsmosisHistorical.getSearchDenom),
    /**
     * GET `/search/v1/symbol`
     */
    getSearchSymbol: setInstance(OsmosisHistorical.getSearchSymbol),
    /**
     * GET `/search/v1/exponent`
     */
    getSearchExponent: setInstance(OsmosisHistorical.getSearchExponent),
    /**
     * GET `/apr/v2/staking`
     */
    getStakingAPR: setInstance(OsmosisHistorical.getStakingAPR),
    /**
     * GET `/apr/v2/all`
     */
    getAllAPR: setInstance(OsmosisHistorical.getAllAPR),
    /**
     * GET `/apr/v2/{pool_id}`
     */
    getAPR: setInstance(OsmosisHistorical.getAPR),
    /**
     * GET `/supply/v1/osmo`
     */
    getSupplyOsmo: setInstance(OsmosisHistorical.getSupplyOsmo),
    /**
     * GET `/supply/v1/ion`
     */
    getSupplyIon: setInstance(OsmosisHistorical.getSupplyIon),
    /**
     * POST `/tradingview/v1/authorize`
     */
    postTradingViewAuthorize: setInstance(
      OsmosisHistorical.postTradingViewAuthorize
    ),
    /**
     * GET `/tradingview/v1/symbol_info`
     */
    getTradingViewSymbolInfo: setInstance(
      OsmosisHistorical.getTradingViewSymbolInfo
    ),
    /**
     * GET `/tradingview/v1/history`
     */
    getTradingViewHistory: setInstance(OsmosisHistorical.getTradingViewHistory),
    /**
     * GET `/tradingview/v1/streaming`
     */
    getTradingViewStreaming: setInstance(
      OsmosisHistorical.getTradingViewStreaming
    ),
  };
};
