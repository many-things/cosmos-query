import * as Staking from "./apis/staking";
import * as Cosmos from "./apis/cosmos";

export const getCosmosQuery = (baseURL: string) => {
  const setBase = <T>(curry: (url: string) => T) => {
    return curry(baseURL);
  };

  return {
    /**
     * Submit delegation
     * @REST POST `​/staking​/delegators​/{delegatorAddr}​/delegations`
     */
    submitDelegation: setBase(Staking.submitDelegation),
    /**
     * Submit an unbonding delegation
     * @REST POST `​/staking​/delegators​/{delegatorAddr}​/unbonding_delegations`
     */
    submitUnbondingDelegation: setBase(Staking.submitUnbondingDelegation),
    /**
     * GetLatestBlock returns the latest block.
     * @REST GET `/cosmos/base/tendermint/v1beta1/blocks/latest`
     */
    getLatestBlock: setBase(Cosmos.Base.getLatestBlock),
    /**
     * GetBlockByHeight queries block for given height.
     * @REST GET `/cosmos/base/tendermint/v1beta1/blocks/{height}`
     */
    getBlockByHeight: setBase(Cosmos.Base.getBlockByHeight),
    /**
     * GetNodeInfo queries the current node info.
     * @REST GET `/cosmos/base/tendermint/v1beta1/node_info`
     */
    getNodeInfo: setBase(Cosmos.Base.getNodeInfo),
    /**
     * GetSyncing queries node syncing.
     * @REST `/cosmos/base/tendermint/v1beta1/syncing`
     */
    getSyncing: setBase(Cosmos.Base.getSyncing),
    /**
     * GetLatestValidatorSet queries latest validator-set.
     * @REST GET `/cosmos/base/tendermint/v1beta1/validatorsets/latest`
     */
    getLatestValidatorSet: setBase(Cosmos.Base.getLatestValidatorSet),
    /**
     * GetValidatorSetByHeight queries validator-set at a given height.
     * @REST GET `/cosmos​/base​/tendermint​/v1beta1​/validatorsets​/{height}`
     */
    getValidatorSetByHeight: setBase(Cosmos.Base.getValidatorSetByHeight),
    /**
     * SimulateTx simulates executing a transaction for estimating gas usage.
     * @REST POST `/cosmos/tx/v1beta1/simulate`
     */
    simulateTx: setBase(Cosmos.Tx.simulateTx),
    /**
     * GetTxsEvent fetches txs by event.
     * @REST GET `/cosmos/tx/v1beta1/txs`
     */
    getTxsEvent: setBase(Cosmos.Tx.getTxsEvent),
    /**
     * BroadcastTx broadcast transaction.
     * @REST POST `/cosmos​/tx​/v1beta1​/txs`
     */
    broadcastTx: setBase(Cosmos.Tx.broadcastTx),
    /**
     * GetTxByHash fetches a tx by hash.
     * @REST GET `/cosmos/tx/v1beta1/txs/{hash}`
     */
    getTxByHash: setBase(Cosmos.Tx.getTxByHash),
    /**
     * Accounts returns all the existing accounts.
     * @REST GET `/cosmos/auth/v1beta1/accounts`
     */
    getAccounts: setBase(Cosmos.Auth.getAccounts),
    /**
     * Account returns account details based on address.
     * @REST GET `/cosmos/auth/v1beta1/accounts/{address}`
     */
    getAccountByAddress: setBase(Cosmos.Auth.getAccountByAddress),
    /**
     * Params queries all parameters.
     * @REST GET `/cosmos​/auth​/v1beta1​/params`
     */
    getAuthParams: setBase(Cosmos.Auth.getAuthParams),
    /**
     * AllBalances queries the balance of all coins for a single account.
     * @REST GET `​/cosmos​/bank​/v1beta1​/balances​/{address}`
     */
    getAllBalances: setBase(Cosmos.Bank.getAllBalances),
    /**
     * Balance queries the balance of a single coin for a single account.
     * @REST GET `/cosmos/bank/v1beta1/balances/{address}/{denom}`
     */
    getBalance: setBase(Cosmos.Bank.getBalance),
    /**
     * DenomOwners queries for all account addresses that own a particular token denomination.
     * @REST GET `/cosmos/bank/v1beta1/denom_owners/{denom}`
     */
    getDenomOwners: setBase(Cosmos.Bank.getDenomOwners),
    /**
     * DenomsMetadata queries the client metadata for all registered coin denominations.
     * @REST GET `/cosmos/bank/v1beta1/denoms_metadata`
     */
    getAllDenomsMetadata: setBase(Cosmos.Bank.getAllDenomsMetadata),
    /**
     * DenomsMetadata queries the client metadata of a given coin denomination.
     * @REST GET `/cosmos/bank/v1beta1/denoms_metadata/{denom}`
     */
    getDenomMetadata: setBase(Cosmos.Bank.getDenomMetadata),
    /**
     * Params queries the parameters of x/bank module.
     * @REST GET `/cosmos/bank/v1beta1/params`
     */
    getBankParams: setBase(Cosmos.Bank.getBankParams),
    /**
     * TotalSupply queries the total supply of all coins.
     * @REST GET `/cosmos/bank/v1beta1/supply`
     */
    getTotalSupply: setBase(Cosmos.Bank.getTotalSupply),
    /**
     * SupplyOf queries the supply of a single coin.
     * @REST GET `/cosmos/bank/v1beta1/supply/{denom}`
     */
    getSupply: setBase(Cosmos.Bank.getSupply),
    /**
     * CommunityPool queries the community pool coins.
     * @REST GET `/cosmos​/distribution​/v1beta1​/community_pool`
     */
    getCommunityPool: setBase(Cosmos.Distribution.getCommunityPool),
    /**
     * DelegationTotalRewards queries the total rewards accrued by a each validator.
     * @REST GET `/cosmos/distribution/v1beta1/delegators/{delegator_address}/rewards`
     */
    getDelegationTotalRewards: setBase(
      Cosmos.Distribution.getDelegationTotalRewards
    ),
    /**
     * DelegationRewards queries the total rewards accrued by a delegation.
     * @REST GET `/cosmos/distribution/v1beta1/delegators/{delegator_address}/rewards/{validator_address}`
     */
    getDelegationRewards: setBase(Cosmos.Distribution.getDelegationRewards),
    /**
     * DelegatorValidators queries the validators of a delegator.
     * @REST GET `/cosmos​/distribution​/v1beta1​/delegators​/{delegator_address}​/validators`
     */
    getDelegatorValidators: setBase(Cosmos.Distribution.getDelegatorValidators),
    /**
     * DelegatorWithdrawAddress queries withdraw address of a delegator.
     * @REST GET `/cosmos/distribution/v1beta1/delegators/{delegator_address}/withdraw_address`
     */
    getDelegatorWithdrawAddress: setBase(
      Cosmos.Distribution.getDelegatorWithdrawAddress
    ),
    /**
     * Params queries params of the distribution module.
     * @REST GET `/cosmos/distribution/v1beta1/params`
     */
    getDistributionParams: setBase(Cosmos.Distribution.getDistributionParams),
    /**
     * ValidatorCommission queries accumulated commission for a validator.
     * @REST GET `/cosmos/distribution/v1beta1/validators/{validator_address}/commission`
     */
    getValidatorCommission: setBase(Cosmos.Distribution.getValidatorCommission),
    /**
     * ValidatorOutstandingRewards queries rewards of a validator address.
     * @REST GET `/cosmos​/distribution​/v1beta1​/validators​/{validator_address}​/outstanding_rewards`
     */
    getValidatorOutstandingRewards: setBase(
      Cosmos.Distribution.getValidatorOutstandingRewards
    ),
    /**
     * ValidatorSlashes queries slash events of a validator.
     * @REST GET `/cosmos/distribution/v1beta1/validators/{validator_address}/slashes`
     */
    getValidatorSlashes: setBase(Cosmos.Distribution.getValidatorSlashes),
    /**
     * AllEvidence queries all evidence.
     * @REST GET `/cosmos/evidence/v1beta1/evidence`
     */
    getAllEvidence: setBase(Cosmos.Evidence.getAllEvidence),
    /**
     * Evidence queries evidence based on evidence hash.
     * @REST GET `/cosmos/evidence/v1beta1/evidence/{evidence_hash}`
     */
    getEvidence: setBase(Cosmos.Evidence.getEvidence),
    /**
     * Params queries all parameters of the gov module.
     * @REST GET `​/cosmos​/gov​/v1beta1​/params​/{params_type}`
     */
    getGovParams: setBase(Cosmos.Governance.getGovParams),
    /**
     * Proposals queries all proposals based on given status.
     * @REST GET `/cosmos/gov/v1beta1/proposals`
     */
    getProposals: setBase(Cosmos.Governance.getProposals),
    /**
     * Proposal queries proposal details based on ProposalID.
     * @REST GET `/cosmos/gov/v1beta1/proposals/{proposal_id}`
     */
    getProposal: setBase(Cosmos.Governance.getProposal),
    /**
     * Deposits queries all deposits of a single proposal.
     * @REST GET `/cosmos/gov/v1beta1/proposals/{proposal_id}/deposits`
     */
    getProposalDeposits: setBase(Cosmos.Governance.getProposalDeposits),
    /**
     * Deposit queries single deposit information based proposalID, depositAddr.
     * @REST GET `/cosmos/gov/v1beta1/proposals/{proposal_id}/deposits/{depositor}`
     */
    getProposalDeposit: setBase(Cosmos.Governance.getProposalDeposit),
    /**
     * TallyResult queries the tally of a proposal vote.
     * @REST GET `/cosmos/gov/v1beta1/proposals/{proposal_id}/tally`
     */
    getProposalTally: setBase(Cosmos.Governance.getProposalTally),
    /**
     * Votes queries votes of a given proposal.
     * @REST GET `/cosmos​/gov​/v1beta1​/proposals​/{proposal_id}​/votes`
     */
    getProposalVotes: setBase(Cosmos.Governance.getProposalVotes),
    /**
     * Vote queries voted information based on proposalID, voterAddr.
     * @REST GET `/cosmos​/gov​/v1beta1​/proposals​/{proposal_id}​/votes​/{voter}`
     */
    getProposalVote: setBase(Cosmos.Governance.getProposalVote),
    /**
     * AnnualProvisions current minting annual provisions value.
     * @REST GET `/cosmos​/mint​/v1beta1​/annual_provisions`
     */
    getAnnualProvisions: setBase(Cosmos.Mint.getAnnualProvisions),
    /**
     * Inflation returns the current minting inflation value.
     * @REST GET `/cosmos/mint/v1beta1/inflation`
     */
    getInflation: setBase(Cosmos.Mint.getInflation),
    /**
     * Params returns the total set of minting parameters.
     * @REST GET `/cosmos/mint/v1beta1/params`
     */
    getMintingParams: setBase(Cosmos.Mint.getMintingParams),
    /**
     * Params queries a specific parameter of a module, given its subspace and key.
     * @REST GET `/cosmos/params/v1beta1/params`
     */
    getParams: setBase(Cosmos.Params.getParams),
    /**
     * Params queries the parameters of slashing module.
     * @REST GET `/cosmos/slashing/v1beta1/params`
     */
    getSlashingParams: setBase(Cosmos.Slashing.getSlashingParams),
    /**
     * SigningInfos queries signing info of all validators
     * @REST GET `/cosmos/slashing/v1beta1/signing_infos`
     */
    getSigningInfos: setBase(Cosmos.Slashing.getSigningInfos),
    /**
     * SigningInfo queries the signing info of given cons address
     * @REST GET `/cosmos/slashing/v1beta1/signing_infos/{cons_address}`
     */
    getSigningInfo: setBase(Cosmos.Slashing.getSigningInfo),
    /**
     *
     * @REST GET ``
     */

    /**
     * AppliedPlan queries a previously applied upgrade plan by its name.
     * @REST GET `/cosmos/upgrade/v1beta1/applied_plan/{name}`
     */
    get: setBase(Cosmos.Upgrade.getAppliedPlan),
    /**
     * CurrentPlan queries the current upgrade plan.
     * @REST GET `/cosmos/upgrade/v1beta1/current_plan`
     */
    getCurrentPlan: setBase(Cosmos.Upgrade.getCurrentPlan),
    /**
     * ModuleVersions queries the list of module versions from state.
     * @REST GET `/cosmos/upgrade/v1beta1/module_versions`
     */
    getModuleVersions: setBase(Cosmos.Upgrade.getModuleVersions),
    /**
     * UpgradedConsensusState queries the consensus state that will serve as a trusted kernel for the next version of this chain. It will only be stored at the last height of this chain. UpgradedConsensusState RPC not supported with legacy querier.
     * @REST GET `/cosmos/upgrade/v1beta1/upgraded_consensus_state/{last_height}`
     */
    getUpgradedConsensusState: setBase(
      Cosmos.Upgrade.getUpgradedConsensusState
    ),
    /**
     * Returns list of `Authorization`, granted to the grantee by the granter.
     * @REST GET `/cosmos/authz/v1beta1/grants`
     */
    getGrants: setBase(Cosmos.Authz.getGrants),
    /**
     * Allowances returns all the grants for address.
     * @REST GET `/cosmos/feegrant/v1beta1/allowances/{grantee}`
     */
    getAllowances: setBase(Cosmos.FeeGrant.getAllowances),
    /**
     * Allowance returns fee granted to the grantee by the granter.
     * @REST GET `/cosmos/feegrant/v1beta1/allowance/{granter}/{grantee}`
     */
    getAllowance: setBase(Cosmos.FeeGrant.getAllowance),
  };
};
