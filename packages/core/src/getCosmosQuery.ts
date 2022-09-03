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
    getLatestBlock: setBase(Cosmos.getLatestBlock),
    /**
     * GetBlockByHeight queries block for given height.
     * @REST GET `/cosmos/base/tendermint/v1beta1/blocks/{height}`
     */
    getBlockByHeight: setBase(Cosmos.getBlockByHeight),
    /**
     * GetNodeInfo queries the current node info.
     * @REST GET `/cosmos/base/tendermint/v1beta1/node_info`
     */
    getNodeInfo: setBase(Cosmos.getNodeInfo),
    /**
     * GetSyncing queries node syncing.
     * @REST `/cosmos/base/tendermint/v1beta1/syncing`
     */
    getSyncing: setBase(Cosmos.getSyncing),
    /**
     * GetLatestValidatorSet queries latest validator-set.
     * @REST GET `/cosmos/base/tendermint/v1beta1/validatorsets/latest`
     */
    getLatestValidatorSet: setBase(Cosmos.getLatestValidatorSet),
    /**
     * GetValidatorSetByHeight queries validator-set at a given height.
     * @REST GET `/cosmos​/base​/tendermint​/v1beta1​/validatorsets​/{height}`
     */
    getValidatorSetByHeight: setBase(Cosmos.getValidatorSetByHeight),
    /**
     * SimulateTx simulates executing a transaction for estimating gas usage.
     * @REST POST `/cosmos/tx/v1beta1/simulate`
     */
    simulateTx: setBase(Cosmos.simulateTx),
    /**
     * GetTxsEvent fetches txs by event.
     * @REST GET `/cosmos/tx/v1beta1/txs`
     */
    getTxsEvent: setBase(Cosmos.getTxsEvent),
    /**
     * BroadcastTx broadcast transaction.
     * @REST POST `/cosmos​/tx​/v1beta1​/txs`
     */
    broadcastTx: setBase(Cosmos.broadcastTx),
    /**
     * GetTxByHash fetches a tx by hash.
     * @REST GET `/cosmos/tx/v1beta1/txs/{hash}`
     */
    getTxByHash: setBase(Cosmos.getTxByHash),
    /**
     * Accounts returns all the existing accounts.
     * @REST GET `/cosmos/auth/v1beta1/accounts`
     */
    getAccounts: setBase(Cosmos.getAccounts),
    /**
     * Account returns account details based on address.
     * @REST GET `/cosmos/auth/v1beta1/accounts/{address}`
     */
    getAccountByAddress: setBase(Cosmos.getAccountByAddress),
    /**
     * Params queries all parameters.
     * @REST GET `/cosmos​/auth​/v1beta1​/params`
     */
    getAuthParams: setBase(Cosmos.getAuthParams),
    /**
     * AllBalances queries the balance of all coins for a single account.
     * @REST GET `​/cosmos​/bank​/v1beta1​/balances​/{address}`
     */
    getAllBalances: setBase(Cosmos.getAllBalances),
    /**
     * Balance queries the balance of a single coin for a single account.
     * @REST GET `/cosmos/bank/v1beta1/balances/{address}/{denom}`
     */
    getBalance: setBase(Cosmos.getBalance),
    /**
     * DenomOwners queries for all account addresses that own a particular token denomination.
     * @REST GET `/cosmos/bank/v1beta1/denom_owners/{denom}`
     */
    getDenomOwners: setBase(Cosmos.getDenomOwners),
    /**
     * DenomsMetadata queries the client metadata for all registered coin denominations.
     * @REST GET `/cosmos/bank/v1beta1/denoms_metadata`
     */
    getAllDenomsMetadata: setBase(Cosmos.getAllDenomsMetadata),
    /**
     * DenomsMetadata queries the client metadata of a given coin denomination.
     * @REST GET `/cosmos/bank/v1beta1/denoms_metadata/{denom}`
     */
    getDenomMetadata: setBase(Cosmos.getDenomMetadata),
    /**
     * Params queries the parameters of x/bank module.
     * @REST GET `/cosmos/bank/v1beta1/params`
     */
    getBankParams: setBase(Cosmos.getBankParams),
    /**
     * TotalSupply queries the total supply of all coins.
     * @REST GET `/cosmos/bank/v1beta1/supply`
     */
    getTotalSupply: setBase(Cosmos.getTotalSupply),
    /**
     * SupplyOf queries the supply of a single coin.
     * @REST GET `/cosmos/bank/v1beta1/supply/{denom}`
     */
    getSupply: setBase(Cosmos.getSupply),
    /**
     * CommunityPool queries the community pool coins.
     * @REST GET `/cosmos​/distribution​/v1beta1​/community_pool`
     */
    getCommunityPool: setBase(Cosmos.getCommunityPool),
    /**
     * DelegationTotalRewards queries the total rewards accrued by a each validator.
     * @REST GET `/cosmos/distribution/v1beta1/delegators/{delegator_address}/rewards`
     */
    getDelegationTotalRewards: setBase(Cosmos.getDelegationTotalRewards),
    /**
     * DelegationRewards queries the total rewards accrued by a delegation.
     * @REST GET `/cosmos/distribution/v1beta1/delegators/{delegator_address}/rewards/{validator_address}`
     */
    getDelegationRewards: setBase(Cosmos.getDelegationRewards),
    /**
     * DelegatorValidators queries the validators of a delegator.
     * @REST GET `/cosmos​/distribution​/v1beta1​/delegators​/{delegator_address}​/validators`
     */
    getDelegatorValidators: setBase(Cosmos.getDelegatorValidators),
    /**
     * DelegatorWithdrawAddress queries withdraw address of a delegator.
     * @REST GET `/cosmos/distribution/v1beta1/delegators/{delegator_address}/withdraw_address`
     */
    getDelegatorWithdrawAddress: setBase(Cosmos.getDelegatorWithdrawAddress),
    /**
     * Params queries params of the distribution module.
     * @REST GET `/cosmos/distribution/v1beta1/params`
     */
    getDistributionParams: setBase(Cosmos.getDistributionParams),
    /**
     * ValidatorCommission queries accumulated commission for a validator.
     * @REST GET `/cosmos/distribution/v1beta1/validators/{validator_address}/commission`
     */
    getValidatorCommission: setBase(Cosmos.getValidatorCommission),
    /**
     * ValidatorOutstandingRewards queries rewards of a validator address.
     * @REST GET `/cosmos​/distribution​/v1beta1​/validators​/{validator_address}​/outstanding_rewards`
     */
    getValidatorOutstandingRewards: setBase(
      Cosmos.getValidatorOutstandingRewards
    ),
    /**
     * ValidatorSlashes queries slash events of a validator.
     * @REST GET `/cosmos/distribution/v1beta1/validators/{validator_address}/slashes`
     */
    getValidatorSlashes: setBase(Cosmos.getValidatorSlashes),
    /**
     * AllEvidence queries all evidence.
     * @REST GET `/cosmos/evidence/v1beta1/evidence`
     */
    getAllEvidence: setBase(Cosmos.getAllEvidence),
    /**
     * Evidence queries evidence based on evidence hash.
     * @REST GET `/cosmos/evidence/v1beta1/evidence/{evidence_hash}`
     */
    getEvidence: setBase(Cosmos.getEvidence),
    /**
     * Params queries all parameters of the gov module.
     * @REST GET `​/cosmos​/gov​/v1beta1​/params​/{params_type}`
     */
    getGovParams: setBase(Cosmos.getGovParams),
    /**
     * Proposals queries all proposals based on given status.
     * @REST GET `/cosmos/gov/v1beta1/proposals`
     */
    getProposals: setBase(Cosmos.getProposals),
    /**
     * Proposal queries proposal details based on ProposalID.
     * @REST GET `/cosmos/gov/v1beta1/proposals/{proposal_id}`
     */
    getProposal: setBase(Cosmos.getProposal),
    /**
     * Deposits queries all deposits of a single proposal.
     * @REST GET `/cosmos/gov/v1beta1/proposals/{proposal_id}/deposits`
     */
    getProposalDeposits: setBase(Cosmos.getProposalDeposits),
    /**
     * Deposit queries single deposit information based proposalID, depositAddr.
     * @REST GET `/cosmos/gov/v1beta1/proposals/{proposal_id}/deposits/{depositor}`
     */
    getProposalDeposit: setBase(Cosmos.getProposalDeposit),
    /**
     * TallyResult queries the tally of a proposal vote.
     * @REST GET `/cosmos/gov/v1beta1/proposals/{proposal_id}/tally`
     */
    getProposalTally: setBase(Cosmos.getProposalTally),
    /**
     * Votes queries votes of a given proposal.
     * @REST GET `/cosmos​/gov​/v1beta1​/proposals​/{proposal_id}​/votes`
     */
    getProposalVotes: setBase(Cosmos.getProposalVotes),
    /**
     * Vote queries voted information based on proposalID, voterAddr.
     * @REST GET `/cosmos​/gov​/v1beta1​/proposals​/{proposal_id}​/votes​/{voter}`
     */
    getProposalVote: setBase(Cosmos.getProposalVote),
    /**
     * AnnualProvisions current minting annual provisions value.
     * @REST GET `/cosmos​/mint​/v1beta1​/annual_provisions`
     */
    getAnnualProvisions: setBase(Cosmos.getAnnualProvisions),
    /**
     * Inflation returns the current minting inflation value.
     * @REST GET `/cosmos/mint/v1beta1/inflation`
     */
    getInflation: setBase(Cosmos.getInflation),
    /**
     * Params returns the total set of minting parameters.
     * @REST GET `/cosmos/mint/v1beta1/params`
     */
    getMintingParams: setBase(Cosmos.getMintingParams),
    /**
     *
     * @REST GET ``
     */
  };
};
