import { instance } from "../../../utils";
import type {
  SuperfluidAllAssetsResponse,
  SuperfluidDelegationResponse,
} from "./types";

export type { SuperfluidDelegationResponse };

export const getSuperfluidDelegation =
  (baseURL: string) =>
  async ({ owner }: { owner: string }): Promise<SuperfluidDelegationResponse> =>
    (
      await instance(baseURL).get(
        `/osmosis/superfluid/v1beta1/superfluid_delegations/${owner}`
      )
    ).data;

export const getSuperfluidAllAssets =
  (baseURL: string) => async (): Promise<SuperfluidAllAssetsResponse> =>
    (await instance(baseURL).get(`/osmosis/superfluid/v1beta1/all_assets`))
      .data;
