import { instance } from "../../../../common";
import type { PaginationParams } from "../../../../types";

export const getClientConnections =
  (baseURL: string, isIBCGo = false) =>
  async ({ clientId }: { clientId: string }): Promise<any> => {
    return (
      await instance(baseURL).get(
        isIBCGo
          ? `/ibc/core/connection/v1/client_connections/${clientId}`
          : `/ibc/core/connection/v1beta1/client_connections/${clientId}`
      )
    ).data;
  };

export const getConnections =
  (baseURL: string, isIBCGo = false) =>
  async ({ pagination }: { pagination?: PaginationParams }): Promise<any> => {
    return (
      await instance(baseURL).get(
        isIBCGo
          ? "/ibc/core/connection/v1/connections"
          : "/ibc/core/connection/v1beta1/connections",
        {
          params: { pagination },
        }
      )
    ).data;
  };

export const getConnection =
  (baseURL: string, isIBCGo = false) =>
  async ({ connectionId }: { connectionId: string }): Promise<any> => {
    return (
      await instance(baseURL).get(
        isIBCGo
          ? `/ibc/core/connection/v1/connections/${connectionId}`
          : `/ibc/core/connection/v1beta1/connections/${connectionId}`
      )
    ).data;
  };

export const getConnectionClientState =
  (baseURL: string, isIBCGo = false) =>
  async ({ connectionId }: { connectionId: string }): Promise<any> => {
    return (
      await instance(baseURL).get(
        isIBCGo
          ? `/ibc/core/connection/v1/connections/${connectionId}/client_state`
          : `/ibc/core/connection/v1beta1/connections/${connectionId}/client_state`
      )
    ).data;
  };

export const getConnectionConsensusState =
  (baseURL: string, isIBCGo = false) =>
  async ({
    connectionId,
    revisionNumber,
    revisionHeight,
  }: {
    connectionId: string;
    revisionNumber: string;
    revisionHeight: string;
  }): Promise<any> => {
    return (
      await instance(baseURL).get(
        isIBCGo
          ? `/ibc/core/connection/v1/connections/${connectionId}/consensus_state/revision/${revisionNumber}/height/${revisionHeight}`
          : `/ibc/core/connection/v1beta1/connections/${connectionId}/consensus_state/revision/${revisionNumber}/height/${revisionHeight}`
      )
    ).data;
  };
