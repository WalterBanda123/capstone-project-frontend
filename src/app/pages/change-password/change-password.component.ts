import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from 'src/app/providers/auth.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  constructor(private authService: AuthService, private spinner: NgxSpinnerService) { }

  successMessage: boolean = false
  handleChangePassword(form: NgForm): void {
    this.spinner.show()
    const { email } = form.value
    this.authService.changePassword(email).then((response) => {
      this.successMessage = true
    }).catch((error) => {
      console.log(error);
    })

    setTimeout(() => {
      this.spinner.hide()
    }, 1200);

  }
  ngOnInit(): void {
  }

}
