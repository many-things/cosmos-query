import type {
  ChannelOrdering,
  ChannelState,
  PaginationResponse,
} from "../../../../types";

interface Height {
  revision_number: string;
  revision_height: string;
}

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
  height: Height;
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
  proof_height: Height;
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
  proof_height: Height;
}

export interface ChannelConsensusStateResponse {
  consensus_state: {
    type_url: string;
    value: string;
  };
  client_id: string;
  proof: string;
  proof_height: Height;
}

export interface NextSequenceReceiveResponse {
  next_sequence_receive: string;
  proof: string;
  proof_height: Height;
}

export interface PacketAcknowledgementsResponse {
  acknowledgements: {
    port_id: string;
    channel_id: string;
    sequence: string;
    data: string;
  }[];
  pagination: PaginationResponse;
  height: Height;
}

export interface PacketAcknowledgementResponse {
  acknowledgement: string;
  proof: string;
  proof_height: Height;
}

export interface PacketCommitmentsResponse {
  commitments: {
    port_id: string;
    channel_id: string;
    sequence: string;
    data: string;
  }[];
  pagination: PaginationResponse;
  height: Height;
}

export interface UnreceivedAcksResponse {
  sequences: string[];
  height: Height;
}

export interface UnreceivedPacketsResponse {
  sequences: string[];
  height: Height;
}

export interface PacketCommitmentResponse {
  commitment: string;
  proof: string;
  proof_height: Height;
}

export interface PacketReceiptResponse {
  received: boolean;
  proof: string;
  proof_height: Height;
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
  height: Height;
}
