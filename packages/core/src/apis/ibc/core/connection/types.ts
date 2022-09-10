import type { ChannelState, PaginationResponse } from "../../../../types";

interface Height {
  revision_number: string;
  revision_height: string;
}

export interface ClientConnectionsResponse {
  connection_paths: string[];
  proof: string;
  proof_height: Height;
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
  height: Height;
}

export interface ConnectionResponse {
  connection: Connection;
  proof: string;
  proof_height: Height;
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
  proof_height: Height;
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
  proof_height: Height;
}
