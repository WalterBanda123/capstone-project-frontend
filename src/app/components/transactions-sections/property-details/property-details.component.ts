import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AppDataService } from 'src/app/providers/app-data.service';
import { TransactionsService } from 'src/app/providers/transactions.service';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css']
})
export class PropertyDetailsComponent implements OnInit {

  constructor(private router: Router, private transactionService: TransactionsService, private appDataService:AppDataService) { }
  availableProperties:any = []

  fieldSets$: any = {}
  handleFormOne(form: NgForm): void {
    const data = form.value
    console.log(data);
    this.transactionService.updateSectionOneData(data)
    this.router.navigate(['/dashboard/features/transactions/transaction-terms'])
  }
  ngOnInit(): void {
    this.fieldSets$ = this.transactionService.sectionOneData
    this.appDataService.getAllProperties().subscribe({next:(properties)=>{
      this.availableProperties = properties
    }, error:(error)=>{
      console.log(error);
    }})
  }

}
