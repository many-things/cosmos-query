import { instance } from "../../../utils";
import type { PaginationParams } from "../../cosmos";
import type {
  ERC20ParamsResponse,
  TokenPairResponse,
  TokenPairsResponse,
} from "./types";

export type { ERC20ParamsResponse, TokenPairResponse, TokenPairsResponse };

export const getERC20Params =
  (baseURL: string) => async (): Promise<ERC20ParamsResponse> => {
    return (await instance(baseURL).get("/evmos/erc20/v1/params")).data;
  };

export const getTokenPairs =
  (baseURL: string) =>
  async ({}: {
    pagination?: PaginationParams;
  }): Promise<TokenPairsResponse> => {
    return (await instance(baseURL).get("/evmos/erc20/v1/token_pairs")).data;
  };

export const getTokenPair =
  (baseURL: string) =>
  async ({ token }: { token: string }): Promise<TokenPairResponse> => {
    return (await instance(baseURL).get(`/evmos/erc20/v1/token_pairs/${token}`))
      .data;
  };
