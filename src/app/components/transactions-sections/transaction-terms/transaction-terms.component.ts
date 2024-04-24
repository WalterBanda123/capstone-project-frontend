import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transaction-terms',
  templateUrl: './transaction-terms.component.html',
  styleUrls: ['./transaction-terms.component.css']
})
export class TransactionTermsComponent implements OnInit {

  constructor(private router: Router) { }
  handleFormTwo(form: NgForm): void {
    const data = form.value
    console.log(data);
    this.router.navigate(['/dashboard/features/transactions/buyer-information'])
  }
  ngOnInit(): void {
  }

}
