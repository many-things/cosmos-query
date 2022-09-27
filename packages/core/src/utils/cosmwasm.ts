import { Buffer } from "buffer";

export const getUrlFromObj = (contractAddress: string, obj: object): string => {
  const msg = JSON.stringify(obj);
  const query = Buffer.from(msg).toString("base64");

  return `/wasm/v1/contract/${contractAddress}/smart/${query}`;
};

export const getWasmDUrlFromObj = (
  contractAddress: string,
  obj: object
): string => {
  const msg = JSON.stringify(obj);
  const query = Buffer.from(msg).toString("base64");

  return `/cosmwasm/wasm/v1/contract/${contractAddress}/smart/${query}`;
};
