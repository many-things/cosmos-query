import type {
  ChannelOrdering,
  ChannelState,
  PaginationResponse,
  RevisionHeight,
} from "../../../../types";

export interface ChannelsResponse {
  channels: {
    state: ChannelState;
    ordering: ChannelOrdering;
    counterparty: {
      port_id: string;
      channel_id: string;
    };
    connection_hops: string[];
    version: string;
    port_id: string;
    channel_id: string;
  }[];
  pagination: PaginationResponse;
  height: RevisionHeight;
}

export interface ChannelResponse {
  channel: {
    state: ChannelState;
    ordering: ChannelOrdering;
    counterparty: {
      port_id: string;
      channel_id: string;
    };
    connection_hops: string[];
    version: string;
  };
  proof: string;
  proof_height: RevisionHeight;
}

export interface ChannelClientStateResponse {
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

export interface ChannelConsensusStateResponse {
  consensus_state: {
    type_url: string;
    value: string;
  };
  client_id: string;
  proof: string;
  proof_height: RevisionHeight;
}

export interface NextSequenceReceiveResponse {
  next_sequence_receive: string;
  proof: string;
  proof_height: RevisionHeight;
}

export interface PacketAcknowledgementsResponse {
  acknowledgements: {
    port_id: string;
    channel_id: string;
    sequence: string;
    data: string;
  }[];
  pagination: PaginationResponse;
  height: RevisionHeight;
}

export interface PacketAcknowledgementResponse {
  acknowledgement: string;
  proof: string;
  proof_height: RevisionHeight;
}

export interface PacketCommitmentsResponse {
  commitments: {
    port_id: string;
    channel_id: string;
    sequence: string;
    data: string;
  }[];
  pagination: PaginationResponse;
  height: RevisionHeight;
}

export interface UnreceivedAcksResponse {
  sequences: string[];
  height: RevisionHeight;
}

export interface UnreceivedPacketsResponse {
  sequences: string[];
  height: RevisionHeight;
}

export interface PacketCommitmentResponse {
  commitment: string;
  proof: string;
  proof_height: RevisionHeight;
}

export interface PacketReceiptResponse {
  received: boolean;
  proof: string;
  proof_height: RevisionHeight;
}

export interface ConnectionChannelsResponse {
  channels: {
    state: ChannelState;
    ordering: ChannelOrdering;
    counterparty: {
      port_id: string;
      channel_id: string;
    };
    connection_hops: string[];
    version: string;
    port_id: string;
    channel_id: string;
  }[];
  pagination: PaginationResponse;
  height: RevisionHeight;
}
