import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ContractViewComponent } from 'src/app/components/contract-view/contract-view.component';
import { ProcessPaymentComponent } from 'src/app/components/process-payment/process-payment.component';
// import { ConfirmDelitionComponent } from 'src/app/components/confirm-delition/confirm-delition.component';
import { ToastMessageComponent } from 'src/app/components/toast-message/toast-message.component';
import { TransactionViewComponent } from 'src/app/components/transaction-view/transaction-view.component';
import { CONTRACTS } from 'src/app/mock/Contracts';
import { TRANSACTIONS } from 'src/app/mock/Transactions';
import { TRANSFERS } from 'src/app/mock/Transfers';
import { AuthService } from 'src/app/providers/auth.service';

@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.css']
})
export class ContractsComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService, private dialog: MatDialog, private _toast: MatSnackBar, private authService: AuthService, private router: Router) { }

  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>([])
  transactionData: MatTableDataSource<any> = new MatTableDataSource<any>([])
  transferRequests: MatTableDataSource<any> = new MatTableDataSource<any>([])

  displayedColumns: string[] = ['contract', 'property', 'deed', 'owner', 'status', 'action']

  transactionColumns: string[] = ['date', 'transactionType', 'status', 'party', 'property', 'payment-period', 'agreed-price', 'action', 'edit']

  transferRequestColums: string[] = ['transaction', 'transfer-type', 'property', 'recepient', 'createdAt', 'status', 'actions']

  selectedTab: 'contracts' | 'transactions' | 'transfer-requests' = 'contracts'


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

  handleContractView(element: any): void {
    const dialogRef = this.dialog.open(ContractViewComponent, {
      hasBackdrop: true, data: element, width: '60%',
      height: '100%',
      panelClass: ['dialog-custom-width-height'],

    })

    dialogRef.afterClosed().subscribe({
      next: (result) => {
        console.log(`Result is ${result} and the element is: `, element);
      }
    })
  }

  handleTransactionView(element: any): void {
    const dialogRef = this.dialog.open(TransactionViewComponent, {
      data: element, hasBackdrop: true, width: '60%',
      height: '100%',
    })
  }

  editTransaction(transaction: any): void {
    this.authService.userProfile$.subscribe(profile => {
      if (transaction.createdBy === profile._id) {
        this.router.navigate([`/dashboard/features/transactions/property-details`], { state: { transaction } })
      }
      else {
        const dialogRef = this.dialog.open(ProcessPaymentComponent,
          {
            data: transaction,
            height: '100%',
            width: '70%',
          }
        )
      }
    })
    const dialogRef = this.dialog.open(ProcessPaymentComponent,
      {
        data: transaction,
        height: '100%',
        width: '60%',
      }
    )
  }


  handleTransactionDeletion(element: any): void {
    // const dialogRef = this.dialog.open(ConfirmDelitionComponent, { hasBackdrop: false })
    // dialogRef.afterClosed().subscribe({
    //   next: (response: any) => {
    //     console.log('Response', response);
    //     if (response === 'Deleted') {
    //       this._toast.openFromComponent(ToastMessageComponent, { duration: 5000 })
    //     }
    //   }, error: (error: any) => {
    //     console.log(error)
    //   }
    // })
    console.log(element);
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<any>(CONTRACTS)
    this.transactionData = new MatTableDataSource<any>(TRANSACTIONS);
    this.transferRequests = new MatTableDataSource<any>(TRANSFERS)
  }

}
