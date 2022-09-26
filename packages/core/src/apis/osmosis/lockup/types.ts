import { Coin } from "../../../types/common";

export interface CoinsResponse {
  coins: Coin[];
}

interface Lock {
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
