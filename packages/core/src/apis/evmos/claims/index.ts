import { instance } from "../../../common";
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
  (baseURL: string) =>
  async ({
    pagination,
  }: {
    pagination?: PaginationParams;
  }): Promise<ClaimsRecordsResponse> => {
    return (
      await instance(baseURL).get("/evmos/claims/v1/claims_records", {
        params: { pagination },
      })
    ).data;
  };

export const getClaimsRecord =
  (baseURL: string) =>
  async ({ address }: { address: string }): Promise<ClaimsRecordResponse> => {
    return (
      await instance(baseURL).get(`/evmos/claims/v1/claims_records/${address}`)
    ).data;
  };

export const getClaimsParams =
  (baseURL: string) => async (): Promise<ClaimsParamsResponse> => {
    return (await instance(baseURL).get("/evmos/claims/v1/params")).data;
  };

export const getTotalUnclaimed =
  (baseURL: string) => async (): Promise<TotalUnclaimedResponse> => {
    return (await instance(baseURL).get("/evmos/claims/v1/total_unclaimed"))
      .data;
  };
