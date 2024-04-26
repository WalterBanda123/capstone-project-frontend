import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserDataService } from 'src/app/providers/user-data.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private location: Location, private activeRoute: ActivatedRoute, private router: Router, private userDataService: UserDataService) { }

  userEmail: string = ''

  goBack(): void {
    this.location.back()
  }
  handleRegistration(form: NgForm): void {
    const data = form.value
    this.userDataService.createUserProfile(data).subscribe({
      next: (value: any) => {
        console.log(value);
        console.log(data);
        this.router.navigate(['dashboard'])
      }, error: (error) => {
        console.log(error);
      }
    })

  }
  ngOnInit(): void {
    this.userEmail = this.userDataService.userEmail
  }

}
