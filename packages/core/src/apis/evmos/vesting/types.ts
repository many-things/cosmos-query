export interface VestingBalancesResponse {
  locked: {
    denom: "string";
    amount: "string";
  }[];
  unvested: {
    denom: "string";
    amount: "string";
  }[];
  vested: {
    denom: "string";
    amount: "string";
  }[];
}
