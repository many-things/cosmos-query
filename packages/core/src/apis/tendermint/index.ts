import { instance } from "../../utils";
import type {
  BlockResponse,
  SyncingResponse,
  ValidatorSetResponse,
} from "./types";

export type { BlockResponse, SyncingResponse, ValidatorSetResponse };

export const getSyncing =
  (baseURL: string) => async (): Promise<SyncingResponse> => {
    return (await instance(baseURL).get("/node_info")).data;
  };

export const getLatestBlock =
  (baseURL: string) => async (): Promise<BlockResponse> => {
    return (await instance(baseURL).get("/blocks/latest")).data;
  };

export const getBlocks =
  (baseURL: string) =>
  async (height: number): Promise<BlockResponse> => {
    return (await instance(baseURL).get(`/blocks/${height}`)).data;
  };

export const getLatestValidatorSets =
  (baseURL: string) => async (): Promise<BlockResponse> => {
    return (await instance(baseURL).get("/validatorsets/latest")).data;
  };

export const getValidatorSets =
  (baseURL: string) =>
  async (height: number): Promise<ValidatorSetResponse> => {
    return (await instance(baseURL).get(`/validatorsets/${height}`)).data;
  };
