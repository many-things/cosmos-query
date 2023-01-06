import { AxiosInstance } from "axios";
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

export const getIbcInfo =
  (instance: AxiosInstance) => async (): Promise<IbcInfoResponse> => {
    return (await instance.get("/ibc/v1/info")).data;
  };

export const getAllIbc =
  (instance: AxiosInstance) =>
  async ({ dex }: { dex?: string }): Promise<AllIbcResponse> => {
    return (await instance.get("/ibc/v1/all", { params: { dex } })).data;
  };

export const getIbcSourceDestination =
  (instance: AxiosInstance) =>
  async ({
    source,
    destination,
    minutes_trigger,
  }: {
    source: string;
    destination: string;
    minutes_trigger: number;
  }): Promise<IbcSourceDestinationResponse> => {
    return (
      await instance.get(`/ibc/v1/source/${source}/destination${destination}`, {
        params: { minutes_trigger },
      })
    ).data;
  };

export const getIbcSource =
  (instance: AxiosInstance) =>
  async ({
    source,
    minutes_trigger,
  }: {
    source: string;
    minutes_trigger: number;
  }): Promise<IbcSourceResponse> => {
    return (
      await instance.get(`/ibc/v1/source/${source}`, {
        params: { minutes_trigger },
      })
    ).data;
  };

export const getIbcDestination =
  (instance: AxiosInstance) =>
  async ({
    destination,
    minutes_trigger,
  }: {
    destination: string;
    minutes_trigger: number;
  }): Promise<IbcDestinationResponse> => {
    return (
      await instance.get(`/ibc/v1/destination/${destination}`, {
        params: { minutes_trigger },
      })
    ).data;
  };

export const getIbcRaw =
  (instance: AxiosInstance) => async (): Promise<IbcRawResponse> => {
    return (await instance.get("/ibc/v1/raw")).data;
  };
