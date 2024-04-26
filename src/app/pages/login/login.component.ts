import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/providers/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, ) { }


  handleUserLogin(credentials: NgForm): void {
    const { email, password } = credentials.value
    this.authService.handleUserLogin(email, password).then((response) => {
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
