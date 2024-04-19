import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from 'src/app/providers/registration.service';

@Component({
  selector: 'app-section-one',
  templateUrl: './section-one.component.html',
  styleUrls: ['./section-one.component.css']
})
export class SectionOneComponent implements OnInit {

  constructor(private registrationService: RegistrationService, private router: Router) { }

  propertyTypes: string[] = ["Residential",
    "Commercial",
    "Industrial",
    "Agricultural",
    "Vacant Land",
    "Special Use ",
    "Mixed - Use ",
    "Waterfront",
    "Heritage ",
    "Mineral Rights",
    "Air Rights",
    "Easements and Rights of Way",
    "Condominiums and Cooperatives",
    "Leaseholds",
    "Timeshares",
    "Mobile Homes and RV Parks",]

  cities: string[] = [
    "Harare",
    "Bulawayo",
    "Mutare",
    "Gweru",
    "Chitungwiza",
    "Masvingo",
    "Kwekwe",
    "Kadoma",
    "Marondera",
    "Norton"
  ]


  fieldsValues$: any = {}

  saveFirstForm(form: NgForm): void {
    const data = form.value
    this.registrationService.updateSectionOneData(data)
    this.router.navigate(['/dashboard/features/register-property/ownership-details'])
  }

  ngOnInit(): void {
    this.fieldsValues$ = this.registrationService.sectionOneData
    console.log('Fields upon return', this.fieldsValues$);

  }

}
