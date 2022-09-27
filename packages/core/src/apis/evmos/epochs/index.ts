import { instance } from "../../../utils";
import type { PaginationParams } from "../../../types";
import type { CurrentEpochResponse, EpochsResponse } from "./types";

export type { CurrentEpochResponse, EpochsResponse };

export const getCurrentEpoch =
  (baseURL: string) =>
  async ({
    identifier,
  }: {
    identifier?: string;
  }): Promise<CurrentEpochResponse> => {
    return (
      await instance(baseURL).get("/evmos/epochs/v1/current_epoch", {
        params: {
          identifier,
        },
      })
    ).data;
  };

export const getEpochs =
  (baseURL: string) =>
  async ({
    pagination,
  }: {
    pagination?: PaginationParams;
  }): Promise<EpochsResponse> => {
    return (
      await instance(baseURL).get("/evmos/epochs/v1/epochs", {
        params: {
          pagination,
        },
      })
    ).data;
  };
