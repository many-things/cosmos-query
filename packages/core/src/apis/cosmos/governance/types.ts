import type {
  Coin,
  PaginationResponse,
  ProposalStatus,
  VoteOption,
} from "../../../types";

export type GovParamsType = "voting" | "tallying" | "deposit";

export interface GovParamsResponse {
  voting_params: {
    voting_period: string;
  };
  deposit_params: {
    min_deposit: Coin[];
    max_deposit_period: string;
  };
  tally_params: {
    quorum: string;
    threshold: string;
    veto_threshold: string;
  };
}

export interface Proposal {
  proposal_id: string;
  content: {
    "@type": string;
    title: string;
    description: string;
  } | null;
  status: ProposalStatus;
  final_tally_result: {
    yes: string;
    abstain: string;
    no: string;
    no_with_veto: string;
  };
  submit_time: string;
  deposit_end_time: string;
  total_deposit: Coin[];

  voting_start_time: string;
  voting_end_time: string;
}
export interface ProposalsResponse {
  proposals: Proposal[];
  pagination: PaginationResponse;
}

export interface ProposalResponse {
  proposal: Proposal;
}

export interface Deposit {
  proposal_id: string;
  depositor: string;
  amount: Coin[];
}

export interface ProposalDepositsResponse {
  deposits: Deposit[];

  pagination: PaginationResponse;
}

export interface ProposalDepositResponse {
  deposit: Deposit;
}

export interface ProposalTallyResponse {
  tally: {
    yes: string;
    abstain: string;
    no: string;
    no_with_veto: string;
  };
}

export interface Vote {
  proposal_id: string;
  voter: string;
  option: VoteOption;
  options: {
    option: VoteOption;
    weight: string;
  }[];
}

export interface ProposalVotesResponse {
  votes: Vote[];
  pagination: PaginationResponse;
}

export interface ProposalVoteResponse {
  vote: Vote;
}
