import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from 'src/app/providers/registration.service';

@Component({
  selector: 'app-legal-regulatory',
  templateUrl: './legal-regulatory.component.html',
  styleUrls: ['./legal-regulatory.component.css']
})
export class LegalRegulatoryComponent implements OnInit {

  constructor(private regsitrationService: RegistrationService, private router: Router) { }

  propertyUses: string[] = [
    "Residential Use",
    "Commercial Use",
    "Industrial Use",
    "Agricultural Use",
    "Mixed - Use",
    "Special Use",
    "Vacant Land"
  ]

  selectedFile$: any = {}
  getSelectedFile(element: HTMLInputElement): void {
    if (element.files!.length > 0) {
      this.selectedFile$ = element.files?.item(0)
      console.log('Selected file', this.selectedFile$);
    }
  }

  handleForthForm(form: NgForm): void {
    const data = form.value
    this.regsitrationService.updateSectionForthData(data)
    this.router.navigate(['/dashboard/features/register-property/additional-documentation'])
  }
  ngOnInit(): void {
  }

}
