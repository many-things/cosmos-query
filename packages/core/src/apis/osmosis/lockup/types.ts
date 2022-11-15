import type { Coin } from "../../../types";

export interface CoinsResponse {
  coins: Coin[];
}

export interface Lock {
  ID: string;
  owner: string;
  duration: string;
  end_time: string;
  coins: Coin[];
}

export interface LocksResponse {
  locks: Lock[];
}

export interface LockedByIdResponse {
  lock: Lock;
}
