import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
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

  constructor(private registrationService: RegistrationService, private appDataService: AppDataService, private spinner: NgxSpinnerService, private router: Router, private _snakebar: MatSnackBar) { }


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
            setTimeout(() => {
              this._snakebar.open('Successfully added property. Please wait for it to be verified', '',
                { panelClass: ['custom-snackbar'] })
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
