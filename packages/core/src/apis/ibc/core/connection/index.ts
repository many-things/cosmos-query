import { instance } from "../../../../utils";
import type { PaginationParams } from "../../../../types";

export const getClientConnections =
  (baseURL: string) =>
  async ({ clientId }: { clientId: string }): Promise<any> => {
    return (
      await instance(baseURL).get(
        `/ibc/core/connection/v1beta1/client_connections/${clientId}`
      )
    ).data;
  };

export const getConnections =
  (baseURL: string) =>
  async ({ pagination }: { pagination?: PaginationParams }): Promise<any> => {
    return (
      await instance(baseURL).get("/ibc/core/connection/v1beta1/connections", {
        params: { pagination },
      })
    ).data;
  };

export const getConnection =
  (baseURL: string) =>
  async ({ connectionId }: { connectionId: string }): Promise<any> => {
    return (
      await instance(baseURL).get(
        `/ibc/core/connection/v1beta1/connections/${connectionId}`
      )
    ).data;
  };

export const getConnectionClientState =
  (baseURL: string) =>
  async ({ connectionId }: { connectionId: string }): Promise<any> => {
    return (
      await instance(baseURL).get(
        `/ibc/core/connection/v1beta1/connections/${connectionId}/client_state`
      )
    ).data;
  };

export const getConnectionConsensusState =
  (baseURL: string) =>
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
        `/ibc/core/connection/v1beta1/connections/${connectionId}/consensus_state/revision/${revisionNumber}/height/${revisionHeight}`
      )
    ).data;
  };
