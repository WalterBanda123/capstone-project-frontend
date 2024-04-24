import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-section-three',
  templateUrl: './section-three.component.html',
  styleUrls: ['./section-three.component.css']
})
export class SectionThreeComponent implements OnInit {

  constructor(private router:Router) { }

 selectedTitleDeed:any = {}
 selectedPurchaseAgreement:any = {}
  selectedSurveyPlan:any = {}

  getPropertyDeeds(element: HTMLInputElement): void {
    if (element.files!.length > 0) {
      this.selectedTitleDeed = element.files?.item(0)
      console.log('Selected file', this.selectedTitleDeed);
    }
  }
  getPurchaseAgreement(element: HTMLInputElement): void {
    if (element.files!.length > 0) {
      this.selectedPurchaseAgreement = element.files?.item(0)
      console.log('Selected file', this.selectedPurchaseAgreement);
    }
  }
  getPlan(element: HTMLInputElement): void {
    if (element.files!.length > 0) {
      this.selectedSurveyPlan = element.files?.item(0)
      console.log('Selected file', this.selectedSurveyPlan);
    }
  }

  handleFormThree(form: NgForm): void {
    const data = form.value
    console.log(data);
    this.router.navigate(['/dashboard/features/create-conflict-case/section-four'])
  }
  ngOnInit(): void {
  }

}
