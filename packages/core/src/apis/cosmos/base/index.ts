import { AxiosInstance } from "axios";
import type { PaginationParams } from "../../../types";
import type {
  BlockResponse,
  NodeInfoResponse,
  SyncingResponse,
  ValidatorSetResponse,
} from "./types";

export type {
  BlockResponse,
  NodeInfoResponse,
  SyncingResponse,
  ValidatorSetResponse,
};

export const getLatestBlock =
  (instance: AxiosInstance) => async (): Promise<BlockResponse> => {
    return (
      await instance.get(
        "/cosmos/base/tendermint/v1beta1/blocks/latest"
      )
    ).data;
  };

export const getBlockByHeight =
  (instance: AxiosInstance) =>
  async ({ height }: { height: number }): Promise<BlockResponse> => {
    return (
      await instance.get(
        `/cosmos/base/tendermint/v1beta1/blocks/${height.toString()}`
      )
    ).data;
  };

export const getNodeInfo =
  (instance: AxiosInstance) => async (): Promise<NodeInfoResponse> => {
    return (
      await instance.get("/cosmos/base/tendermint/v1beta1/node_info")
    ).data;
  };

export const getSyncing =
  (instance: AxiosInstance) => async (): Promise<SyncingResponse> => {
    return (
      await instance.get("/cosmos/base/tendermint/v1beta1/syncing")
    ).data;
  };

export const getLatestValidatorSet =
  (instance: AxiosInstance) =>
  async ({
    pagination,
  }: {
    pagination?: PaginationParams;
  }): Promise<ValidatorSetResponse> => {
    return (
      await instance.get(
        "/cosmos/base/tendermint/v1beta1/validatorsets/latest",
        { params: { pagination } }
      )
    ).data;
  };

export const getValidatorSetByHeight =
  (instance: AxiosInstance) =>
  async ({
    height,
    pagination,
  }: {
    height: number;
    pagination?: PaginationParams;
  }): Promise<ValidatorSetResponse> => {
    return (
      await instance.get(
        `/cosmos/base/tendermint/v1beta1/validatorsets/${height}`,
        { params: { pagination } }
      )
    ).data;
  };
