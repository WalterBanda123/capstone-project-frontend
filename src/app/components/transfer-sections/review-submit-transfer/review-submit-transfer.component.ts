import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AppDataService } from 'src/app/providers/app-data.service';
import { TransferService } from 'src/app/providers/transfer.service';

@Component({
  selector: 'app-review-submit-transfer',
  templateUrl: './review-submit-transfer.component.html',
  styleUrls: ['./review-submit-transfer.component.css']
})
export class ReviewSubmitTransferComponent implements OnInit {

  constructor(private transferService: TransferService, private appDataService: AppDataService, private _snackbar: MatSnackBar, private router: Router, private spinner: NgxSpinnerService) { }
  transactionInformation$: any = {}

  handleTransferRequest(): void {
    this.spinner.show()
    this.appDataService.createTransferRequest(this.transactionInformation$).subscribe(response => {
      this._snackbar.open('Successfully Submitted a transfer request. Visit the Blockchain insights page to view and monitor your request.', '', { duration: 5000, horizontalPosition: 'center', verticalPosition: "top", panelClass: ['custom-snackbar'] })
      this.router.navigate(['/dashboard/contracts'])
      console.log(response);
      setTimeout(() => {
        this.spinner.hide()
      }, 1200);
    })
  }
  ngOnInit(): void {
    this.transactionInformation$ = this.transferService.getFormData()
    console.log(this.transactionInformation$);

  }

}
