import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { AppDataService } from 'src/app/providers/app-data.service';
import { AuthService } from 'src/app/providers/auth.service';
import { UserDataService } from 'src/app/providers/user-data.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private location: Location,
    private activeRoute: ActivatedRoute,
    private router: Router,
    private userDataService: UserDataService,
    private appDataService: AppDataService,
    private _snackbar: MatSnackBar,
    private authService: AuthService) { }

  userEmail: string = ''

  goBack(): void {
    this.location.back()
  }
  handleRegistration(form: NgForm): void {
    const data = form.value
    this.appDataService.createUserProfile(data).subscribe({
      next: (value: any) => {
        this._snackbar.open('Successfully created user profile', '', { panelClass: ['custom-snackbar'], horizontalPosition: 'right', verticalPosition: 'top' })
        this.router.navigate(['dashboard']);
        this.authService.getUserProfile(value)
      }, error: (error) => {
        console.log(error);
      }
    })
  }
  ngOnInit(): void {
    this.userEmail = this.userDataService.userEmail
  }

}
