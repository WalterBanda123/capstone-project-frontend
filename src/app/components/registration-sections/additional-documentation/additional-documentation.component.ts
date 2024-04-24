import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from 'src/app/providers/registration.service';

@Component({
  selector: 'app-additional-documentation',
  templateUrl: './additional-documentation.component.html',
  styleUrls: ['./additional-documentation.component.css']
})
export class AdditionalDocumentationComponent implements OnInit {

  constructor(private registrationService:RegistrationService, private router:Router) { }

  selectedExteriorImage: any = {}
  selectedInteriorImage: any = {}
  selectedPlan:any = {}

  getExteriorImage(element: HTMLInputElement): void {
    if (element.files!.length > 0) {
      this.selectedExteriorImage = element.files?.item(0)
      console.log('Selected file', this.selectedExteriorImage);
    }
  }

  getInteriorImage(element: HTMLInputElement): void {
    if (element.files!.length > 0) {
      this.selectedInteriorImage = element.files?.item(0)
      console.log('Selected file', this.selectedInteriorImage);
    }
  }

  getPlan(element: HTMLInputElement):void{
    if (element.files!.length > 0) {
      this.selectedPlan = element.files?.item(0)
      console.log('Selected file', this.selectedPlan);
    }
  }

  handleFifthForm(form:NgForm):void{
    const data = form.value
    this.registrationService.updateSectionFifthData(data)
    this.router.navigate(['/dashboard/features/register-property/purchase-price'])
  }
  ngOnInit(): void {
  }
}
