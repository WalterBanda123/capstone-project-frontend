import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from 'src/app/providers/auth.service';

@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.css']
})
export class GetStartedComponent implements OnInit {

  constructor(private authService: AuthService) { }

  gettingStartedHandler(credentials: NgForm): void {
    const { email, fullName } = credentials.value
    console.log(email);
    this.authService.initialRegistration(email).then((response) => {
      console.log('Email registration: ', response);
    }).catch((error) => {
      console.log(error);
    })
  }

  ngOnInit(): void {
  }
}
