import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TransferService } from 'src/app/providers/transfer.service';

@Component({
  selector: 'app-transfer-details',
  templateUrl: './transfer-details.component.html',
  styleUrls: ['./transfer-details.component.css']
})
export class TransferDetailsComponent implements OnInit {

  constructor(private router: Router, private transferService: TransferService) { }

  fieldSets$: any = {}
  handleFormTwo(form: NgForm): void {
    const data = form.value
    console.log(data);
    this.transferService.updateSectionTwoData(data)
    this.router.navigate(['/dashboard/features/transfer-property/additional-notes'])
  }
  ngOnInit(): void {
    this.fieldSets$ = this.transferService.getFormData()
  }

}
