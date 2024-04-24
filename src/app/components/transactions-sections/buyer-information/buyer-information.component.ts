import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TransactionsService } from 'src/app/providers/transactions.service';

@Component({
  selector: 'app-buyer-information',
  templateUrl: './buyer-information.component.html',
  styleUrls: ['./buyer-information.component.css']
})
export class BuyerInformationComponent implements OnInit {

  constructor(private router: Router, private transactionService: TransactionsService) { }

  fieldSets$:any = {}
  handleFormThree(form: NgForm): void {
    const data = form.value
    console.log(data);
    this.transactionService.updateSectionThreeData(data)
    this.router.navigate(['/dashboard/features/transactions/review-submit'])
  }
  ngOnInit(): void {
    this.fieldSets$ = this.transactionService.sectionThreeData
  }

}
