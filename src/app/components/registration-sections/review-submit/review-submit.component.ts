import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AppDataService } from 'src/app/providers/app-data.service';
import { RegistrationService } from 'src/app/providers/registration.service';

@Component({
  selector: 'app-review-submit',
  templateUrl: './review-submit.component.html',
  styleUrls: ['./review-submit.component.css']
})
export class ReviewSubmitComponent implements OnInit {

  constructor(private registrationService: RegistrationService, private appDataService: AppDataService, private spinner: NgxSpinnerService, private router: Router) { }
  message: { msg: string, status: boolean } = { msg: '', status: false }

  propertyInformation$: any = {}
  ngOnInit(): void {
    this.propertyInformation$ = this.registrationService.getFormData()
    console.log(this.registrationService);
  }


  registerProperty(): void {
    this.spinner.show()
    this.appDataService.registerLandProperty(this.propertyInformation$).subscribe({
      next: (result) => {
        if (result) {

          setTimeout(() => {
            this.message.msg = 'Successfully added property'
            this.message.status = true
            setTimeout(() => {
              this.router.navigate(['dashboard/properties/properties-overview'])
            }, 200);
          }, 1201);

        }
      }, error: (error) => {
        console.log(error);
      }
    })
    setTimeout(() => {
      this.spinner.hide()
    }, 1200);
  }

}
