import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { NgxSpinnerService } from 'ngx-spinner';
import { LandContract } from 'src/app/interfaces/Contract.interface';
import { CONTRACTS } from 'src/app/mock/Contracts';
import { TRANSACTIONS } from 'src/app/mock/Transactions';

@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.css']
})
export class ContractsComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService) { }
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>([])
  transactionData: MatTableDataSource<any> = new MatTableDataSource<any>([])

  displayedColumns: string[] = ['contract', 'property', 'deed', 'owner', 'status', 'action']

  transactionColumns: string[] = ['date', 'transactionType', 'status', 'party', 'action']
  selectedTab: 'contracts' | 'transactions' = 'contracts'


  setSelectedTab(tab: any): void {
    this.spinner.show()
    setTimeout(() => {
      this.selectedTab = tab
      this.spinner.hide()
    }, 1500);

  }

  handleSearch(form: NgForm): void {
    this.spinner.show()
    const { search } = form.value
    setTimeout(() => {
      if (this.selectedTab === 'contracts') {
        this.dataSource.filter = search.toString().trim().toLowerCase()
      }
      else {
        this.transactionData.filter = search.toString().trim().toLowerCase()
      }
      this.spinner.hide()
    }, 1200);
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<any>(CONTRACTS)
    this.transactionData = new MatTableDataSource<any>(TRANSACTIONS)
  }

}
