import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ConflictsService } from 'src/app/providers/conflicts.service';

@Component({
  selector: 'app-section-three',
  templateUrl: './section-three.component.html',
  styleUrls: ['./section-three.component.css']
})
export class SectionThreeComponent implements OnInit {

  constructor(private router: Router, private conflictService: ConflictsService) { }

  selectedTitleDeed: any = {}
  deedFileName: string = ''
  selectedPurchaseAgreement: any = {}
  purchaseAgreementFileName: string = ''
  selectedSurveyPlan: any = {}
  planSurveyFileName: string = ''

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

  fieldSets$: any = {}
  handleFormThree(form: NgForm): void {
    const data = form.value
    console.log(data);
    this.conflictService.updateSectionThreeData(data)
    this.router.navigate(['/dashboard/features/create-conflict-case/section-four'])
  }
  ngOnInit(): void {
    this.fieldSets$ = this.conflictService.sectionThreeData

    this.planSurveyFileName = this.fieldSets$["file-upload-plan"] && this.fieldSets$["file-upload-plan"].toString().split('\\')[2]

    this.deedFileName = this.fieldSets$["file-upload-deed"] && this.fieldSets$["file-upload-deed"].toString().split('\\')[2]

    this.purchaseAgreementFileName = this.fieldSets$["file-upload-agreement"] && this.fieldSets$["file-upload-agreement"].toString().split('\\')[2]
  }

}
