import { AxiosInstance } from "axios";
import * as IBC from "./apis/ibc";

export const getIBCQuery = (instance: AxiosInstance, isIBCGo?: boolean) => {
  // todo ibcFeatureFlag 인자에 대해서 알아보기
  const setInstance = <T>(
    callback: (instance: AxiosInstance, ibcFeatureFlag?: boolean) => T
  ) => {
    return callback(instance, isIBCGo);
  };

  return {
    /**
     * Channels queries all the IBC channels of a chain.
     *
     * GET `/ibc/core/channel/v1beta1/channels`
     */
    getChannels: setInstance(IBC.getChannels),
    /**
     * Channel queries an IBC Channel.
     *
     * GET `/ibc/core/channel/v1beta1/channels/{channel_id}/ports/{port_id}`
     */
    getChannel: setInstance(IBC.getChannel),
    /**
     * ChannelClientState queries for the client state for the channel associated with the provided channel identifiers.
     *
     * GET `/ibc/core/channel/v1beta1/channels/{channel_id}/ports/{port_id}/client_state`
     */
    getChannelClientState: setInstance(IBC.getChannelClientState),
    /**
     * ChannelConsensusState queries for the consensus state for the channel associated with the provided channel identifiers.
     *
     * GET `/ibc/core/channel/v1beta1/channels/{channel_id}/ports/{port_id}/consensus_state/revision/{revision_number}/height/{revision_height}`
     */
    getChannelConsensusState: setInstance(IBC.getChannelConsensusState),
    /**
     * NextSequenceReceive returns the next receive sequence for a given channel.
     *
     * GET `/ibc/core/channel/v1beta1/channels/{channel_id}/ports/{port_id}/next_sequence`
     */
    getNextSequenceReceive: setInstance(IBC.getNextSequenceReceive),
    /**
     * PacketAcknowledgements returns all the packet acknowledgements associated with a channel.
     *
     * GET `/ibc/core/channel/v1beta1/channels/{channel_id}/ports/{port_id}/packet_acknowledgements`
     */
    getPacketAcknowledgements: setInstance(IBC.getPacketAcknowledgements),
    /**
     * PacketAcknowledgement queries a stored packet acknowledgement hash.
     *
     * GET `/ibc/core/channel/v1beta1/channels/{channel_id}/ports/{port_id}/packet_acks/{sequence}`
     */
    getPacketAcknowledgement: setInstance(IBC.getPacketAcknowledgement),
    /**
     * PacketCommitments returns all the packet commitments hashes associated with a channel.
     *
     * GET `/ibc/core/channel/v1beta1/channels/{channel_id}/ports/{port_id}/packet_commitments`
     */
    getPacketCommitments: setInstance(IBC.getPacketCommitments),
    /**
     * UnreceivedAcks returns all the unreceived IBC acknowledgements associated with a channel and sequences.
     *
     * GET `/ibc/core/channel/v1beta1/channels/{channel_id}/ports/{port_id}/packet_commitments/{packet_ack_sequences}/unreceived_acks`
     */
    getUnreceivedAcks: setInstance(IBC.getUnreceivedAcks),
    /**
     * UnreceivedPackets returns all the unreceived IBC packets associated with a channel and sequences.
     *
     * GET `/ibc/core/channel/v1beta1/channels/{channel_id}/ports/{port_id}/packet_commitments/{packet_commitment_sequences}/unreceived_packets`
     */
    getUnreceivedPackets: setInstance(IBC.getUnreceivedPackets),
    /**
     * PacketCommitment queries a stored packet commitment hash.
     *
     * GET `/ibc/core/channel/v1beta1/channels/{channel_id}/ports/{port_id}/packet_commitments/{sequence}`
     */
    getPacketCommitment: setInstance(IBC.getPacketCommitment),
    /**
     * PacketReceipt queries if a given packet sequence has been received on the queried chain
     *
     * GET `/ibc/core/channel/v1beta1/channels/{channel_id}/ports/{port_id}/packet_receipts/{sequence}`
     */
    getPacketReceipt: setInstance(IBC.getPacketReceipt),
    /**
     * ConnectionChannels queries all the channels associated with a connection end.
     *
     * GET `/ibc/core/channel/v1beta1/connections/{connection}/channels`
     */
    getConnectionChannels: setInstance(IBC.getConnectionChannels),
    /**
     * ClientParams queries all parameters of the ibc client.
     *
     * GET `/ibc/client/v1beta1/params`
     */
    getClientParams: setInstance(IBC.getClientParams),
    /**
     * ClientStates queries all the IBC light clients of a chain.
     *
     * GET `/ibc/core/client/v1beta1/client_states`
     */
    getClientStates: setInstance(IBC.getClientStates),
    /**
     * ClientState queries an IBC light client.
     *
     * GET `/ibc/core/client/v1beta1/client_states/{client_id}`
     */
    getClientState: setInstance(IBC.getClientState),
    /**
     * ConsensusStates queries all the consensus state associated with a given client.
     *
     * GET `/ibc/core/client/v1beta1/consensus_states/{client_id}`
     */
    getConsensusStates: setInstance(IBC.getConsensusStates),
    /**
     * ConsensusState queries a consensus state associated with a client state at a given height.
     *
     * GET `/ibc/core/client/v1beta1/consensus_states/{client_id}/revision/{revision_number}/height/{revision_height}`
     */
    getConsensusState: setInstance(IBC.getConsensusState),
    /**
     * ClientConnections queries the connection paths associated with a client state.
     *
     * GET `/ibc/core/connection/v1beta1/client_connections/{client_id}
     */
    getClientConnections: setInstance(IBC.getClientConnections),
    /**
     * Connections queries all the IBC connections of a chain.
     *
     * GET `/ibc/core/connection/v1beta1/connections`
     */
    getConnections: setInstance(IBC.getConnections),
    /**
     * Connection queries an IBC connection end.
     *
     * GET `/ibc/core/connection/v1beta1/connections/{connection_id}`
     */
    getConnection: setInstance(IBC.getConnection),
    /**
     * ConnectionClientState queries the client state associated with the connection.
     *
     * GET `/ibc/core/connection/v1beta1/connections/{connection_id}/client_state`
     */
    getConnectionClientState: setInstance(IBC.getConnectionClientState),
    /**
     * ConnectionConsensusState queries the consensus state associated with the connection.
     *
     * GET `/ibc/core/connection/v1beta1/connections/{connection_id}/consensus_state/revision/{revision_number}/height/{revision_height}`
     */
    getConnectionConsensusState: setInstance(IBC.getConnectionConsensusState),
    /**
     * DenomTraces queries all denomination traces.
     *
     * GET `/ibc/applications/transfer/v1beta1/denom_traces`
     */
    getDenomTraces: setInstance(IBC.getDenomTraces),
    /**
     * DenomTrace queries a denomination trace information.
     *
     * GET `/ibc/applications/transfer/v1beta1/denom_traces/{hash}`
     */
    getDenomTrace: setInstance(IBC.getDenomTrace),
    /**
     * Params queries all parameters of the ibc-transfer module.
     *
     * GET `/ibc/applications/transfer/v1beta1/params`
     */
    getTransferParams: setInstance(IBC.getTransferParams),
  };
};
