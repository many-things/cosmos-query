export interface AppliedPlanResponse {
  height: string;
}

export interface CurrentPlanResponse {
  plan: {
    name: string;
    time: string;
    height: string;
    info: string;
    upgraded_client_state: {
      type_url: string;
      value: string;
    };
  };
}

export interface ModuleVersionsResponse {
  module_versions: {
    name: string;
    version: string;
  }[];
}

export interface UpgradedConsensusStateResponse {
  upgraded_consensus_state: string;
}
