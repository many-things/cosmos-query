import { AxiosInstance } from "axios";
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
  (instance: AxiosInstance, isIBCGo = false) =>
  async ({
    pagination,
  }: {
    pagination?: PaginationParams;
  }): Promise<ClientStatesResponse> => {
    return (
      await instance.get(
        isIBCGo
          ? "/ibc/core/client/v1/client_states"
          : "/ibc/core/client/v1beta1/client_states",
        {
          params: { pagination },
        }
      )
    ).data;
  };

export const getClientState =
  (instance: AxiosInstance, isIBCGo = false) =>
  async ({ clientId }: { clientId: string }): Promise<ClientStateResponse> => {
    return (
      await instance.get(
        isIBCGo
          ? `/ibc/core/client/v1/client_states/${clientId}`
          : `/ibc/core/client/v1beta1/client_states/${clientId}`
      )
    ).data;
  };

export const getConsensusStates =
  (instance: AxiosInstance, isIBCGo = false) =>
  async ({
    clientId,
    pagination,
  }: {
    clientId: string;
    pagination?: PaginationParams;
  }): Promise<ConsensusStatesResponse> => {
    return (
      await instance.get(
        isIBCGo
          ? `/ibc/core/client/v1/consensus_states/${clientId}`
          : `/ibc/core/client/v1beta1/consensus_states/${clientId}`,
        {
          params: { pagination },
        }
      )
    ).data;
  };

export const getConsensusState =
  (instance: AxiosInstance, isIBCGo = false) =>
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
      await instance.get(
        isIBCGo
          ? `/ibc/core/client/v1/consensus_states/${clientId}/revision/${revisionNumber}/height/${revisionHeight}`
          : `/ibc/core/client/v1beta1/consensus_states/${clientId}/revision/${revisionNumber}/height/${revisionHeight}`,
        {
          params: { latestHeight },
        }
      )
    ).data;
  };
