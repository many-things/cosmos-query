import * as Osmosis from "./apis/osmosis";

export const getOsmosisQuery = (baseURL: string | undefined) => {
  const setBase = <T>(callback: (url: string) => T) => {
    return callback(baseURL ?? "");
  };

  return {
    /**
     * GET `/osmosis/gamm/v1beta1/num_pools`
     */
    getNumPools: setBase(Osmosis.getNumPools),
    /**
     * GET `/osmosis/gamm/v1beta1/pools`
     */
    getPools: setBase(Osmosis.getPools),
    /**
     * GET /osmosis/gamm/v1beta1/pools/{poolId}``
     */
    getPool: setBase(Osmosis.getPool),
    /**
     * GET `/osmosis/gamm/v1beta1/pools/{poolId}/params`
     */
    getPoolParams: setBase(Osmosis.getPoolParams),
    /**
     * GET `/osmosis/gamm/v1beta1/pools/{poolId}/prices`
     */
    getPoolPrice: setBase(Osmosis.getPoolPrice),
    /**
     * GET `/osmosis/gamm/v1beta1/pools/{poolId}/tokens`
     */
    getPoolTokens: setBase(Osmosis.getPoolTokens),
    /**
     * GET `/osmosis/gamm/v1beta1/pools/{poolId}/total_share`
     */
    getPoolTotalShare: setBase(Osmosis.getPoolTotalShare),
    /**
     * GET `/osmosis/gamm/v1beta1/total_liquidity`
     */
    getTotalLiquidity: setBase(Osmosis.getTotalLiquidity),
    /**
     * GET `/osmosis/gamm/v1beta1/{poolId}/estimate/swap_exact_amount_in`
     */
    getSwapExactAmountIn: setBase(Osmosis.getSwapExactAmountIn),
    /**
     * GET `/osmosis/gamm/v1beta1/{poolId}/estimate/swap_exact_amount_out`
     */
    getSwapExactAmountOut: setBase(Osmosis.getSwapExactAmountOut),
    /**
     * GET `/osmosis/epochs/v1beta1/current_epoch`
     */
    getCurrentEpoch: setBase(Osmosis.getCurrentEpoch),
    /**
     * GET `/osmosis/epochs/v1beta1/epochs`
     */
    getEpochs: setBase(Osmosis.getEpochs),
    /**
     * GET `/osmosis/pool-incentives/v1beta1/distr_info`
     */
    getDistrInfo: setBase(Osmosis.getDistrInfo),
    /**
     * GET `/osmosis/pool-incentives/v1beta1/gauge-ids/{pool_id}`
     */
    getGaugeIds: setBase(Osmosis.getGaugeIds),
    /**
     * GET `/osmosis/pool-incentives/v1beta1/incentivized_pools`
     */
    getIncentivizedPools: setBase(Osmosis.getIncentivizedPools),
    /**
     * GET `/osmosis/pool-incentives/v1beta1/lockable_durations`
     */
    getLockableDurations: setBase(Osmosis.getLockableDurations),
    /**
     * GET `/osmosis/pool-incentives/v1beta1/params`
     */
    getPoolIncentivesParams: setBase(Osmosis.getPoolIncentivesParams),
    /**
     * GET `/osmosis/lockup/v1beta1/account_locked_coins/{owner}`
     */
    getAccountLockedCoins: setBase(Osmosis.getAccountLockedCoins),
    /**
     * GET `/osmosis/lockup/v1beta1/account_locked_longer_duration/{owner}`
     */
    getAccountLockedLongerDuration: setBase(
      Osmosis.getAccountLockedLongerDuration
    ),
    /**
     * GET `/osmosis/lockup/v1beta1/account_locked_longer_duration_denom/{owner}`
     */
    getAccountLockedLongerDurationDenom: setBase(
      Osmosis.getAccountLockedLongerDurationDenom
    ),
    /**
     * GET `/osmosis/lockup/v1beta1/account_locked_longer_duration_not_unlocking_only/{owner}`
     */
    getAccountLockedLongerDurationNotUnlockingOnly: setBase(
      Osmosis.getAccountLockedLongerDurationNotUnlockingOnly
    ),
    /**
     * GET `/osmosis/lockup/v1beta1/account_locked_pasttime/{owner}`
     */
    getAccountLockedPastTime: setBase(Osmosis.getAccountLockedPastTime),
    /**
     * GET `/osmosis/lockup/v1beta1/account_locked_pasttime_denom/{owner}`
     */
    getAccountLockedPastTimeDenom: setBase(
      Osmosis.getAccountLockedPastTimeDenom
    ),
    /**
     * GET `/osmosis/lockup/v1beta1/account_locked_pasttime_not_unlocking_only/{owner}`
     */
    getAccountLockedPastTimeNotUnlockingOnly: setBase(
      Osmosis.getAccountLockedPastTimeNotUnlockingOnly
    ),
    /**
     * GET `/osmosis/lockup/v1beta1/account_unlockable_coins/{owner}`
     */
    getAccountUnlockableCoins: setBase(Osmosis.getAccountUnlockableCoins),
    /**
     * GET `/osmosis/lockup/v1beta1/account_unlocked_before_time/{owner}`
     */
    getAccountUnlockedBeforeTime: setBase(Osmosis.getAccountUnlockedBeforeTime),
    /**
     * GET `/osmosis/lockup/v1beta1/account_unlocking_coins/{owner}`
     */
    getAccountUnlockingCoins: setBase(Osmosis.getAccountUnlockingCoins),
    /**
     * GET `/osmosis/lockup/v1beta1/locked_by_id/{lock_id}`
     */
    getLockedById: setBase(Osmosis.getLockedById),
    /**
     * GET `/osmosis/lockup/v1beta1/locked_by_id/{lock_id}`
     */
    getModuleBalance: setBase(Osmosis.getModuleBalance),
    /**
     * GET `/osmosis/lockup/v1beta1/module_locked_amount`
     */
    getModuleLockedAmount: setBase(Osmosis.getModuleLockedAmount),
    /**
     * GET `/osmosis/incentives/v1beta1/active_gauges`
     */
    getActiveGauges: setBase(Osmosis.getActiveGauges),
    /**
     * GET `/osmosis/incentives/v1beta1/gauge_by_id/{id}`
     */
    getGaugeById: setBase(Osmosis.getGaugeById),
    /**
     * GET `/osmosis/incentives/v1beta1/gauges`
     */
    getGauges: setBase(Osmosis.getGauges),
    /**
     * GET `/osmosis/incentives/v1beta1/module_distributed_coins`
     */
    getModuleDistributedCoins: setBase(Osmosis.getModuleDistributedCoins),
    /**
     * GET `/osmosis/incentives/v1beta1/module_to_distribute_coins`
     */
    getModuleToDistributeCoins: setBase(Osmosis.getModuleToDistributeCoins),
    /**
     * GET `/osmosis/incentives/v1beta1/rewards_est/{owner}`
     */
    getRewardsEst: setBase(Osmosis.getRewardsEst),
    /**
     * GET `/osmosis/incentives/v1beta1/upcoming_gauges`
     */
    getUpcomingGauges: setBase(Osmosis.getUpcomingGauges),
    /**
     * GET `/osmosis/claim/v1beta1/claim_record/{address}`
     */
    getClaimRecord: setBase(Osmosis.getClaimRecord),
    /**
     * GET `/osmosis/claim/v1beta1/claimable_for_action/{address}/{action}`
     */
    getClaimableForAction: setBase(Osmosis.getClaimableForAction),
    /**
     * GET `/osmosis/claim/v1beta1/module_account_balance`
     */
    getModuleAccountBalance: setBase(Osmosis.getModuleAccountBalance),
    /**
     * GET `/osmosis/claim/v1beta1/params`
     */
    getClaimParams: setBase(Osmosis.getClaimParams),
    /**
     * GET `/osmosis/claim/v1beta1/total_claimable/{address}`
     */
    getTotalClaimable: setBase(Osmosis.getTotalClaimable),
    /**
     * GET `/osmosis/mint/v1beta1/epoch_provisions`
     */
    getEpochProvisions: setBase(Osmosis.getEpochProvisions),
    /**
     * GET `/osmosis/mint/v1beta1/params`
     */
    getMintingParams: setBase(Osmosis.getMintingParams),
    /**
     * GET `/osmosis/superfluid/v1beta1/superfluid_delegations/${owner}`
     */
    getSuperfluidDelegation: setBase(Osmosis.getSuperfluidDelegation),
    /**
     * GET `osmosis/superfluid/v1beta1/all_assets`
     */
    getSuperfluidAllAssets: setBase(Osmosis.getSuperfluidAllAssets),
  };
};
