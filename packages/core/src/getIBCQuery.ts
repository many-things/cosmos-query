import * as IBC from "./apis/ibc";

export const getIBCQuery = (baseURL: string | undefined, isIBCGo?: boolean) => {
  const setBase = <T>(
    callback: (url: string, ibcFeatureFlag?: boolean) => T
  ) => {
    return callback(baseURL ?? "", isIBCGo);
  };

  return {
    /**
     * Channels queries all the IBC channels of a chain.
     *
     * GET `/ibc/core/channel/v1beta1/channels`
     */
    getChannels: setBase(IBC.getChannels),
    /**
     * Channel queries an IBC Channel.
     *
     * GET `/ibc/core/channel/v1beta1/channels/{channel_id}/ports/{port_id}`
     */
    getChannel: setBase(IBC.getChannel),
    /**
     * ChannelClientState queries for the client state for the channel associated with the provided channel identifiers.
     *
     * GET `/ibc/core/channel/v1beta1/channels/{channel_id}/ports/{port_id}/client_state`
     */
    getChannelClientState: setBase(IBC.getChannelClientState),
    /**
     * ChannelConsensusState queries for the consensus state for the channel associated with the provided channel identifiers.
     *
     * GET `/ibc/core/channel/v1beta1/channels/{channel_id}/ports/{port_id}/consensus_state/revision/{revision_number}/height/{revision_height}`
     */
    getChannelConsensusState: setBase(IBC.getChannelConsensusState),
    /**
     * NextSequenceReceive returns the next receive sequence for a given channel.
     *
     * GET `/ibc/core/channel/v1beta1/channels/{channel_id}/ports/{port_id}/next_sequence`
     */
    getNextSequenceReceive: setBase(IBC.getNextSequenceReceive),
    /**
     * PacketAcknowledgements returns all the packet acknowledgements associated with a channel.
     *
     * GET `/ibc/core/channel/v1beta1/channels/{channel_id}/ports/{port_id}/packet_acknowledgements`
     */
    getPacketAcknowledgements: setBase(IBC.getPacketAcknowledgements),
    /**
     * PacketAcknowledgement queries a stored packet acknowledgement hash.
     *
     * GET `/ibc/core/channel/v1beta1/channels/{channel_id}/ports/{port_id}/packet_acks/{sequence}`
     */
    getPacketAcknowledgement: setBase(IBC.getPacketAcknowledgement),
    /**
     * PacketCommitments returns all the packet commitments hashes associated with a channel.
     *
     * GET `/ibc/core/channel/v1beta1/channels/{channel_id}/ports/{port_id}/packet_commitments`
     */
    getPacketCommitments: setBase(IBC.getPacketCommitments),
    /**
     * UnreceivedAcks returns all the unreceived IBC acknowledgements associated with a channel and sequences.
     *
     * GET `/ibc/core/channel/v1beta1/channels/{channel_id}/ports/{port_id}/packet_commitments/{packet_ack_sequences}/unreceived_acks`
     */
    getUnreceivedAcks: setBase(IBC.getUnreceivedAcks),
    /**
     * UnreceivedPackets returns all the unreceived IBC packets associated with a channel and sequences.
     *
     * GET `/ibc/core/channel/v1beta1/channels/{channel_id}/ports/{port_id}/packet_commitments/{packet_commitment_sequences}/unreceived_packets`
     */
    getUnreceivedPackets: setBase(IBC.getUnreceivedPackets),
    /**
     * PacketCommitment queries a stored packet commitment hash.
     *
     * GET `/ibc/core/channel/v1beta1/channels/{channel_id}/ports/{port_id}/packet_commitments/{sequence}`
     */
    getPacketCommitment: setBase(IBC.getPacketCommitment),
    /**
     * PacketReceipt queries if a given packet sequence has been received on the queried chain
     *
     * GET `/ibc/core/channel/v1beta1/channels/{channel_id}/ports/{port_id}/packet_receipts/{sequence}`
     */
    getPacketReceipt: setBase(IBC.getPacketReceipt),
    /**
     * ConnectionChannels queries all the channels associated with a connection end.
     *
     * GET `/ibc/core/channel/v1beta1/connections/{connection}/channels`
     */
    getConnectionChannels: setBase(IBC.getConnectionChannels),
    /**
     * ClientParams queries all parameters of the ibc client.
     *
     * GET `/ibc/client/v1beta1/params`
     */
    getClientParams: setBase(IBC.getClientParams),
    /**
     * ClientStates queries all the IBC light clients of a chain.
     *
     * GET `/ibc/core/client/v1beta1/client_states`
     */
    getClientStates: setBase(IBC.getClientStates),
    /**
     * ClientState queries an IBC light client.
     *
     * GET `/ibc/core/client/v1beta1/client_states/{client_id}`
     */
    getClientState: setBase(IBC.getClientState),
    /**
     * ConsensusStates queries all the consensus state associated with a given client.
     *
     * GET `/ibc/core/client/v1beta1/consensus_states/{client_id}`
     */
    getConsensusStates: setBase(IBC.getConsensusStates),
    /**
     * ConsensusState queries a consensus state associated with a client state at a given height.
     *
     * GET `/ibc/core/client/v1beta1/consensus_states/{client_id}/revision/{revision_number}/height/{revision_height}`
     */
    getConsensusState: setBase(IBC.getConsensusState),
    /**
     * ClientConnections queries the connection paths associated with a client state.
     *
     * GET `/ibc/core/connection/v1beta1/client_connections/{client_id}
     */
    getClientConnections: setBase(IBC.getClientConnections),
    /**
     * Connections queries all the IBC connections of a chain.
     *
     * GET `/ibc/core/connection/v1beta1/connections`
     */
    getConnections: setBase(IBC.getConnections),
    /**
     * Connection queries an IBC connection end.
     *
     * GET `/ibc/core/connection/v1beta1/connections/{connection_id}`
     */
    getConnection: setBase(IBC.getConnection),
    /**
     * ConnectionClientState queries the client state associated with the connection.
     *
     * GET `/ibc/core/connection/v1beta1/connections/{connection_id}/client_state`
     */
    getConnectionClientState: setBase(IBC.getConnectionClientState),
    /**
     * ConnectionConsensusState queries the consensus state associated with the connection.
     *
     * GET `/ibc/core/connection/v1beta1/connections/{connection_id}/consensus_state/revision/{revision_number}/height/{revision_height}`
     */
    getConnectionConsensusState: setBase(IBC.getConnectionConsensusState),
    /**
     * DenomTraces queries all denomination traces.
     *
     * GET `/ibc/applications/transfer/v1beta1/denom_traces`
     */
    getDenomTraces: setBase(IBC.getDenomTraces),
    /**
     * DenomTrace queries a denomination trace information.
     *
     * GET `/ibc/applications/transfer/v1beta1/denom_traces/{hash}`
     */
    getDenomTrace: setBase(IBC.getDenomTrace),
    /**
     * Params queries all parameters of the ibc-transfer module.
     *
     * GET `/ibc/applications/transfer/v1beta1/params`
     */
    getTransferParams: setBase(IBC.getTransferParams),
  };
};
