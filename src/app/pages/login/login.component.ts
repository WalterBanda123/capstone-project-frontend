import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppDataService } from 'src/app/providers/app-data.service';
import { AuthService } from 'src/app/providers/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService,
  ) { }
  errorMessage: string = ''

  handleUserLogin(credentials: NgForm) {
    const { email, password } = credentials.value
    this.authService.handleUserLogin(email, password).then((response: any) => {
      if (!response) {
        this.errorMessage = 'Auth failed. Wrong email or username'
        return;
      }
      console.log('Login response', response);
    }).catch((error) => {
      console.log('Auth Error', error);
    })
  }


  handleGoogleAuth(): void {
    this.authService.handleGoogleSignIn()
    console.log('Google Authenticating....');
  }
  ngOnInit(): void {
  }

}
