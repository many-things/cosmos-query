import type {
  ChannelOrdering,
  ChannelState,
  PaginationResponse,
} from "../../../../types";
import type { RevisionHeight } from "../../../../types";

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
      "@type": string;
      chain_id: string;
      trust_level: {
        numerator: string;
        denominator: string;
      };
      trusting_period: string;
      unbonding_period: string;
      max_clock_drift: string;
      frozen_height: {
        revision_number: string;
        revision_height: string;
      };
      latest_height: {
        revision_number: string;
        revision_height: string;
      };
      proof_specs: {
        leaf_spec: {
          hash: string;
          prehash_key: string;
          prehash_value: string;
          length: string;
          prefix: string;
        };
        inner_spec: {
          child_order: number[];
          child_size: number;
          min_prefix_length: number;
          max_prefix_length: number;
          empty_child: null | unknown;
          hash: string;
        };
        max_depth: number;
        min_depth: number;
      }[];
      upgrade_path: string[];
      allow_update_after_expiry: boolean;
      allow_update_after_misbehaviour: boolean;
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
