import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TransferService } from 'src/app/providers/transfer.service';

@Component({
  selector: 'app-property-information',
  templateUrl: './property-information.component.html',
  styleUrls: ['./property-information.component.css']
})
export class PropertyInformationComponent implements OnInit {

  constructor(private router: Router, private transferService: TransferService) { }

  fieldSets$: any = {}
  handleFormOne(form: NgForm): void {
    const data = form.value
    console.log(data);
    this.transferService.updateSectionOneData(data)
    this.router.navigate(['/dashboard/features/transfer-property/transfer-details'])
  }
  ngOnInit(): void {
    this.fieldSets$ = this.transferService.sectionOneData
  }

}
