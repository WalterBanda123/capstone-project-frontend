import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from 'src/app/providers/registration.service';

@Component({
  selector: 'app-ownership-details',
  templateUrl: './ownership-details.component.html',
  styleUrls: ['./ownership-details.component.css']
})
export class OwnershipDetailsComponent implements OnInit {

  constructor(private registrationService: RegistrationService, private router: Router) { }

  ownershipType: string[] = [
    "Sole Proprietorship:",
    "Co - ownership",
    "Cooperative",
    "Partnership",
    "Limited Liability Company(LLC) ",
    "Trust",
    "Corporate Ownership",

  ]

  fieldsValues$: any = {}
  selectedFile: any = {}
  getSelectedFile(element: HTMLInputElement): void {
    if (element.files!.length > 0) {
      this.selectedFile = element.files?.item(0)
      console.log('Selected file', this.selectedFile);
    }
  }

  handleSubmittingSecondForm(form: NgForm): void {
    const { propertyOwnershipType } = form.value
    this.registrationService.updateSectionTwoData({ propertyOwnershipType, ownershipProof: this.selectedFile.name })
    this.router.navigate(['/dashboard/features/register-property/property-features'])
  }
  ngOnInit(): void {
    this.fieldsValues$ = this.registrationService.sectionTwoData
    this.selectedFile.name = this.fieldsValues$.ownershipProof
  }

}
