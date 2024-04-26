import { Component, OnInit } from '@angular/core';
import { FirebaseError } from '@angular/fire/app';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from 'src/app/providers/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  constructor(private authService: AuthService, private activatedRoute: ActivatedRoute, private spinner: NgxSpinnerService) { }

  oobCode: string = ''
  errorResponseMessage: string = ''
  matchError: string = ''
  successMessage: boolean = false

  handleResetingPassword(form: NgForm): void {
    this.matchError = ''
    this.errorResponseMessage = ''

    this.spinner.show()
    const { password, confirmPassword } = form.value
    if (password !== confirmPassword) {
      this.matchError = 'Passwords do not match'
      setTimeout(() => {
        this.spinner.hide()
      }, 1200);
      return;
    }
    setTimeout(() => {
      this.spinner.hide()
    }, 1200);
    this.authService.resetPassword(confirmPassword, this.oobCode).then((response) => {
      console.log(response);
      this.successMessage = true
    }).catch((error: FirebaseError) => {
      console.log(error);
      const errorCode = error.code
      if (errorCode === 'auth/invalid-action-code') {
        this.errorResponseMessage = 'Action code expired'
      }
      else {
        this.errorResponseMessage = 'Password should be at least 6 characters'
      }

    })
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.oobCode = params['oobCode']
      console.log('OOBCODE: ', this.oobCode);
    })
  }

}
