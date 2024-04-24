import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TransferService } from 'src/app/providers/transfer.service';

@Component({
  selector: 'app-additional-notes',
  templateUrl: './additional-notes.component.html',
  styleUrls: ['./additional-notes.component.css']
})
export class AdditionalNotesComponent implements OnInit {

  constructor(private router: Router, private transferService: TransferService) { }

  fieldSets$:any = {}
  handleFormThree(form: NgForm): void {
    const data = form.value
    console.log(data);
    this.transferService.updateSectionThreeData(data)
    this.router.navigate(['/dashboard/features/transfer-property/review-submit'])
  }
  ngOnInit(): void {
    this.fieldSets$ = this.transferService.sectionThreeData
  }

}
