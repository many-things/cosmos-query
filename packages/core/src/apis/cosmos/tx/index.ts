import { AxiosInstance } from "axios";
import type { PaginationParams } from "../../../types";
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
  (instance: AxiosInstance) =>
  async ({ body }: { body: SimulateTx }): Promise<SimulateTxResponse> => {
    return (await instance.post("/cosmos/tx/v1beta1/simulate", body))
      .data;
  };

export const getTxsEvent =
  (instance: AxiosInstance) =>
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
      await instance.get("/cosmos/tx/v1beta1/txs", {
        params: { events, pagination, order_by: orderBy },
      })
    ).data;
  };

export const broadcastTx =
  (instance: AxiosInstance) =>
  async ({ body }: { body: BroadcastTx }): Promise<BroadcastTxResponse> => {
    return (
      await instance.post("/cosmos/tx/v1beta1/txs", {
        body,
      })
    ).data;
  };

export const getTxByHash =
  (instance: AxiosInstance) =>
  async ({ hash }: { hash: string }): Promise<TxByHashResponse> => {
    return (await instance.get(`/cosmos/tx/v1beta1/txs/${hash}`)).data;
  };
