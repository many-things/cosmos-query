import { AxiosInstance } from "axios";
import type { PaginationParams } from "../../../types";
import type { CurrentEpochResponse, EpochsResponse } from "./types";

export type { CurrentEpochResponse, EpochsResponse };

export const getCurrentEpoch =
  (instance: AxiosInstance) =>
  async ({
    identifier,
  }: {
    identifier?: string;
  }): Promise<CurrentEpochResponse> => {
    return (
      await instance.get("/evmos/epochs/v1/current_epoch", {
        params: {
          identifier,
        },
      })
    ).data;
  };

export const getEpochs =
  (instance: AxiosInstance) =>
  async ({
    pagination,
  }: {
    pagination?: PaginationParams;
  }): Promise<EpochsResponse> => {
    return (
      await instance.get("/evmos/epochs/v1/epochs", {
        params: {
          pagination,
        },
      })
    ).data;
  };
