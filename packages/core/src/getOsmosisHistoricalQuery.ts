import * as OsmosisHistorical from "./apis/osmosisHistorical";

export const getOsmosisHistoricalQuery = () => {
  return {
    /**
     * GET `/health/v1/check`
     */
    getHealth: OsmosisHistorical.getHealth,
    /**
     * GET `/overview/v1/metrics`
     */
    getMetrics: OsmosisHistorical.getMetrics,
    /**
     * GET `/overview/v1/message`
     */
    getMessage: OsmosisHistorical.getMessage,
    /**
     * GET `/ibc/v1/info`
     */
    getIbcInfo: OsmosisHistorical.getIbcInfo,
    /**
     * GET `/ibc/v1/all`
     */
    getAllIbc: OsmosisHistorical.getAllIbc,
    /**
     * GET `/ibc/v1/source/{source}/destination{destination}`
     */
    getIbcSourceDestination: OsmosisHistorical.getIbcSourceDestination,
    /**
     * GET `/ibc/v1/source/{source}`
     */
    getIbcSource: OsmosisHistorical.getIbcSource,
    /**
     * GET `/ibc/v1/destination/{destination}`
     */
    getIbcDestination: OsmosisHistorical.getIbcDestination,
    /**
     * GET `/ibc/v1/raw`
     */
    getIbcRaw: OsmosisHistorical.getIbcRaw,
    /**
     * GET `/pairs/v1/summary`
     */
    getPairsSummary: OsmosisHistorical.getPairsSummary,
    /**
     * GET `/pairs/v1/historical/{pool_id}/chart`
     */
    getPairsHistoricalChart: OsmosisHistorical.getPairsHistoricalChart,
    /**
     * GET `/pools/v2/all`
     */
    getAllPools: OsmosisHistorical.getAllPools,
    /**
     * GET `/pools/v2/{pool_id}`
     */
    getPool: OsmosisHistorical.getPool,
    /**
     * GET `/pools/v2/liquidity/{pool_id}/chart`
     */
    getPoolLiquidityChart: OsmosisHistorical.getPoolLiquidityChart,
    /**
     * GET `/pools/vs2/volume/{pool_id}/chart`
     */
    getPoolVolumeChart: OsmosisHistorical.getPoolVolumeChart,
    /**
     * GET `/tokens/v2/all`
     */
    getAllTokens: OsmosisHistorical.getAllTokens,
    /**
     * GET `/tokens/v2/mcap`
     */
    getTokensMarketCap: OsmosisHistorical.getTokensMarketCap,
    /**
     * GET `/tokens/v2/{symbol}`
     */
    getToken: OsmosisHistorical.getToken,
    /**
     * GET `/tokens/v2/historical/{symbol}/chart`
     */
    getTokenHistoricalChart: OsmosisHistorical.getTokenHistoricalChart,
    /**
     * GET `/tokens/v2/liquidity/{symbol}/chart`
     */
    getTokenLiquidityChart: OsmosisHistorical.getTokenLiquidityChart,
    /**
     * GET `/tokens/v2/volume/{symbol}/chart`
     */
    getTokenVolumeChart: OsmosisHistorical.getTokenVolumeChart,
    /**
     * GET `/tokens/v2/price/{symbol}`
     */
    getTokenPrice: OsmosisHistorical.getTokenPrice,
    /**
     * GET `/tokens/v2/top/{type}`
     */
    getTokensTop: OsmosisHistorical.getTokensTop,
    /**
     * GET `/tokens/v2/count/{pool_id}`
     */
    getTokensCount: OsmosisHistorical.getTokensCount,
    /**
     * GET `/tokens/v2/volume/global`
     */
    getTokensVolumeGlobal: OsmosisHistorical.getTokensVolumeGlobal,
    /**
     * GET `/tokens/v2/volume/coin/{symbol}/chart`
     */
    getTokensCoinVolumeChart: OsmosisHistorical.getTokensCoinVolumeChart,
    /**
     * GET `/tokens/v2/volume/{pool_id}/coin/chart`
     */
    getTokensVolumeChartByPool: OsmosisHistorical.getTokensVolumeChartByPool,
    /**
     * GET `/liquidity/v2/historical/chart`
     */
    getLiquidityHistoricalChart: OsmosisHistorical.getLiquidityHistoricalChart,
    /**
     * GET `/volume/v2/historical/chart`
     */
    getVolumeHistoricalChart: OsmosisHistorical.getVolumeHistoricalChart,
    /**
     * GET `/volume/v2/total`
     */
    getTotalVolume: OsmosisHistorical.getTotalVolume,
    /**
     * GET `/fees/v1/total`
     */
    getTotalFees: OsmosisHistorical.getTotalFees,
    /**
     * GET `/fees/v1/pools`
     */
    getPoolsFees: OsmosisHistorical.getPoolsFees,
    /**
     * GET `/fees/v1/{pool_id}`
     */
    getPoolFees: OsmosisHistorical.getPoolFees,
    /**
     * GET `/fees/v1/total/historical`
     */
    getHistoricalFees: OsmosisHistorical.getHistoricalFees,
    /**
     * GET `/fees/v1/historical/{pool_id}`
     */
    getHistoricalFee: OsmosisHistorical.getHistoricalFee,
    /**
     * GET `/search/v1/denom`
     */
    getSearchDenom: OsmosisHistorical.getSearchDenom,
    /**
     * GET `/search/v1/symbol`
     */
    getSearchSymbol: OsmosisHistorical.getSearchSymbol,
    /**
     * GET `/search/v1/exponent`
     */
    getSearchExponent: OsmosisHistorical.getSearchExponent,
    /**
     * GET `/apr/v2/staking`
     */
    getStakingAPR: OsmosisHistorical.getStakingAPR,
    /**
     * GET `/apr/v2/all`
     */
    getAllAPR: OsmosisHistorical.getAllAPR,
    /**
     * GET `/apr/v2/{pool_id}`
     */
    getAPR: OsmosisHistorical.getAPR,
    /**
     * GET `/supply/v1/osmo`
     */
    getSupplyOsmo: OsmosisHistorical.getSupplyOsmo,
    /**
     * GET `/supply/v1/ion`
     */
    getSupplyIon: OsmosisHistorical.getSupplyIon,
    /**
     * POST `/tradingview/v1/authorize`
     */
    postTradingViewAuthorize: OsmosisHistorical.postTradingViewAuthorize,
    /**
     * GET `/tradingview/v1/symbol_info`
     */
    getTradingViewSymbolInfo: OsmosisHistorical.getTradingViewSymbolInfo,
    /**
     * GET `/tradingview/v1/history`
     */
    getTradingViewHistory: OsmosisHistorical.getTradingViewHistory,
    /**
     * GET `/tradingview/v1/streaming`
     */
    getTradingViewStreaming: OsmosisHistorical.getTradingViewStreaming,
  };
};
