import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AppDataService } from 'src/app/providers/app-data.service';
import { TransferService } from 'src/app/providers/transfer.service';

@Component({
  selector: 'app-property-information',
  templateUrl: './property-information.component.html',
  styleUrls: ['./property-information.component.css']
})
export class PropertyInformationComponent implements OnInit {

  constructor(private router: Router, private transferService: TransferService, private appDataService: AppDataService) { }

  fieldSets$: any = {}
  transactions: any = []
  handleFormOne(form: NgForm): void {
    const data = form.value
    this.transferService.updateSectionOneData(data)
    this.router.navigate(['/dashboard/features/transfer-property/transfer-details'])
  }
  ngOnInit(): void {
    this.fieldSets$ = this.transferService.sectionOneData
    this.appDataService.getTransactions().subscribe(trns => {
      if (trns) {
        this.transactions = trns.transactions
      }
    })
  }

}
