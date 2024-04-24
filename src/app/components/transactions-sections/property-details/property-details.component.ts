import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TransactionsService } from 'src/app/providers/transactions.service';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css']
})
export class PropertyDetailsComponent implements OnInit {

  constructor(private router: Router, private transactionService: TransactionsService) { }

  fieldSets$: any = {}
  handleFormOne(form: NgForm): void {
    const data = form.value
    console.log(data);
    this.transactionService.updateSectionOneData(data)
    this.router.navigate(['/dashboard/features/transactions/transaction-terms'])
  }
  ngOnInit(): void {
    this.fieldSets$ = this.transactionService.sectionOneData
  }

}
