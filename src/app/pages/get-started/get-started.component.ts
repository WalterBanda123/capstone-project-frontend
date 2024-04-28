import { Component, OnInit } from '@angular/core';
import { AuthError } from '@angular/fire/auth';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from 'src/app/providers/auth.service';
import { UserDataService } from 'src/app/providers/user-data.service';

@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.css']
})
export class GetStartedComponent implements OnInit {

  constructor(private authService: AuthService, private spinner: NgxSpinnerService, private router: Router, private userDataService: UserDataService, private _snackbar: MatSnackBar) { }

  isPasswordMatching: boolean = true
  errorMessage: string = ''

  handleGoogleRegistration(): void {
    this.authService.signUpWithGoogle().then((response) => {
      console.log(response);
      this.router.navigate(['registration'])
    }).catch((error) => {
      console.log(error);
    })
  }

  handleUserRegistration(credentials: NgForm): void {
    this.spinner.show()
    const { email, password, confirmPassword } = credentials.value
    if (password !== confirmPassword) {
      this.isPasswordMatching = false
      this.spinner.hide()
      return;
    }

    this.authService.registerUser(email, password).then((response) => {
      credentials.form.reset()
      this.userDataService.setUserData(response.user.uid, response.user.email)
      this.router.navigate(['registration'])
      this._snackbar.open('Successfully created account. Please create your profile before going forward', '', { duration: 5000, panelClass: ['custom-snackbar'], verticalPosition: 'top', horizontalPosition: 'end' })
    }).catch((error: AuthError) => {
      this.errorMessage = 'Email is already in use.'
    }).finally(() => {
      this.isPasswordMatching = true
    })

    setTimeout(() => {
      this.spinner.hide()
    }, 1500)

  }

  ngOnInit(): void {
  }
}
