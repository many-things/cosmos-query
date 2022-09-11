import * as Staking from "./apis/staking";
import * as Cosmos from "./apis/cosmos";

export const getCosmosQuery = (baseURL: string | undefined) => {
  const setBase = <T>(callback: (url: string) => T) => {
    return callback(baseURL ?? "");
  };

  return {
    /**
     * Submit delegation
     *
     * POST `​/staking​/delegators​/{delegatorAddr}​/delegations`
     */
    submitDelegation: setBase(Staking.submitDelegation),
    /**
     * Submit an unbonding delegation
     *
     * POST `​/staking​/delegators​/{delegatorAddr}​/unbonding_delegations`
     */
    submitUnbondingDelegation: setBase(Staking.submitUnbondingDelegation),
    /**
     * GetLatestBlock returns the latest block.
     *
     * GET `/cosmos/base/tendermint/v1beta1/blocks/latest`
     */
    getLatestBlock: setBase(Cosmos.getLatestBlock),
    /**
     * GetBlockByHeight queries block for given height.
     *
     * GET `/cosmos/base/tendermint/v1beta1/blocks/{height}`
     */
    getBlockByHeight: setBase(Cosmos.getBlockByHeight),
    /**
     * GetNodeInfo queries the current node info.
     *
     * GET `/cosmos/base/tendermint/v1beta1/node_info`
     */
    getNodeInfo: setBase(Cosmos.getNodeInfo),
    /**
     * GetSyncing queries node syncing.
     *
     * `/cosmos/base/tendermint/v1beta1/syncing`
     */
    getSyncing: setBase(Cosmos.getSyncing),
    /**
     * GetLatestValidatorSet queries latest validator-set.
     *
     * GET `/cosmos/base/tendermint/v1beta1/validatorsets/latest`
     */
    getLatestValidatorSet: setBase(Cosmos.getLatestValidatorSet),
    /**
     * GetValidatorSetByHeight queries validator-set at a given height.
     *
     * GET `/cosmos​/base​/tendermint​/v1beta1​/validatorsets​/{height}`
     */
    getValidatorSetByHeight: setBase(Cosmos.getValidatorSetByHeight),
    /**
     * SimulateTx simulates executing a transaction for estimating gas usage.
     *
     * POST `/cosmos/tx/v1beta1/simulate`
     */
    simulateTx: setBase(Cosmos.simulateTx),
    /**
     * GetTxsEvent fetches txs by event.
     *
     * GET `/cosmos/tx/v1beta1/txs`
     */
    getTxsEvent: setBase(Cosmos.getTxsEvent),
    /**
     * BroadcastTx broadcast transaction.
     *
     * POST `/cosmos​/tx​/v1beta1​/txs`
     */
    broadcastTx: setBase(Cosmos.broadcastTx),
    /**
     * GetTxByHash fetches a tx by hash.
     *
     * GET `/cosmos/tx/v1beta1/txs/{hash}`
     */
    getTxByHash: setBase(Cosmos.getTxByHash),
    /**
     * Accounts returns all the existing accounts.
     *
     * GET `/cosmos/auth/v1beta1/accounts`
     */
    getAccounts: setBase(Cosmos.getAccounts),
    /**
     * Account returns account details based on address.
     *
     * GET `/cosmos/auth/v1beta1/accounts/{address}`
     */
    getAccountByAddress: setBase(Cosmos.getAccountByAddress),
    /**
     * Params queries all parameters.
     *
     * GET `/cosmos​/auth​/v1beta1​/params`
     */
    getAuthParams: setBase(Cosmos.getAuthParams),
    /**
     * AllBalances queries the balance of all coins for a single account.
     *
     * GET `​/cosmos​/bank​/v1beta1​/balances​/{address}`
     */
    getAllBalances: setBase(Cosmos.getAllBalances),
    /**
     * Balance queries the balance of a single coin for a single account.
     *
     * GET `/cosmos/bank/v1beta1/balances/{address}/{denom}`
     */
    getBalance: setBase(Cosmos.getBalance),
    /**
     * DenomOwners queries for all account addresses that own a particular token denomination.
     *
     * GET `/cosmos/bank/v1beta1/denom_owners/{denom}`
     */
    getDenomOwners: setBase(Cosmos.getDenomOwners),
    /**
     * DenomsMetadata queries the client metadata for all registered coin denominations.
     *
     * GET `/cosmos/bank/v1beta1/denoms_metadata`
     */
    getAllDenomsMetadata: setBase(Cosmos.getAllDenomsMetadata),
    /**
     * DenomsMetadata queries the client metadata of a given coin denomination.
     *
     * GET `/cosmos/bank/v1beta1/denoms_metadata/{denom}`
     */
    getDenomMetadata: setBase(Cosmos.getDenomMetadata),
    /**
     * Params queries the parameters of x/bank module.
     *
     * GET `/cosmos/bank/v1beta1/params`
     */
    getBankParams: setBase(Cosmos.getBankParams),
    /**
     * TotalSupply queries the total supply of all coins.
     *
     * GET `/cosmos/bank/v1beta1/supply`
     */
    getTotalSupply: setBase(Cosmos.getTotalSupply),
    /**
     * SupplyOf queries the supply of a single coin.
     *
     * GET `/cosmos/bank/v1beta1/supply/{denom}`
     */
    getSupply: setBase(Cosmos.getSupply),
    /**
     * CommunityPool queries the community pool coins.
     *
     * GET `/cosmos​/distribution​/v1beta1​/community_pool`
     */
    getCommunityPool: setBase(Cosmos.getCommunityPool),
    /**
     * DelegationTotalRewards queries the total rewards accrued by a each validator.
     *
     * GET `/cosmos/distribution/v1beta1/delegators/{delegator_address}/rewards`
     */
    getDelegationTotalRewards: setBase(Cosmos.getDelegationTotalRewards),
    /**
     * DelegationRewards queries the total rewards accrued by a delegation.
     *
     * GET `/cosmos/distribution/v1beta1/delegators/{delegator_address}/rewards/{validator_address}`
     */
    getDelegationRewards: setBase(Cosmos.getDelegationRewards),
    /**
     * DelegatorValidators queries the validators of a delegator.
     *
     * GET `/cosmos​/distribution​/v1beta1​/delegators​/{delegator_address}​/validators`
     */
    getDelegatorValidatorAddresses: setBase(
      Cosmos.getDelegatorValidatorAddresses
    ),
    /**
     * DelegatorWithdrawAddress queries withdraw address of a delegator.
     *
     * GET `/cosmos/distribution/v1beta1/delegators/{delegator_address}/withdraw_address`
     */
    getDelegatorWithdrawAddress: setBase(Cosmos.getDelegatorWithdrawAddress),
    /**
     * Params queries params of the distribution module.
     *
     * GET `/cosmos/distribution/v1beta1/params`
     */
    getDistributionParams: setBase(Cosmos.getDistributionParams),
    /**
     * ValidatorCommission queries accumulated commission for a validator.
     *
     * GET `/cosmos/distribution/v1beta1/validators/{validator_address}/commission`
     */
    getValidatorCommission: setBase(Cosmos.getValidatorCommission),
    /**
     * ValidatorOutstandingRewards queries rewards of a validator address.
     *
     * GET `/cosmos​/distribution​/v1beta1​/validators​/{validator_address}​/outstanding_rewards`
     */
    getValidatorOutstandingRewards: setBase(
      Cosmos.getValidatorOutstandingRewards
    ),
    /**
     * ValidatorSlashes queries slash events of a validator.
     *
     * GET `/cosmos/distribution/v1beta1/validators/{validator_address}/slashes`
     */
    getValidatorSlashes: setBase(Cosmos.getValidatorSlashes),
    /**
     * AllEvidence queries all evidence.
     *
     * GET `/cosmos/evidence/v1beta1/evidence`
     */
    getAllEvidence: setBase(Cosmos.getAllEvidence),
    /**
     * Evidence queries evidence based on evidence hash.
     *
     * GET `/cosmos/evidence/v1beta1/evidence/{evidence_hash}`
     */
    getEvidence: setBase(Cosmos.getEvidence),
    /**
     * Params queries all parameters of the gov module.
     *
     * GET `​/cosmos​/gov​/v1beta1​/params​/{params_type}`
     */
    getGovParams: setBase(Cosmos.getGovParams),
    /**
     * Proposals queries all proposals based on given status.
     *
     * GET `/cosmos/gov/v1beta1/proposals`
     */
    getProposals: setBase(Cosmos.getProposals),
    /**
     * Proposal queries proposal details based on ProposalID.
     *
     * GET `/cosmos/gov/v1beta1/proposals/{proposal_id}`
     */
    getProposal: setBase(Cosmos.getProposal),
    /**
     * Deposits queries all deposits of a single proposal.
     *
     * GET `/cosmos/gov/v1beta1/proposals/{proposal_id}/deposits`
     */
    getProposalDeposits: setBase(Cosmos.getProposalDeposits),
    /**
     * Deposit queries single deposit information based proposalID, depositAddr.
     *
     * GET `/cosmos/gov/v1beta1/proposals/{proposal_id}/deposits/{depositor}`
     */
    getProposalDeposit: setBase(Cosmos.getProposalDeposit),
    /**
     * TallyResult queries the tally of a proposal vote.
     *
     * GET `/cosmos/gov/v1beta1/proposals/{proposal_id}/tally`
     */
    getProposalTally: setBase(Cosmos.getProposalTally),
    /**
     * Votes queries votes of a given proposal.
     *
     * GET `/cosmos​/gov​/v1beta1​/proposals​/{proposal_id}​/votes`
     */
    getProposalVotes: setBase(Cosmos.getProposalVotes),
    /**
     * Vote queries voted information based on proposalID, voterAddr.
     *
     * GET `/cosmos​/gov​/v1beta1​/proposals​/{proposal_id}​/votes​/{voter}`
     */
    getProposalVote: setBase(Cosmos.getProposalVote),
    /**
     * AnnualProvisions current minting annual provisions value.
     *
     * GET `/cosmos​/mint​/v1beta1​/annual_provisions`
     */
    getAnnualProvisions: setBase(Cosmos.getAnnualProvisions),
    /**
     * Inflation returns the current minting inflation value.
     *
     * GET `/cosmos/mint/v1beta1/inflation`
     */
    getInflation: setBase(Cosmos.getInflation),
    /**
     * Params returns the total set of minting parameters.
     *
     * GET `/cosmos/mint/v1beta1/params`
     */
    getMintingParams: setBase(Cosmos.getMintingParams),
    /**
     * Params queries a specific parameter of a module, given its subspace and key.
     *
     * GET `/cosmos/params/v1beta1/params`
     */
    getParams: setBase(Cosmos.getParams),
    /**
     * Params queries the parameters of slashing module.
     *
     * GET `/cosmos/slashing/v1beta1/params`
     */
    getSlashingParams: setBase(Cosmos.getSlashingParams),
    /**
     * SigningInfos queries signing info of all validators
     *
     * GET `/cosmos/slashing/v1beta1/signing_infos`
     */
    getSigningInfos: setBase(Cosmos.getSigningInfos),
    /**
     * SigningInfo queries the signing info of given cons address
     *
     * GET `/cosmos/slashing/v1beta1/signing_infos/{cons_address}`
     */
    getSigningInfo: setBase(Cosmos.getSigningInfo),
    /**
     * DelegatorDelegations queries all delegations of a given delegator address.
     *
     * GET `/cosmos/staking/v1beta1/delegations/{delegator_addr}`
     */
    getDelegatorDelegations: setBase(Cosmos.getDelegatorDelegations),
    /**
     * Redelegations queries redelegations of given address.
     *
     * GET `/cosmos/staking/v1beta1/delegators/{delegator_addr}/redelegations`
     */
    getDelegatorRedelegations: setBase(Cosmos.getDelegatorRedelegations),
    /**
     * DelegatorUnbondingDelegations queries all unbonding delegations of a given delegator address.
     *
     * GET `/cosmos​/staking​/v1beta1​/delegators​/{delegator_addr}​/unbonding_delegations`
     */
    getDelegatorUnbondingDelegations: setBase(
      Cosmos.getDelegatorUnbondingDelegations
    ),
    /**
     * DelegatorValidators queries all validators info for given delegator address.
     *
     * GET `/cosmos/staking/v1beta1/delegators/{delegator_addr}/validators`
     */
    getDelegatorValidators: setBase(Cosmos.getDelegatorValidators),
    /**
     * DelegatorValidator queries validator info for given delegator validator pair.
     *
     * GET `​/cosmos​/staking​/v1beta1​/delegators​/{delegator_addr}​/validators​/{validator_addr}`
     */
    getDelegatorValidator: setBase(Cosmos.getDelegatorValidator),
    /**
     * HistoricalInfo queries the historical info for given height.
     *
     * GET `/cosmos/staking/v1beta1/historical_info/{height}`
     */
    getHistoricalInfo: setBase(Cosmos.getHistoricalInfo),
    /**
     * Params queries the staking parameters.
     *
     * GET `/cosmos/staking/v1beta1/params`
     */
    getStakingParams: setBase(Cosmos.getStakingParams),
    /**
     * Pool queries the pool info.
     *
     * GET `/cosmos/staking/v1beta1/pool`
     */
    getPool: setBase(Cosmos.getPool),
    /**
     * Validators queries all validators that match the given status.
     *
     * GET `/cosmos/staking/v1beta1/validators`
     */
    getValidators: setBase(Cosmos.getValidators),
    /**
     * Validator queries validator info for given validator address.
     *
     * GET `/cosmos/staking/v1beta1/validators/{validator_addr}`
     */
    getValidator: setBase(Cosmos.getValidator),
    /**
     * ValidatorDelegations queries delegate info for given validator.
     *
     * GET `/cosmos/staking/v1beta1/validators/{validator_addr}/delegations`
     */
    getValidatorDelegations: setBase(Cosmos.getValidatorDelegations),
    /**
     * Delegation queries delegate info for given validator delegator pair.
     *
     * GET `/cosmos/staking/v1beta1/validators/{validator_addr}/delegations/{delegator_addr}`
     */
    getValidatorDelegation: setBase(Cosmos.getValidatorDelegation),
    /**
     * ValidatorUnbondingDelegations queries unbonding delegations of a validator.
     *
     * GET `/cosmos/staking/v1beta1/validators/{validator_addr}/unbonding_delegations`
     */
    getValidatorUnbondingDelegations: setBase(
      Cosmos.getValidatorUnbondingDelegations
    ),
    /**
     * UnbondingDelegation queries unbonding info for given validator delegator pair.
     *
     * GET `/cosmos/staking/v1beta1/validators/{validator_addr}/delegations/{delegator_addr}/unbonding_delegation`
     */
    getValidatorUnbondingDelegation: setBase(
      Cosmos.getValidatorUnbondingDelegation
    ),
    /**
     * AppliedPlan queries a previously applied upgrade plan by its name.
     *
     * GET `/cosmos/upgrade/v1beta1/applied_plan/{name}`
     */
    getAppliedPlan: setBase(Cosmos.getAppliedPlan),
    /**
     * CurrentPlan queries the current upgrade plan.
     *
     * GET `/cosmos/upgrade/v1beta1/current_plan`
     */
    getCurrentPlan: setBase(Cosmos.getCurrentPlan),
    /**
     * ModuleVersions queries the list of module versions from state.
     *
     * GET `/cosmos/upgrade/v1beta1/module_versions`
     */
    getModuleVersions: setBase(Cosmos.getModuleVersions),
    /**
     * UpgradedConsensusState queries the consensus state that will serve as a trusted kernel for the next version of this chain. It will only be stored at the last height of this chain. UpgradedConsensusState RPC not supported with legacy querier.
     *
     * GET `/cosmos/upgrade/v1beta1/upgraded_consensus_state/{last_height}`
     */
    getUpgradedConsensusState: setBase(Cosmos.getUpgradedConsensusState),
    /**
     * Returns list of `Authorization`, granted to the grantee by the granter.
     *
     * GET `/cosmos/authz/v1beta1/grants`
     */
    getGrants: setBase(Cosmos.getGrants),
    /**
     * Allowances returns all the grants for address.
     *
     * GET `/cosmos/feegrant/v1beta1/allowances/{grantee}`
     */
    getAllowances: setBase(Cosmos.getAllowances),
    /**
     * Allowance returns fee granted to the grantee by the granter.
     *
     * GET `/cosmos/feegrant/v1beta1/allowance/{granter}/{grantee}`
     */
    getAllowance: setBase(Cosmos.getAllowance),
  };
};
