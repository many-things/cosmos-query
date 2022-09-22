import type { ChannelState, PaginationResponse } from "../../../../types";
import type { RevisionHeight } from "../../../../types/common";

export interface ClientConnectionsResponse {
  connection_paths: string[];
  proof: string;
  proof_height: RevisionHeight;
}

interface Connection {
  id: string;
  client_id: string;
  versions: {
    identifier: string;
    features: string[];
  }[];
  state: ChannelState;
  counterparty: {
    client_id: string;
    connection_id: string;
    prefix: {
      key_prefix: string;
    };
  };
  delay_period: string;
}

export interface ConnectionsResponse {
  connections: Connection[];
  pagination: PaginationResponse;
  height: RevisionHeight;
}

export interface ConnectionResponse {
  connection: Connection;
  proof: string;
  proof_height: RevisionHeight;
}

export interface ConnectionClientStateResponse {
  identified_client_state: {
    client_id: string;
    client_state: {
      type_url: string;
      value: string;
    };
  };
  proof: string;
  proof_height: RevisionHeight;
}

export interface ConnectionConsensusStateResponse {
  identified_client_state: {
    client_id: string;
    client_state: {
      type_url: string;
      value: string;
    };
  };
  proof: string;
  proof_height: RevisionHeight;
}
