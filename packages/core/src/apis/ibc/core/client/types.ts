import type { PaginationResponse } from "../../../../types";

export interface ClientStatesResponse {
  client_states: {
    client_id: string;
    client_state: {
      type_url: string;
      value: string;
    };
  }[];
  pagination: PaginationResponse;
}

export interface ClientStateResponse {
  client_state: {
    type_url: string;
    value: string;
  };
  proof: string;
  proof_height: {
    revision_number: string;
    revision_height: string;
  };
}

export interface ConsensusStatesResponse {
  consensus_states: {
    height: {
      revision_number: string;
      revision_height: string;
    };
    consensus_state: {
      type_url: string;
      value: string;
    };
  }[];
  pagination: PaginationResponse;
}

export interface ConsensusStateResponse {
  consensus_state: {
    type_url: string;
    value: string;
  };
  proof: string;
  proof_height: {
    revision_number: string;
    revision_height: string;
  };
}
