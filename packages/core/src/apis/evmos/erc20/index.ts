import { AxiosInstance } from "axios";
import type { PaginationParams } from "../../../types";
import type {
  ERC20ParamsResponse,
  TokenPairResponse,
  TokenPairsResponse,
} from "./types";

export type { ERC20ParamsResponse, TokenPairResponse, TokenPairsResponse };

export const getERC20Params =
  (instance: AxiosInstance) => async (): Promise<ERC20ParamsResponse> => {
    return (await instance.get("/evmos/erc20/v1/params")).data;
  };

export const getTokenPairs =
  (instance: AxiosInstance) =>
  async ({}: {
    pagination?: PaginationParams;
  }): Promise<TokenPairsResponse> => {
    return (await instance.get("/evmos/erc20/v1/token_pairs")).data;
  };

export const getTokenPair =
  (instance: AxiosInstance) =>
  async ({ token }: { token: string }): Promise<TokenPairResponse> => {
    return (await instance.get(`/evmos/erc20/v1/token_pairs/${token}`))
      .data;
  };
