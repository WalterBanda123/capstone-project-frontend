import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

const DOCUMENTS = [
  {
    name: "Survey Plan",
    type: "Doc",
    date: "March 15, 2023",
    owners: "Alice Smith",
    status: "Pending",
    comment: "This survey plan needs further review to ensure accuracy.",
    timestamp: "2024-04-20T09:30:00Z"
  },
  {
    name: "Property Deed",
    type: "Doc",
    date: "January 10, 2024",
    owners: "John Doe, Jane Doe",
    status: "Verified",
    comment: "The property deed is in good order and properly executed.",
    timestamp: "2024-04-19T14:45:00Z"
  },
  {
    name: "Tax Assessment",
    type: "Doc",
    date: "November 5, 2023",
    owners: "Michael Johnson",
    status: "Verified",
    comment: "The tax assessment appears accurate and consistent with previous records.",
    timestamp: "2024-04-18T11:20:00Z"
  },
  {
    name: "Property Lease Agreement",
    type: "Doc",
    date: "February 20, 2022",
    owners: "David Brown, Emily Green",
    status: "Expired",
    comment: "We need to renegotiate the terms of this lease agreement.",
    timestamp: "2024-04-17T16:10:00Z"
  },
  {
    name: "Marriage Certificate",
    type: "Doc",
    date: "July 3, 2021",
    owners: "Robert Williams, Sarah Davis",
    status: "Pending",
    comment: "We're waiting on additional documentation to validate this marriage certificate.",
    timestamp: "2024-04-16T08:55:00Z"
  }
]

@Component({
  selector: 'app-deeds',
  templateUrl: './deeds.component.html',
  styleUrls: ['./deeds.component.css']
})
export class DeedsComponent implements OnInit {

  constructor() { }
  displayedColumns: string[] = ['name', "type", "date", 'owners', 'status', 'operations']
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>()
  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<any>(DOCUMENTS)
  }

}
