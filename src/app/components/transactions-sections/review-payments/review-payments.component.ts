import { Component, OnInit } from '@angular/core';
import { TransactionsService } from 'src/app/providers/transactions.service';

@Component({
  selector: 'app-review-payments',
  templateUrl: './review-payments.component.html',
  styleUrls: ['./review-payments.component.css']
})
export class ReviewPaymentsComponent implements OnInit {

  constructor(private transactionService: TransactionsService) { }
  transactionInformation$: any = {}
  ngOnInit(): void {
    this.transactionInformation$ = this.transactionService.getFormData()
  }

}
