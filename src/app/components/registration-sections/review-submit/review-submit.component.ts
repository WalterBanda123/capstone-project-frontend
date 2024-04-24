import { Component, OnInit } from '@angular/core';
import { RegistrationService } from 'src/app/providers/registration.service';

@Component({
  selector: 'app-review-submit',
  templateUrl: './review-submit.component.html',
  styleUrls: ['./review-submit.component.css']
})
export class ReviewSubmitComponent implements OnInit {

  constructor(private registrationService:RegistrationService) { }
  propertyInformation:any ={}
  ngOnInit(): void {
    this.propertyInformation = this.registrationService.getFormData()
    console.log(this.registrationService.getFormData());
    
  }

}
