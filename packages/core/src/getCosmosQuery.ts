import * as Gaia from "./apis/gaia";
import * as Tendermint from "./apis/tendermint";
import * as Transactions from "./apis/transactions";
import * as Staking from "./apis/staking";

export const getCosmosQuery = (baseURL: string) => {
  const setBase = <T>(curry: (url: string) => T) => {
    return curry(baseURL);
  };

  return {
    /**
     * The properties of the connected node
     * @REST GET `/node_info`
     */
    getNodeInfo: setBase(Gaia.getNodeInfo),
    /**
     * Syncing state of node
     * @REST GET `/syncing`
     */
    getSyncing: setBase(Tendermint.getSyncing),
    /**
     * Get the latest block
     * @REST GET `/blocks/latest`
     */
    getLatestBlock: setBase(Tendermint.getLatestBlock),
    /**
     * Get a block at a certain height
     * @REST GET `/blocks/{height}`
     */
    getBlocks: setBase(Tendermint.getBlocks),
    /**
     * Get the latest validator set
     * @REST GET `/validatorsets/latest`
     */
    getLatestValidatorSets: setBase(Tendermint.getLatestValidatorSets),
    /**
     * Get the latest validator set
     * @REST GET `/validatorsets/{height}`
     */
    getValidatorSets: setBase(Tendermint.getValidatorSets),
    /**
     * Broadcast a signed tx
     * @REST POST `/txs`
     */
    postTxs: setBase(Transactions.postTxs),
    /**
     * Submit delegation
     * @REST POST `​/staking​/delegators​/{delegatorAddr}​/delegations`
     */
    postDelegations: setBase(Staking.postDelegations),
    /**
     * Submit an unbonding delegation
     * @REST POST `​/staking​/delegators​/{delegatorAddr}​/unbonding_delegations`
     */
    postUnbondingDelegations: setBase(Staking.postUnbondingDelegations),
  };
};
