export type PaginationParams =
  | {
      pagination?: {
        key?: string;
        offset?: string;
        limit?: string;
        count_total?: boolean;
        reverse?: boolean;
      };
    }
  | undefined;

export interface PaginationResponse {
  next_key: string;
  total: string;
}
