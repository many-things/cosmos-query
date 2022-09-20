export interface SuperfluidDelegationResponse {
  superfluid_delegation_records: [
    {
      delegator_address: string;
      validator_address: string;
      delegation_amount: { denom: string; amount: string };
      equivalent_staked_amount: { denom: string; amount: string };
    }
  ];
  total_delegated_coins: { denom: string; amount: string }[];
  total_equivalent_staked_amount: { denom: string; amount: string };
}
