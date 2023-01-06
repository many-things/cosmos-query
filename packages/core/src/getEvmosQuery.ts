import { AxiosInstance } from "axios";
import * as Evmos from "./apis/evmos";

export const getEvmosQuery = (instance: AxiosInstance) => {
  const setInstance = <T>(callback: (instance: AxiosInstance) => T) => {
    return callback(instance);
  };

  return {
    /**
     * GET `/evmos/claims/v1/claims_records`
     */
    getClaimsRecords: setInstance(Evmos.getClaimsRecords),
    /**
     * GET `/evmos/claims/v1/claims_records/{address}`
     */
    getClaimsRecord: setInstance(Evmos.getClaimsRecord),
    /**
     * GET `/evmos/claims/v1/params`
     */
    getClaimsParams: setInstance(Evmos.getClaimsParams),
    /**
     * GET `/evmos/claims/v1/total_unclaimed`
     */
    getTotalUnclaimed: setInstance(Evmos.getTotalUnclaimed),
    /**
     * GET `/evmos/epochs/v1/current_epoch`
     */
    getCurrentEpoch: setInstance(Evmos.getCurrentEpoch),
    /**
     * GET `/evmos/epochs/v1/epochs`
     */
    getEpochs: setInstance(Evmos.getEpochs),
    /**
     * GET `/evmos/erc20/v1/params`
     */
    getERC20Params: setInstance(Evmos.getERC20Params),
    /**
     * GET `/evmos/erc20/v1/token_pairs`
     */
    getTokenPairs: setInstance(Evmos.getTokenPairs),
    /**
     * GET `/evmos/erc20/v1/token_pairs/{token}`
     */
    getTokenPair: setInstance(Evmos.getTokenPair),
    /**
     * GET `/evmos/incentives/v1/allocation_meters`
     */
    getAllocationMeters: setInstance(Evmos.getAllocationMeters),
    /**
     * GET `/evmos/incentives/v1/allocation_meters/{denom}`
     */
    getAllocationMeter: setInstance(Evmos.getAllocationMeter),
    /**
     * GET `/evmos/incentives/v1/gas_meters/{contract}`
     */
    getGasMeters: setInstance(Evmos.getGasMeters),
    /**
     * GET `/evmos/incentives/v1/gas_meters/{contract}/{participant}`
     */
    getGasMeter: setInstance(Evmos.getGasMeter),
    /**
     * GET `/evmos/incentives/v1/incentives`
     */
    getIncentives: setInstance(Evmos.getIncentives),
    /**
     * GET `/evmos/incentives/v1/incentives/{contract}`
     */
    getIncentive: setInstance(Evmos.getIncentive),
    /**
     * GET `/evmos/incentives/v1/params`
     */
    getIncentivesParams: setInstance(Evmos.getIncentivesParams),
    /**
     * GET `/evmos/inflation/v1/circulating_supply`
     */
    getCirculatingSupply: setInstance(Evmos.getCirculatingSupply),
    /**
     * GET `/evmos/inflation/v1/epoch_mint_provision`
     */
    getEpochMintProvision: setInstance(Evmos.getEpochMintProvision),
    /**
     * GET `/evmos/inflation/v1/inflation_rate`
     */
    getInflationRate: setInstance(Evmos.getInflationRate),
    /**
     * GET `/evmos/inflation/v1/params`
     */
    getInflationParams: setInstance(Evmos.getInflationParams),
    /**
     * GET `/evmos/inflation/v1/period`
     */
    getInflationPeriod: setInstance(Evmos.getInflationPeriod),
    /**
     * GET `/evmos/inflation/v1/skipped_epochs`
     */
    getSkippedEpochs: setInstance(Evmos.getSkippedEpochs),
    /**
     * GET `/evmos/vesting/v1/balances/{address}`
     */
    getVestingBalances: setInstance(Evmos.getVestingBalances),
    /**
     * GET `/evmos/recovery/v1/params`
     */
    getRecoveryParams: setInstance(Evmos.getRecoveryParams),
  };
};
