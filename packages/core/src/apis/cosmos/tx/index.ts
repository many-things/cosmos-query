import { instance } from "../../../utils";
import { PaginationParams } from "../../../types";
import type {
  BroadcastTx,
  BroadcastTxResponse,
  OrderBy,
  SimulateTx,
  SimulateTxResponse,
  TxByHashResponse,
  TxsEventResponse,
} from "./types";

export type {
  BroadcastTx,
  BroadcastTxResponse,
  OrderBy,
  SimulateTx,
  SimulateTxResponse,
  TxByHashResponse,
  TxsEventResponse,
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
  async ({
    events,
    orderBy,
    pagination,
  }: {
    events?: string[];
    pagination?: PaginationParams;
    orderBy?: OrderBy;
  }): Promise<TxsEventResponse> => {
    return (
      await instance(baseURL).get("/cosmos/tx/v1beta1/txs", {
        params: { events, pagination, order_by: orderBy },
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
