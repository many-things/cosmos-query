import { instance } from "../../../../utils";
import type { PaginationParams } from "../../../../types";
import type {
  ClientStateResponse,
  ClientStatesResponse,
  ConsensusStateResponse,
  ConsensusStatesResponse,
} from "./types";

export type {
  ClientStateResponse,
  ClientStatesResponse,
  ConsensusStateResponse,
  ConsensusStatesResponse,
};

export const getClientStates =
  (baseURL: string) =>
  async ({
    pagination,
  }: {
    pagination?: PaginationParams;
  }): Promise<ClientStatesResponse> => {
    return (
      await instance(baseURL).get("/ibc/core/client/v1beta1/client_states", {
        params: { pagination },
      })
    ).data;
  };

export const getClientState =
  (baseURL: string) =>
  async ({ clientId }: { clientId: string }): Promise<ClientStateResponse> => {
    return (
      await instance(baseURL).get(
        `/ibc/core/client/v1beta1/client_states/${clientId}`
      )
    ).data;
  };

export const getConsensusStates =
  (baseURL: string) =>
  async ({
    clientId,
    pagination,
  }: {
    clientId: string;
    pagination?: PaginationParams;
  }): Promise<ConsensusStatesResponse> => {
    return (
      await instance(baseURL).get(
        `/ibc/core/client/v1beta1/consensus_states/${clientId}`,
        {
          params: { pagination },
        }
      )
    ).data;
  };

export const getConsensusState =
  (baseURL: string) =>
  async ({
    clientId,
    revisionNumber,
    revisionHeight,
    latestHeight,
  }: {
    clientId: string;
    revisionNumber: string;
    revisionHeight: string;
    latestHeight?: boolean;
  }): Promise<ConsensusStateResponse> => {
    return (
      await instance(baseURL).get(
        `/ibc/core/client/v1beta1/consensus_states/${clientId}/revision/${revisionNumber}/height/${revisionHeight}`,
        {
          params: { latestHeight },
        }
      )
    ).data;
  };
