import { instance } from "../../../../common";
import type { PaginationParams } from "../../../../types";
import type {
  ChannelClientStateResponse,
  ChannelConsensusStateResponse,
  ChannelResponse,
  ChannelsResponse,
  ConnectionChannelsResponse,
  NextSequenceReceiveResponse,
  PacketAcknowledgementResponse,
  PacketAcknowledgementsResponse,
  PacketCommitmentResponse,
  PacketCommitmentsResponse,
  PacketReceiptResponse,
  UnreceivedAcksResponse,
  UnreceivedPacketsResponse,
} from "./types";

export type {
  ChannelClientStateResponse,
  ChannelConsensusStateResponse,
  ChannelResponse,
  ChannelsResponse,
  ConnectionChannelsResponse,
  NextSequenceReceiveResponse,
  PacketAcknowledgementResponse,
  PacketAcknowledgementsResponse,
  PacketCommitmentResponse,
  PacketCommitmentsResponse,
  PacketReceiptResponse,
  UnreceivedAcksResponse,
  UnreceivedPacketsResponse,
};

export const getChannels =
  (baseURL: string, isIBCGo = false) =>
  async ({
    pagination,
  }: {
    pagination?: PaginationParams;
  }): Promise<ChannelsResponse> => {
    return (
      await instance(baseURL).get(
        isIBCGo
          ? "/ibc/core/channel/v1/channels"
          : "/ibc/core/channel/v1beta1/channels",
        {
          params: { pagination },
        }
      )
    ).data;
  };

export const getChannel =
  (baseURL: string, isIBCGo = false) =>
  async ({
    channelId,
    portId,
  }: {
    channelId: string;
    portId: string;
  }): Promise<ChannelResponse> => {
    return (
      await instance(baseURL).get(
        isIBCGo
          ? `/ibc/core/channel/v1/channels/${channelId}/ports/${portId}`
          : `/ibc/core/channel/v1beta1/channels/${channelId}/ports/${portId}`
      )
    ).data;
  };

export const getChannelClientState =
  (baseURL: string, isIBCGo = false) =>
  async ({
    channelId,
    portId,
  }: {
    channelId: string;
    portId: string;
  }): Promise<ChannelClientStateResponse> => {
    return (
      await instance(baseURL).get(
        isIBCGo
          ? `/ibc/core/channel/v1/channels/${channelId}/ports/${portId}/client_state`
          : `/ibc/core/channel/v1beta1/channels/${channelId}/ports/${portId}/client_state`
      )
    ).data;
  };

export const getChannelConsensusState =
  (baseURL: string, isIBCGo = false) =>
  async ({
    channelId,
    portId,
    revisionNumber,
    revisionHeight,
  }: {
    channelId: string;
    portId: string;
    revisionNumber: string;
    revisionHeight: string;
  }): Promise<ChannelConsensusStateResponse> => {
    return (
      await instance(baseURL).get(
        isIBCGo
          ? `/ibc/core/channel/v1/channels/${channelId}/ports/${portId}/consensus_state/revision/${revisionNumber}/height/${revisionHeight}`
          : `/ibc/core/channel/v1beta1/channels/${channelId}/ports/${portId}/consensus_state/revision/${revisionNumber}/height/${revisionHeight}`
      )
    ).data;
  };

export const getNextSequenceReceive =
  (baseURL: string, isIBCGo = false) =>
  async ({
    channelId,
    portId,
  }: {
    channelId: string;
    portId: string;
  }): Promise<NextSequenceReceiveResponse> => {
    return (
      await instance(baseURL).get(
        isIBCGo
          ? `/ibc/core/channel/v1/channels/${channelId}/ports/${portId}/next_sequence`
          : `/ibc/core/channel/v1beta1/channels/${channelId}/ports/${portId}/next_sequence`
      )
    ).data;
  };

export const getPacketAcknowledgements =
  (baseURL: string, isIBCGo = false) =>
  async ({
    channelId,
    portId,
    pagination,
  }: {
    channelId: string;
    portId: string;
    pagination?: PaginationParams;
  }): Promise<PacketAcknowledgementsResponse> => {
    return (
      await instance(baseURL).get(
        isIBCGo
          ? `/ibc/core/channel/v1/channels/${channelId}/ports/${portId}/packet_acknowledgements`
          : `/ibc/core/channel/v1beta1/channels/${channelId}/ports/${portId}/packet_acknowledgements`,
        {
          params: { pagination },
        }
      )
    ).data;
  };

export const getPacketAcknowledgement =
  (baseURL: string, isIBCGo = false) =>
  async ({
    channelId,
    portId,
    sequence,
  }: {
    channelId: string;
    portId: string;
    sequence: string;
  }): Promise<PacketAcknowledgementResponse> => {
    return (
      await instance(baseURL).get(
        isIBCGo
          ? `/ibc/core/channel/v1/channels/${channelId}/ports/${portId}/packet_acks/${sequence}`
          : `/ibc/core/channel/v1beta1/channels/${channelId}/ports/${portId}/packet_acks/${sequence}`
      )
    ).data;
  };

export const getPacketCommitments =
  (baseURL: string, isIBCGo = false) =>
  async ({
    channelId,
    portId,
    pagination,
  }: {
    channelId: string;
    portId: string;
    pagination?: PaginationParams;
  }): Promise<PacketCommitmentsResponse> => {
    return (
      await instance(baseURL).get(
        isIBCGo
          ? `/ibc/core/channel/v1/channels/${channelId}/ports/${portId}/packet_commitments`
          : `/ibc/core/channel/v1beta1/channels/${channelId}/ports/${portId}/packet_commitments`,
        {
          params: { pagination },
        }
      )
    ).data;
  };

export const getUnreceivedAcks =
  (baseURL: string, isIBCGo = false) =>
  async ({
    channelId,
    portId,
    packetAckSequences,
  }: {
    channelId: string;
    portId: string;
    packetAckSequences: string[];
  }): Promise<UnreceivedAcksResponse> => {
    const packetAckSequencesString = packetAckSequences.join(",");
    return (
      await instance(baseURL).get(
        isIBCGo
          ? `/ibc/core/channel/v1/channels/${channelId}/ports/${portId}/packet_commitments/${packetAckSequencesString}/unreceived_acks`
          : `/ibc/core/channel/v1beta1/channels/${channelId}/ports/${portId}/packet_commitments/${packetAckSequencesString}/unreceived_acks`
      )
    ).data;
  };

export const getUnreceivedPackets =
  (baseURL: string, isIBCGo = false) =>
  async ({
    channelId,
    portId,
    packetCommitmentSequences,
  }: {
    channelId: string;
    portId: string;
    packetCommitmentSequences: string[];
  }): Promise<UnreceivedPacketsResponse> => {
    const packetCommitmentSequencesString = packetCommitmentSequences.join(",");
    return (
      await instance(baseURL).get(
        isIBCGo
          ? `/ibc/core/channel/v1/channels/${channelId}/ports/${portId}/packet_commitments/${packetCommitmentSequencesString}/unreceived_packets`
          : `/ibc/core/channel/v1beta1/channels/${channelId}/ports/${portId}/packet_commitments/${packetCommitmentSequencesString}/unreceived_packets`
      )
    ).data;
  };

export const getPacketCommitment =
  (baseURL: string, isIBCGo = false) =>
  async ({
    channelId,
    portId,
    sequence,
  }: {
    channelId: string;
    portId: string;
    sequence: string;
  }): Promise<PacketCommitmentResponse> => {
    return (
      await instance(baseURL).get(
        isIBCGo
          ? `/ibc/core/channel/v1/channels/${channelId}/ports/${portId}/packet_commitments/${sequence}`
          : `/ibc/core/channel/v1beta1/channels/${channelId}/ports/${portId}/packet_commitments/${sequence}`
      )
    ).data;
  };

export const getPacketReceipt =
  (baseURL: string, isIBCGo = false) =>
  async ({
    channelId,
    portId,
    sequence,
  }: {
    channelId: string;
    portId: string;
    sequence: string;
  }): Promise<PacketReceiptResponse> => {
    return (
      await instance(baseURL).get(
        isIBCGo
          ? `/ibc/core/channel/v1/channels/${channelId}/ports/${portId}/packet_receipts/${sequence}`
          : `/ibc/core/channel/v1beta1/channels/${channelId}/ports/${portId}/packet_receipts/${sequence}`
      )
    ).data;
  };

export const getConnectionChannels =
  (baseURL: string, isIBCGo = false) =>
  async ({
    connection,
    pagination,
  }: {
    connection: string;
    pagination?: PaginationParams;
  }): Promise<ConnectionChannelsResponse> => {
    return (
      await instance(baseURL).get(
        isIBCGo
          ? `/ibc/core/channel/v1/connections/${connection}/channels`
          : `/ibc/core/channel/v1beta1/connections/${connection}/channels`,
        {
          params: { pagination },
        }
      )
    ).data;
  };
