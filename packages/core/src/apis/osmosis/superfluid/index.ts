import { AxiosInstance } from "axios";
import type {
  SuperfluidAllAssetsResponse,
  SuperfluidDelegationResponse,
} from "./types";

export type { SuperfluidDelegationResponse };

export const getSuperfluidDelegation =
  (instance: AxiosInstance) =>
  async ({ owner }: { owner: string }): Promise<SuperfluidDelegationResponse> =>
    (
      await instance.get(
        `/osmosis/superfluid/v1beta1/superfluid_delegations/${owner}`
      )
    ).data;

export const getSuperfluidAllAssets =
  (instance: AxiosInstance) => async (): Promise<SuperfluidAllAssetsResponse> =>
    (await instance.get(`/osmosis/superfluid/v1beta1/all_assets`)).data;
