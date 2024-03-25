export interface Transaction {
  id: number;
  date: string; // Date string format: "YYYY-MM-DDTHH:mm:ss"
  transaction: string;
  status: "Completed" | "Pending" | "Failed" | "Canceled"; 
  party: string;
}
