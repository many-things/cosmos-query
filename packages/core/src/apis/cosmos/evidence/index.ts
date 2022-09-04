import { instance } from "../../../utils";
import type { PaginationParams } from "../base";
import type { AllEvidenceResponse, EvidenceResponse } from "./types";

export type { AllEvidenceResponse, EvidenceResponse };

export const getAllEvidence =
  (baseURL: string) =>
  async ({
    pagination,
  }: {
    pagination?: PaginationParams;
  }): Promise<AllEvidenceResponse> => {
    return (
      await instance(baseURL).get("/cosmos/evidence/v1beta1/evidence", {
        params: { pagination },
      })
    ).data;
  };

export const getEvidence =
  (baseURL: string) =>
  async ({
    evidenceHash,
  }: {
    evidenceHash: string;
  }): Promise<EvidenceResponse> => {
    return (
      await instance(baseURL).get(
        `/cosmos/evidence/v1beta1/evidence/${evidenceHash}`
      )
    ).data;
  };
