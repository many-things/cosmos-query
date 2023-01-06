import { AxiosInstance } from "axios";
import type { PaginationParams } from "../../../types";
import type {
  ClaimsParamsResponse,
  ClaimsRecordResponse,
  ClaimsRecordsResponse,
  TotalUnclaimedResponse,
} from "./types";

export type {
  ClaimsParamsResponse,
  ClaimsRecordResponse,
  ClaimsRecordsResponse,
  TotalUnclaimedResponse,
};

export const getClaimsRecords =
  (instance: AxiosInstance) =>
  async ({
    pagination,
  }: {
    pagination?: PaginationParams;
  }): Promise<ClaimsRecordsResponse> => {
    return (
      await instance.get("/evmos/claims/v1/claims_records", {
        params: { pagination },
      })
    ).data;
  };

export const getClaimsRecord =
  (instance: AxiosInstance) =>
  async ({ address }: { address: string }): Promise<ClaimsRecordResponse> => {
    return (
      await instance.get(`/evmos/claims/v1/claims_records/${address}`)
    ).data;
  };

export const getClaimsParams =
  (instance: AxiosInstance) => async (): Promise<ClaimsParamsResponse> => {
    return (await instance.get("/evmos/claims/v1/params")).data;
  };

export const getTotalUnclaimed =
  (instance: AxiosInstance) => async (): Promise<TotalUnclaimedResponse> => {
    return (await instance.get("/evmos/claims/v1/total_unclaimed"))
      .data;
  };
