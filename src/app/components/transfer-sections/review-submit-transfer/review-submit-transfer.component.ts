import { Component, OnInit } from '@angular/core';
import { TransferService } from 'src/app/providers/transfer.service';

@Component({
  selector: 'app-review-submit-transfer',
  templateUrl: './review-submit-transfer.component.html',
  styleUrls: ['./review-submit-transfer.component.css']
})
export class ReviewSubmitTransferComponent implements OnInit {

  constructor(private transferService: TransferService) { }
  transactionInformation$: any = {}
  
  ngOnInit(): void {
    this.transactionInformation$ = this.transferService.getFormData()
  }

}
