import { instance } from "../../../utils";
import { SuperfluidDelegationResponse } from "./types";

export const getSuperfluidDelegation =
  (baseURL: string) =>
  async ({ owner }: { owner: string }): Promise<SuperfluidDelegationResponse> =>
    await instance(baseURL).get(
      `osmosis/superfluid/v1beta1/superfluid_delegations/${owner}`
    );
