import { AxiosInstance } from "axios";
import * as Osmosis from "./apis/osmosis";

export const getOsmosisQuery = (instance: AxiosInstance) => {
  const setInstance = <T>(callback: (instance: AxiosInstance) => T) => {
    return callback(instance);
  };

  return {
    /**
     * GET `/osmosis/gamm/v1beta1/num_pools`
     */
    getNumPools: setInstance(Osmosis.getNumPools),
    /**
     * GET `/osmosis/gamm/v1beta1/pools`
     */
    getPools: setInstance(Osmosis.getPools),
    /**
     * GET /osmosis/gamm/v1beta1/pools/{poolId}``
     */
    getPool: setInstance(Osmosis.getPool),
    /**
     * GET `/osmosis/gamm/v1beta1/pools/{poolId}/params`
     */
    getPoolParams: setInstance(Osmosis.getPoolParams),
    /**
     * GET `/osmosis/gamm/v1beta1/pools/{poolId}/prices`
     */
    getPoolPrice: setInstance(Osmosis.getPoolPrice),
    /**
     * GET `/osmosis/gamm/v1beta1/pools/{poolId}/tokens`
     */
    getPoolTokens: setInstance(Osmosis.getPoolTokens),
    /**
     * GET `/osmosis/gamm/v1beta1/pools/{poolId}/total_share`
     */
    getPoolTotalShare: setInstance(Osmosis.getPoolTotalShare),
    /**
     * GET `/osmosis/gamm/v1beta1/total_liquidity`
     */
    getTotalLiquidity: setInstance(Osmosis.getTotalLiquidity),
    /**
     * GET `/osmosis/gamm/v1beta1/{poolId}/estimate/swap_exact_amount_in`
     */
    getSwapExactAmountIn: setInstance(Osmosis.getSwapExactAmountIn),
    /**
     * GET `/osmosis/gamm/v1beta1/{poolId}/estimate/swap_exact_amount_out`
     */
    getSwapExactAmountOut: setInstance(Osmosis.getSwapExactAmountOut),
    /**
     * GET `/osmosis/epochs/v1beta1/current_epoch`
     */
    getCurrentEpoch: setInstance(Osmosis.getCurrentEpoch),
    /**
     * GET `/osmosis/epochs/v1beta1/epochs`
     */
    getEpochs: setInstance(Osmosis.getEpochs),
    /**
     * GET `/osmosis/pool-incentives/v1beta1/distr_info`
     */
    getDistrInfo: setInstance(Osmosis.getDistrInfo),
    /**
     * GET `/osmosis/pool-incentives/v1beta1/gauge-ids/{pool_id}`
     */
    getGaugeIds: setInstance(Osmosis.getGaugeIds),
    /**
     * GET `/osmosis/pool-incentives/v1beta1/incentivized_pools`
     */
    getIncentivizedPools: setInstance(Osmosis.getIncentivizedPools),
    /**
     * GET `/osmosis/pool-incentives/v1beta1/lockable_durations`
     */
    getLockableDurations: setInstance(Osmosis.getLockableDurations),
    /**
     * GET `/osmosis/pool-incentives/v1beta1/params`
     */
    getPoolIncentivesParams: setInstance(Osmosis.getPoolIncentivesParams),
    /**
     * GET `/osmosis/lockup/v1beta1/account_locked_coins/{owner}`
     */
    getAccountLockedCoins: setInstance(Osmosis.getAccountLockedCoins),
    /**
     * GET `/osmosis/lockup/v1beta1/account_locked_longer_duration/{owner}`
     */
    getAccountLockedLongerDuration: setInstance(
      Osmosis.getAccountLockedLongerDuration
    ),
    /**
     * GET `/osmosis/lockup/v1beta1/account_locked_longer_duration_denom/{owner}`
     */
    getAccountLockedLongerDurationDenom: setInstance(
      Osmosis.getAccountLockedLongerDurationDenom
    ),
    /**
     * GET `/osmosis/lockup/v1beta1/account_locked_longer_duration_not_unlocking_only/{owner}`
     */
    getAccountLockedLongerDurationNotUnlockingOnly: setInstance(
      Osmosis.getAccountLockedLongerDurationNotUnlockingOnly
    ),
    /**
     * GET `/osmosis/lockup/v1beta1/account_locked_pasttime/{owner}`
     */
    getAccountLockedPastTime: setInstance(Osmosis.getAccountLockedPastTime),
    /**
     * GET `/osmosis/lockup/v1beta1/account_locked_pasttime_denom/{owner}`
     */
    getAccountLockedPastTimeDenom: setInstance(
      Osmosis.getAccountLockedPastTimeDenom
    ),
    /**
     * GET `/osmosis/lockup/v1beta1/account_locked_pasttime_not_unlocking_only/{owner}`
     */
    getAccountLockedPastTimeNotUnlockingOnly: setInstance(
      Osmosis.getAccountLockedPastTimeNotUnlockingOnly
    ),
    /**
     * GET `/osmosis/lockup/v1beta1/account_unlockable_coins/{owner}`
     */
    getAccountUnlockableCoins: setInstance(Osmosis.getAccountUnlockableCoins),
    /**
     * GET `/osmosis/lockup/v1beta1/account_unlocked_before_time/{owner}`
     */
    getAccountUnlockedBeforeTime: setInstance(Osmosis.getAccountUnlockedBeforeTime),
    /**
     * GET `/osmosis/lockup/v1beta1/account_unlocking_coins/{owner}`
     */
    getAccountUnlockingCoins: setInstance(Osmosis.getAccountUnlockingCoins),
    /**
     * GET `/osmosis/lockup/v1beta1/locked_by_id/{lock_id}`
     */
    getLockedById: setInstance(Osmosis.getLockedById),
    /**
     * GET `/osmosis/lockup/v1beta1/locked_by_id/{lock_id}`
     */
    getModuleBalance: setInstance(Osmosis.getModuleBalance),
    /**
     * GET `/osmosis/lockup/v1beta1/module_locked_amount`
     */
    getModuleLockedAmount: setInstance(Osmosis.getModuleLockedAmount),
    /**
     * GET `/osmosis/incentives/v1beta1/active_gauges`
     */
    getActiveGauges: setInstance(Osmosis.getActiveGauges),
    /**
     * GET `/osmosis/incentives/v1beta1/gauge_by_id/{id}`
     */
    getGaugeById: setInstance(Osmosis.getGaugeById),
    /**
     * GET `/osmosis/incentives/v1beta1/gauges`
     */
    getGauges: setInstance(Osmosis.getGauges),
    /**
     * GET `/osmosis/incentives/v1beta1/module_distributed_coins`
     */
    getModuleDistributedCoins: setInstance(Osmosis.getModuleDistributedCoins),
    /**
     * GET `/osmosis/incentives/v1beta1/module_to_distribute_coins`
     */
    getModuleToDistributeCoins: setInstance(Osmosis.getModuleToDistributeCoins),
    /**
     * GET `/osmosis/incentives/v1beta1/rewards_est/{owner}`
     */
    getRewardsEst: setInstance(Osmosis.getRewardsEst),
    /**
     * GET `/osmosis/incentives/v1beta1/upcoming_gauges`
     */
    getUpcomingGauges: setInstance(Osmosis.getUpcomingGauges),
    /**
     * GET `/osmosis/claim/v1beta1/claim_record/{address}`
     */
    getClaimRecord: setInstance(Osmosis.getClaimRecord),
    /**
     * GET `/osmosis/claim/v1beta1/claimable_for_action/{address}/{action}`
     */
    getClaimableForAction: setInstance(Osmosis.getClaimableForAction),
    /**
     * GET `/osmosis/claim/v1beta1/module_account_balance`
     */
    getModuleAccountBalance: setInstance(Osmosis.getModuleAccountBalance),
    /**
     * GET `/osmosis/claim/v1beta1/params`
     */
    getClaimParams: setInstance(Osmosis.getClaimParams),
    /**
     * GET `/osmosis/claim/v1beta1/total_claimable/{address}`
     */
    getTotalClaimable: setInstance(Osmosis.getTotalClaimable),
    /**
     * GET `/osmosis/mint/v1beta1/epoch_provisions`
     */
    getEpochProvisions: setInstance(Osmosis.getEpochProvisions),
    /**
     * GET `/osmosis/mint/v1beta1/params`
     */
    getMintingParams: setInstance(Osmosis.getMintingParams),
    /**
     * GET `/osmosis/superfluid/v1beta1/superfluid_delegations/${owner}`
     */
    getSuperfluidDelegation: setInstance(Osmosis.getSuperfluidDelegation),
    /**
     * GET `osmosis/superfluid/v1beta1/all_assets`
     */
    getSuperfluidAllAssets: setInstance(Osmosis.getSuperfluidAllAssets),
  };
};
