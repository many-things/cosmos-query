import { instance } from "../utils";

interface NodeInfoResponse {
  application_version: {
    build_tags: string;
    client_name: string;
    commit: string;
    go: string;
    name: string;
    server_name: string;
    version: string;
  };
  node_info: {
    id: string;
    moniker: string;
    protocol_version: {
      p2p: number;
      block: number;
      app: number;
    };
    network: string;
    channels: string;
    listen_addr: string;
    version: string;
    other: {
      tx_index: string;
      rpc_address: string;
    };
  };
}

/**
 * The properties of the connected node
 * GET `/node_info`
 */
const getNodeInfo = async () => {
  return (await instance.get<NodeInfoResponse>("/node_info")).data;
};

export { getNodeInfo };
