export interface BlockIdentity {
  hash: string;
  part_set_header: {
    total: number;
    hash: string;
  };
}
