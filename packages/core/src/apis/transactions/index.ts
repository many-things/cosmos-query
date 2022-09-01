import { instance } from "../../utils";
import type { TxBroadcast, TxsResponse } from "./types";

export type { TxBroadcast, TxsResponse };

export const postTxs =
  (baseURL: string) =>
  async (txBroadcast: TxBroadcast): Promise<TxsResponse> => {
    return (
      await instance(baseURL).post("/txs", {
        txBroadcast,
      })
    ).data;
  };
