import type { Account, EthereumAccount } from "../apis/cosmos/auth/types";

export const isEthAccount = (
  account: Account | EthereumAccount
): account is EthereumAccount => {
  return [
    "/ethermint.types.v1.EthAccount",
    "/injective.types.v1beta1.EthAccount",
  ].includes(account["@type"]);
};
