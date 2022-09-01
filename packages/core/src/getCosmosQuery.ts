import * as Staking from "./apis/staking";
import * as Service from "./apis/service";

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
    getLatestBlock: setBase(Service.getLatestBlock),
    /**
     * GetBlockByHeight queries block for given height.
     * @REST GET `/cosmos/base/tendermint/v1beta1/blocks/{height}`
     */
    getBlockByHeight: setBase(Service.getBlockByHeight),
    /**
     * GetNodeInfo queries the current node info.
     * @REST GET `/cosmos/base/tendermint/v1beta1/node_info`
     */
    getNodeInfo: setBase(Service.getNodeInfo),
    /**
     * GetSyncing queries node syncing.
     * @REST `/cosmos/base/tendermint/v1beta1/syncing`
     */
    getSyncing: setBase(Service.getSyncing),
    /**
     * GetLatestValidatorSet queries latest validator-set.
     * @REST GET `/cosmos/base/tendermint/v1beta1/validatorsets/latest`
     */
    getLatestValidatorSet: setBase(Service.getLatestValidatorSet),
    /**
     * GetValidatorSetByHeight queries validator-set at a given height.
     * @REST GET `/cosmos​/base​/tendermint​/v1beta1​/validatorsets​/{height}`
     */
    getValidatorSetByHeight: setBase(Service.getValidatorSetByHeight),
    /**
     * SimulateTx simulates executing a transaction for estimating gas usage.
     * @REST POST `/cosmos/tx/v1beta1/simulate`
     */
    simulateTx: setBase(Service.simulateTx),
    /**
     * GetTxsEvent fetches txs by event.
     * @REST GET `/cosmos/tx/v1beta1/txs`
     */
    getTxsEvent: setBase(Service.getTxsEvent),
    /**
     * BroadcastTx broadcast transaction.
     * @REST POST `/cosmos​/tx​/v1beta1​/txs`
     */
    broadcastTx: setBase(Service.broadcastTx),
    /**
     * GetTxByHash fetches a tx by hash.
     * @REST GET `/cosmos/tx/v1beta1/txs/{hash}`
     */
    getTxByHash: setBase(Service.getTxByHash),
  };
};
