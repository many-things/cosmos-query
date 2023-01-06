import { AxiosInstance } from "axios";
import type { PaginationParams } from "../../../types";
import type { AllEvidenceResponse, EvidenceResponse } from "./types";

export type { AllEvidenceResponse, EvidenceResponse };

export const getAllEvidence =
  (instance: AxiosInstance) =>
  async ({
    pagination,
  }: {
    pagination?: PaginationParams;
  }): Promise<AllEvidenceResponse> => {
    return (
      await instance.get("/cosmos/evidence/v1beta1/evidence", {
        params: { pagination },
      })
    ).data;
  };

export const getEvidence =
  (instance: AxiosInstance) =>
  async ({
    evidenceHash,
  }: {
    evidenceHash: string;
  }): Promise<EvidenceResponse> => {
    return (
      await instance.get(`/cosmos/evidence/v1beta1/evidence/${evidenceHash}`)
    ).data;
  };
