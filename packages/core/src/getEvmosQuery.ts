import * as Evmos from "./apis/evmos";

export const getEvmosQuery = (baseURL: string | undefined) => {
  const setBase = <T>(callback: (url: string) => T) => {
    return callback(baseURL ?? "");
  };

  return {
    /**
     * GET `/evmos/claims/v1/claims_records`
     */
    getClaimsRecords: setBase(Evmos.getClaimsRecords),
    /**
     * GET `/evmos/claims/v1/claims_records/{address}`
     */
    getClaimsRecord: setBase(Evmos.getClaimsRecord),
    /**
     * GET `/evmos/claims/v1/params`
     */
    getClaimsParams: setBase(Evmos.getClaimsParams),
    /**
     * GET `/evmos/claims/v1/total_unclaimed`
     */
    getTotalUnclaimed: setBase(Evmos.getTotalUnclaimed),
    /**
     * GET `/evmos/epochs/v1/current_epoch`
     */
    getCurrentEpoch: setBase(Evmos.getCurrentEpoch),
    /**
     * GET `/evmos/epochs/v1/epochs`
     */
    getEpochs: setBase(Evmos.getEpochs),
    /**
     * GET `/evmos/erc20/v1/params`
     */
    getERC20Params: setBase(Evmos.getERC20Params),
    /**
     * GET `/evmos/erc20/v1/token_pairs`
     */
    getTokenPairs: setBase(Evmos.getTokenPairs),
    /**
     * GET `/evmos/erc20/v1/token_pairs/{token}`
     */
    getTokenPair: setBase(Evmos.getTokenPair),
    /**
     * GET `/evmos/incentives/v1/allocation_meters`
     */
    getAllocationMeters: setBase(Evmos.getAllocationMeters),
    /**
     * GET `/evmos/incentives/v1/allocation_meters/{denom}`
     */
    getAllocationMeter: setBase(Evmos.getAllocationMeter),
    /**
     * GET `/evmos/incentives/v1/gas_meters/{contract}`
     */
    getGasMeters: setBase(Evmos.getGasMeters),
    /**
     * GET `/evmos/incentives/v1/gas_meters/{contract}/{participant}`
     */
    getGasMeter: setBase(Evmos.getGasMeter),
    /**
     * GET `/evmos/incentives/v1/incentives`
     */
    getIncentives: setBase(Evmos.getIncentives),
    /**
     * GET `/evmos/incentives/v1/incentives/{contract}`
     */
    getIncentive: setBase(Evmos.getIncentive),
    /**
     * GET `/evmos/incentives/v1/params`
     */
    getIncentivesParams: setBase(Evmos.getIncentivesParams),
    /**
     * GET `/evmos/inflation/v1/circulating_supply`
     */
    getCirculatingSupply: setBase(Evmos.getCirculatingSupply),
    /**
     * GET `/evmos/inflation/v1/epoch_mint_provision`
     */
    getEpochMintProvision: setBase(Evmos.getEpochMintProvision),
    /**
     * GET `/evmos/inflation/v1/inflation_rate`
     */
    getInflationRate: setBase(Evmos.getInflationRate),
    /**
     * GET `/evmos/inflation/v1/params`
     */
    getInflationParams: setBase(Evmos.getInflationParams),
    /**
     * GET `/evmos/inflation/v1/period`
     */
    getInflationPeriod: setBase(Evmos.getInflationPeriod),
    /**
     * GET `/evmos/inflation/v1/skipped_epochs`
     */
    getSkippedEpochs: setBase(Evmos.getSkippedEpochs),
    /**
     * GET `/evmos/vesting/v1/balances/{address}`
     */
    getVestingBalances: setBase(Evmos.getVestingBalances),
    /**
     * GET `/evmos/recovery/v1/params`
     */
    getRecoveryParams: setBase(Evmos.getRecoveryParams),
  };
};
