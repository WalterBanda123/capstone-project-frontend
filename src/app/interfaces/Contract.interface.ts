export interface LandContract {
  id: number;
  property_id: string;
  deed_id: string;
  contract_id: string;
  owner: string;
  contract_status: "Active" | "Inactive";
}
