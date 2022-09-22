import { instance } from "../../../utils";
import type { PaginationParams } from "../../cosmos";
import type {
  DenomTraceResponse,
  DenomTracesResponse,
  TransferParamsResponse,
} from "./types";

export type { DenomTraceResponse, DenomTracesResponse, TransferParamsResponse };

export const getDenomTraces =
  (baseURL: string) =>
  async ({
    pagination,
  }: {
    pagination?: PaginationParams;
  }): Promise<DenomTracesResponse> => {
    return (
      await instance(baseURL).get(
        "/ibc/applications/transfer/v1beta1/denom_traces",
        {
          params: { pagination },
        }
      )
    ).data;
  };

export const getDenomTrace =
  (baseURL: string) =>
  async ({ hash }: { hash: string }): Promise<DenomTraceResponse> => {
    return (
      await instance(baseURL).get(
        `/ibc/applications/transfer/v1beta1/denom_traces/${hash}`
      )
    ).data;
  };

export const getTransferParams =
  (baseURL: string) => async (): Promise<TransferParamsResponse> => {
    return (
      await instance(baseURL).get("/ibc/applications/transfer/v1beta1/params")
    ).data;
  };

export const getIBCGoDenomTraces =
  (baseURL: string) =>
  async ({
    pagination,
  }: {
    pagination?: PaginationParams;
  }): Promise<DenomTracesResponse> => {
    return (
      await instance(baseURL).get("/ibc/apps/transfer/v1/denom_traces", {
        params: { pagination },
      })
    ).data;
  };

export const getIBCGoDenomTrace =
  (baseURL: string) =>
  async ({ hash }: { hash: string }): Promise<DenomTraceResponse> => {
    return (
      await instance(baseURL).get(`/ibc/apps/transfer/v1/denom_traces/${hash}`)
    ).data;
  };
