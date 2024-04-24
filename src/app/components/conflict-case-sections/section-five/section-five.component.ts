import { Component, OnInit } from '@angular/core';
import { ConflictsService } from 'src/app/providers/conflicts.service';

@Component({
  selector: 'app-section-five',
  templateUrl: './section-five.component.html',
  styleUrls: ['./section-five.component.css']
})
export class SectionFiveComponent implements OnInit {

  constructor(private conflictService:ConflictsService) { }
  transactionInformation$:any = {}
  ngOnInit(): void {
    this.transactionInformation$ =  this.conflictService.getFormData()
  }

}
