export type StakingAPRResponse = number;

export type APRResponse = {
  pool_id: number;
  apr_list: {
    start_date: string;
    denom: string;
    symbol: string;
    apr_1d: number;
    apr_7d: number;
    apr_14d: number;
  }[];
}[];
