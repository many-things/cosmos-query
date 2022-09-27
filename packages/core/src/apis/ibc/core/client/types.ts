import type { PaginationResponse } from "../../../../types";
import type { RevisionHeight } from "../../../../types";

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
  proof_height: RevisionHeight;
}

export interface ConsensusStatesResponse {
  consensus_states: {
    height: RevisionHeight;
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
  proof_height: RevisionHeight;
}
