import { Component, OnInit } from '@angular/core';
import { AuthError } from '@angular/fire/auth';
import { NgForm } from '@angular/forms';
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

  constructor(private authService: AuthService, private spinner: NgxSpinnerService, private router: Router, private userDataService: UserDataService) { }

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
    const { email, password, confirmPassword } = credentials.value
    this.spinner.show()
    setTimeout(() => {
      if (password !== confirmPassword) {
        this.isPasswordMatching = false
        this.spinner.hide()
        return;
      }

      this.authService.registerUser(email, password).then((response) => {
        credentials.form.reset()
        this.userDataService.setUserData(response.user.uid, response.user.email)
        this.router.navigate(['registration'])
        
      }).catch((error: AuthError) => {
        this.errorMessage = 'Email is already in use.'
      }).finally(() => {

        this.isPasswordMatching = true
      })

    }, 1500)
    this.spinner.hide()

  }

  ngOnInit(): void {
  }
}
