import { Transaction } from "../interfaces/Transaction.interface";

export const TRANSACTIONS :Transaction[] =
  [
    {
      "id": 1,
      "date": "2024-03-19T10:30:00",
      "transaction": "Transfer",
      "status": "Completed",
      "party": "Alice"
    },
    {
      "id": 2,
      "date": "2024-03-19T11:45:00",
      "transaction": "Purchase",
      "status": "Pending",
      "party": "Bob"
    },
    {
      "id": 3,
      "date": "2024-03-19T13:20:00",
      "transaction": "Exchange",
      "status": "Failed",
      "party": "Charlie"
    },
    {
      "id": 4,
      "date": "2024-03-19T15:10:00",
      "transaction": "Transfer",
      "status": "Completed",
      "party": "Alice"
    },
    {
      "id": 5,
      "date": "2024-03-19T16:55:00",
      "transaction": "Purchase",
      "status": "Completed",
      "party": "David"
    }
  ]
