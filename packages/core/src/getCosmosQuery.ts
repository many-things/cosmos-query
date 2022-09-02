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
  };
};
