import { Component, OnInit } from '@angular/core';
import { AuthError } from '@angular/fire/auth';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from 'src/app/providers/auth.service';

@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.css']
})
export class GetStartedComponent implements OnInit {

  constructor(private authService: AuthService, private spinner: NgxSpinnerService, private router: Router) { }

  isPasswordMatching: boolean = true
  errorMessage: string = ''

  handleGoogleRegistration(): void {
    this.authService.signUpWithGoogle().then((response) => {
      console.log(response);
      this.router.navigate(['registration'])
    }).catch((error)=>{
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
        this.router.navigate(['registration'])
      }).catch((error: AuthError) => {
        this.errorMessage = 'Email is already in use.'
      }).finally(() => {
        this.spinner.hide()
        this.isPasswordMatching = true
      })

    }, 1500)

  }

  ngOnInit(): void {
  }
}
