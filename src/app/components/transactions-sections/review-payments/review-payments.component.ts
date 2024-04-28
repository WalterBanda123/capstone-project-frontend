import { Component, OnInit } from '@angular/core';
import { AppDataService } from 'src/app/providers/app-data.service';
import { TransactionsService } from 'src/app/providers/transactions.service';

@Component({
  selector: 'app-review-payments',
  templateUrl: './review-payments.component.html',
  styleUrls: ['./review-payments.component.css']
})
export class ReviewPaymentsComponent implements OnInit {

  constructor(private transactionService: TransactionsService, private appDataService: AppDataService) { }
  transactionInformation$: any = {}

  ngOnInit(): void {
    this.transactionInformation$ = this.transactionService.getFormData()
  }

  createTransaction(): void {
    this.appDataService.createTransferTransaction(this.transactionInformation$).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error) => {
        console.log(error);
      }
    })
    console.log('Form Data', this.transactionInformation$);
  }

}
