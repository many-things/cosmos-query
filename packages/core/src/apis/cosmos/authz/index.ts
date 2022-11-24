import { instance } from "../../../utils";
import type { PaginationParams } from "../../../types";
import type { GrantsResponse } from "./types";

export type { GrantsResponse };

export const getGrants =
  (baseURL: string) =>
  async ({
    granter,
    grantee,
    msgTypeUrl,
    pagination,
  }: {
    granter?: string;
    grantee?: string;
    msgTypeUrl?: string;
    pagination?: PaginationParams;
  }): Promise<GrantsResponse> => {
    return (
      await instance(baseURL).get("/cosmos/authz/v1beta1/grants", {
        params: {
          granter,
          grantee,
          msg_type_url: msgTypeUrl,
          pagination,
        },
      })
    ).data;
  };
