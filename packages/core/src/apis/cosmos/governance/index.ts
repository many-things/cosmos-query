import { ProposalStatus } from "../../../types";
import { instance } from "../../../utils";
import type { PaginationParams } from "../base";
import type {
  GovParamsResponse,
  GovParamsType,
  ProposalDepositResponse,
  ProposalDepositsResponse,
  ProposalResponse,
  ProposalsResponse,
  ProposalTallyResponse,
  ProposalVoteResponse,
  ProposalVotesResponse,
} from "./types";

export type {
  GovParamsResponse,
  GovParamsType,
  ProposalDepositResponse,
  ProposalDepositsResponse,
  ProposalResponse,
  ProposalsResponse,
  ProposalTallyResponse,
  ProposalVoteResponse,
  ProposalVotesResponse,
};

export const getGovParams =
  (baseURL: string) =>
  async ({
    paramsType,
  }: {
    paramsType: GovParamsType;
  }): Promise<GovParamsResponse> => {
    return (
      await instance(baseURL).get(`/cosmos/gov/v1beta1/params/${paramsType}`)
    ).data;
  };

export const getProposals =
  (baseURL: string) =>
  async ({
    proposalStatus,
    voter,
    depositor,
    pagination,
  }: {
    proposalStatus?: ProposalStatus;
    voter?: string;
    depositor?: string;
    pagination?: PaginationParams;
  }): Promise<ProposalsResponse> => {
    return (
      await instance(baseURL).get("/cosmos/gov/v1beta1/proposals", {
        params: { proposalStatus, voter, depositor, pagination },
      })
    ).data;
  };

export const getProposal =
  (baseURL: string) =>
  async ({ proposalId }: { proposalId: string }): Promise<ProposalResponse> => {
    return (
      await instance(baseURL).get(
        `/cosmos/gov/v1beta1/proposals/${proposalId}`
      )
    ).data;
  };

export const getProposalDeposits =
  (baseURL: string) =>
  async ({
    proposalId,
    pagination,
  }: {
    proposalId: string;
    pagination?: PaginationParams;
  }): Promise<ProposalDepositsResponse> => {
    return (
      await instance(baseURL).get(
        `/cosmos/gov/v1beta1/proposals/${proposalId}/deposits`,
        {
          params: { pagination },
        }
      )
    ).data;
  };

export const getProposalDeposit =
  (baseURL: string) =>
  async ({
    proposalId,
    depositor,
  }: {
    proposalId: string;
    depositor: string;
  }): Promise<ProposalDepositResponse> => {
    return (
      await instance(baseURL).get(
        `/cosmos/gov/v1beta1/proposals/${proposalId}/deposits/${depositor}`
      )
    ).data;
  };

export const getProposalTally =
  (baseURL: string) =>
  async ({
    proposalId,
  }: {
    proposalId: string;
  }): Promise<ProposalTallyResponse> => {
    return (
      await instance(baseURL).get(
        `/cosmos/gov/v1beta1/proposals/${proposalId}/tally`
      )
    ).data;
  };

export const getProposalVotes =
  (baseURL: string) =>
  async ({
    proposalId,
    pagination,
  }: {
    proposalId: string;
    pagination?: PaginationParams;
  }): Promise<ProposalVotesResponse> => {
    return (
      await instance(baseURL).get(
        `/cosmos/gov/v1beta1/proposals/${proposalId}/votes`,
        {
          params: { pagination },
        }
      )
    ).data;
  };

export const getProposalVote =
  (baseURL: string) =>
  async ({
    proposalId,
    voter,
  }: {
    proposalId: string;
    voter: string;
  }): Promise<ProposalVoteResponse> => {
    return (
      await instance(baseURL).get(
        `/cosmos/gov/v1beta1/proposals/${proposalId}/votes/${voter}`
      )
    ).data;
  };
