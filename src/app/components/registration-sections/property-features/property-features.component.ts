import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from 'src/app/providers/registration.service';

@Component({
  selector: 'app-property-features',
  templateUrl: './property-features.component.html',
  styleUrls: ['./property-features.component.css']
})
export class PropertyFeaturesComponent implements OnInit {

  constructor(private registrationService: RegistrationService, private router: Router) { }

  buildingTypes: string[] = [
    "Apartment",
    "Vacant Land",
    "Family House",
    "Condominium",
    "Townhouse",
    "Duplex",
    "Villa",
    "Ranch",
    "Farm",
    "Commercial Building",
    "Industrial Facility",
    "Retail Space",
    "Office Space",
    "Warehouse",
    "Hotel",
    "Resort",
    "Restaurant",
    "Shopping Center",
    "School",
    "Hospital"
  ]

  fieldsValues$: any = {}
  handleThirdForm(form: NgForm): void {
    const data = form.value
    this.registrationService.updateSectionThreeData(data)
    this.router.navigate(['/dashboard/features/register-property/legal-regulatory'])
  }
  ngOnInit(): void {
     this.fieldsValues$ =  this.registrationService.sectionThreeData
  }

}
