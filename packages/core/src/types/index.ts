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
