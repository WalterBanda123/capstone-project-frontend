import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from 'src/app/providers/registration.service';

@Component({
  selector: 'app-purchase-price',
  templateUrl: './purchase-price.component.html',
  styleUrls: ['./purchase-price.component.css']
})
export class PurchasePriceComponent implements OnInit {

  constructor(private registrationService: RegistrationService, private router: Router) { }

  fieldSets$: any = {}
  selectedFile$: any = {}
  fileName: string = ''
  handeSelectedFile(element: HTMLInputElement): void {
    if (element.files!.length > 0) {
      this.selectedFile$ = element.files?.item(0)
      console.log('Selected file', this.selectedFile$);
    }
  }
  handleSixthForm(form: NgForm): void {
    const data = form.value
    console.log(data);
    this.registrationService.updateSectionSixData(data)
    this.router.navigate(['/dashboard/features/register-property/review-submit'])
  }
  ngOnInit(): void {
    this.fieldSets$ = this.registrationService.selectedSixData
    if (this.fieldSets$['file-upload-affidavit']) {
      this.fileName = this.fieldSets$['file-upload-affidavit'].toString().split('\\')[2]
    }

  }

}
