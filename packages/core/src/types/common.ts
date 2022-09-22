
export interface BlockIdentity {
  hash: string;
  part_set_header: {
    total: number;
    hash: string;
  };

export interface Coin {
  denom: string;
  amount: string;
}
