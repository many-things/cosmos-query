import { osmosisInstance } from "../../../common";
import type {
  AllIbcResponse,
  IbcDestinationResponse,
  IbcInfoResponse,
  IbcRawResponse,
  IbcSourceDestinationResponse,
  IbcSourceResponse,
} from "./types";

export type {
  AllIbcResponse,
  IbcDestinationResponse,
  IbcInfoResponse,
  IbcRawResponse,
  IbcSourceDestinationResponse,
  IbcSourceResponse,
};

export const getIbcInfo = async (): Promise<IbcInfoResponse> => {
  return (await osmosisInstance.get("/ibc/v1/info")).data;
};

export const getAllIbc = async ({
  dex,
}: {
  dex?: string;
}): Promise<AllIbcResponse> => {
  return (await osmosisInstance.get("/ibc/v1/all", { params: { dex } })).data;
};

export const getIbcSourceDestination = async ({
  source,
  destination,
  minutes_trigger,
}: {
  source: string;
  destination: string;
  minutes_trigger: number;
}): Promise<IbcSourceDestinationResponse> => {
  return (
    await osmosisInstance.get(
      `/ibc/v1/source/${source}/destination${destination}`,
      {
        params: { minutes_trigger },
      }
    )
  ).data;
};

export const getIbcSource = async ({
  source,
  minutes_trigger,
}: {
  source: string;
  minutes_trigger: number;
}): Promise<IbcSourceResponse> => {
  return (
    await osmosisInstance.get(`/ibc/v1/source/${source}`, {
      params: { minutes_trigger },
    })
  ).data;
};

export const getIbcDestination = async ({
  destination,
  minutes_trigger,
}: {
  destination: string;
  minutes_trigger: number;
}): Promise<IbcDestinationResponse> => {
  return (
    await osmosisInstance.get(`/ibc/v1/destination/${destination}`, {
      params: { minutes_trigger },
    })
  ).data;
};

export const getIbcRaw = async (): Promise<IbcRawResponse> => {
  return (await osmosisInstance.get("/ibc/v1/raw")).data;
};
