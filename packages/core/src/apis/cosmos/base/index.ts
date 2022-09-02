import { instance } from "../../../utils";
import { PaginationParams } from "../../types";
import type {
  BlockResponse,
  NodeInfoResponse,
  SyncingResponse,
  ValidatorSetResponse,
} from "./types";

export type {
  BlockResponse,
  NodeInfoResponse,
  PaginationParams,
  SyncingResponse,
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
