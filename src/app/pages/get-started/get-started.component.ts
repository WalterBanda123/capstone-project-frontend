import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.css']
})
export class GetStartedComponent implements OnInit {

  constructor() { }

  gettingStartedHandler(credentials: NgForm): void {
    const { email, fullName } = credentials.value
    console.log('Full Name:', fullName);
    console.log('Email:', email);
  }
  ngOnInit(): void {
  }

}
