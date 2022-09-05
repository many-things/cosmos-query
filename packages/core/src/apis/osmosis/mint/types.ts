export interface EpochProvisionsResponse {
  epoch_provisions: string;
}

export interface OsmosisMintingParamsResponse {
  params: {
    mint_denom: string;
    genesis_epoch_provisions: string;
    epoch_identifier: string;
    reduction_period_in_epochs: string;
    reduction_factor: string;
    distribution_proportions: {
      staking: string;
      pool_incentives: string;
      developer_rewards: string;
      community_pool: string;
    };
    developer_rewards_receiver: string;
    minting_rewards_distribution_start_epoch: string;
  };
}
