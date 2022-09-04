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

export type VoteOption =
  | "VOTE_OPTION_UNSPECIFIED"
  | "VOTE_OPTION_YES"
  | "VOTE_OPTION_NO"
  | "VOTE_OPTION_NO_WITH_VETO"
  | "VOTE_OPTION_ABSTAIN";

export type ProposalStatus =
  | "PROPOSAL_STATUS_UNSPECIFIED"
  | "PROPOSAL_STATUS_DEPOSIT_PERIOD"
  | "PROPOSAL_STATUS_VOTING_PERIOD"
  | "PROPOSAL_STATUS_PASSED"
  | "PROPOSAL_STATUS_REJECTED"
  | "PROPOSAL_STATUS_FAILED";

export type BroadcastMode =
  | "BROADCAST_MODE_UNSPECIFIED"
  | "BROADCAST_MODE_ASYNC"
  | "BROADCAST_MODE_BLOCK"
  | "BROADCAST_MODE_SYNC";

export type SignMode =
  | "SIGN_MODE_UNSPECIFIED"
  | "SIGN_MODE_DIRECT"
  | "SIGN_MODE_TEXTUAL"
  | "SIGN_MODE_LEGACY_AMINO_JSON";

export type BondStatus =
  | "BOND_STATUS_UNSPECIFIED"
  | "BOND_STATUS_UNBONDED"
  | "BOND_STATUS_UNBONDING"
  | "BOND_STATUS_BONDED";
