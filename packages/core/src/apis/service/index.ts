import { instance } from "../../utils";
import type {
  BlockResponse,
  BroadcastTx,
  BroadcastTxResponse,
  NodeInfoResponse,
  OrderBy,
  PaginationParams,
  SimulateTx,
  SimulateTxResponse,
  SyncingResponse,
  TxByHashResponse,
  TxsEventResponse,
  ValidatorSetResponse,
} from "./types";

export type {
  BlockResponse,
  BroadcastTx,
  BroadcastTxResponse,
  NodeInfoResponse,
  OrderBy,
  PaginationParams,
  SimulateTx,
  SimulateTxResponse,
  SyncingResponse,
  TxByHashResponse,
  TxsEventResponse,
  ValidatorSetResponse,
};

export const getLatestBlock =
  (baseURL: string) => async (): Promise<BlockResponse> => {
    return (
      await instance(baseURL).get(
        "/cosmos/base/tendermint/v1beta1/blocks/latest"
      )
    ).data;
  };

export const getBlockByHeight =
  (baseURL: string) =>
  async (height: number): Promise<BlockResponse> => {
    return (
      await instance(baseURL).get(
        `​/cosmos​/base​/tendermint​/v1beta1​/blocks​/${height.toString()}`
      )
    ).data;
  };

export const getNodeInfo =
  (baseURL: string) => async (): Promise<NodeInfoResponse> => {
    return (
      await instance(baseURL).get("/cosmos/base/tendermint/v1beta1/node_info")
    ).data;
  };

export const getSyncing =
  (baseURL: string) => async (): Promise<SyncingResponse> => {
    return (
      await instance(baseURL).get("/cosmos/base/tendermint/v1beta1/syncing")
    ).data;
  };

export const getLatestValidatorSet =
  (baseURL: string) =>
  async (pagination?: PaginationParams): Promise<ValidatorSetResponse> => {
    return (
      await instance(baseURL).get(
        "​/cosmos​/base​/tendermint​/v1beta1​/validatorsets​/latest",
        { params: pagination }
      )
    ).data;
  };

export const getValidatorSetByHeight =
  (baseURL: string) =>
  async (
    height: number,
    pagination?: PaginationParams
  ): Promise<ValidatorSetResponse> => {
    return (
      await instance(baseURL).get(
        `/cosmos/base/tendermint/v1beta1/validatorsets/${height}`,
        { params: pagination }
      )
    ).data;
  };

export const simulateTx =
  (baseURL: string) =>
  async (body: SimulateTx): Promise<SimulateTxResponse> => {
    return (
      await instance(baseURL).post("/cosmos/tx/v1beta1/simulate", {
        body,
      })
    ).data;
  };

export const getTxsEvent =
  (baseURL: string) =>
  async (
    events?: string[],
    pagination?: PaginationParams,
    order_by?: OrderBy
  ): Promise<TxsEventResponse> => {
    return (
      await instance(baseURL).get("/cosmos/tx/v1beta1/txs", {
        params: { events, pagination, order_by },
      })
    ).data;
  };

export const broadcastTx =
  (baseURL: string) =>
  async (body: BroadcastTx): Promise<BroadcastTxResponse> => {
    return (
      await instance(baseURL).post("/cosmos/tx/v1beta1/txs", {
        body,
      })
    ).data;
  };

export const getTxByHash =
  (baseURL: string) =>
  async (hash: string): Promise<TxByHashResponse> => {
    return (await instance(baseURL).get(`/cosmos/tx/v1beta1/txs/${hash}`)).data;
  };
