import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-property',
  templateUrl: './register-property.component.html',
  styleUrls: ['./register-property.component.css']
})
export class RegisterPropertyComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  propertyTypes: string[] = [
    "Residential Properties",
    "Commercial Properties",
    "Vacant Land",
    "Agricultural Properties",
    " Special Purpose Properties",
    "Government properties",
    "Mixed - Use Properties",
    " Waterfront Properties",
    "Heritage or Historic Properties",
    "Rural and Remote Properties",
    "Concession and Leasehold Properties",
    "Community Land",
    "Government - Owned Properties"
  ]

  goBack(): void {
    this.location.back()
  }



}
