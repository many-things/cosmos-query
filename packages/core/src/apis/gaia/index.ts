import { instance } from "../../utils";
import type { NodeInfoResponse } from "./types";

export type { NodeInfoResponse };

export const getNodeInfo =
  (baseURL: string) => async (): Promise<NodeInfoResponse> => {
    return (await instance(baseURL).get("/node_info")).data;
  };
