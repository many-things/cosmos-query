interface IbcInfo {
  source: string;
  destination: string;
  channel_id: string;
  token_symbol: string;
  token_name: string;
}

interface AllIbc extends IbcInfo {
  token_liquidity: number;
  last_tx: string;
  size_queue: number;
  duration_minutes: number;
}

interface IbcSource extends IbcInfo {
  last_tx: string;
  size_queue: number;
  duration_minutes: number;
}

export type IbcInfoResponse = IbcInfo[];

export type AllIbcResponse = AllIbc[];

export type IbcSourceDestinationResponse = IbcSource[];

export type IbcSourceResponse = IbcSource[];

export type IbcDestinationResponse = IbcSource[];

export type IbcRawResponse = Record<
  string,
  {
    name: string;
    token_name: string;
    last_tx: string;
    counter: number;
    size_queue: number;
    is_trigger: boolean;
  }
>[];
