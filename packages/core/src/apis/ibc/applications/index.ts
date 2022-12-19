import { instance } from "../../../common";
import type { PaginationParams } from "../../../types";
import type {
  DenomTraceResponse,
  DenomTracesResponse,
  TransferParamsResponse,
} from "./types";

export type { DenomTraceResponse, DenomTracesResponse, TransferParamsResponse };

export const getDenomTraces =
  (baseURL: string, isIBCGo = false) =>
  async ({
    pagination,
  }: {
    pagination?: PaginationParams;
  }): Promise<DenomTracesResponse> => {
    return (
      await instance(baseURL).get(
        isIBCGo
          ? "/ibc/apps/transfer/v1/denom_traces"
          : "/ibc/applications/transfer/v1beta1/denom_traces",
        {
          params: { pagination },
        }
      )
    ).data;
  };

export const getDenomTrace =
  (baseURL: string, isIBCGo = false) =>
  async ({
    hash,
  }: {
    hash: string;
    isIBCGo?: boolean;
  }): Promise<DenomTraceResponse> => {
    return (
      await instance(baseURL).get(
        isIBCGo
          ? `/ibc/apps/transfer/v1/denom_traces/${hash}`
          : `/ibc/applications/transfer/v1beta1/denom_traces/${hash}`
      )
    ).data;
  };

export const getTransferParams =
  (baseURL: string, isIBCGo = false) =>
  async (): Promise<TransferParamsResponse> => {
    return (
      await instance(baseURL).get(
        isIBCGo
          ? "/ibc/apps/transfer/v1/params"
          : "/ibc/applications/transfer/v1beta1/params"
      )
    ).data;
  };
