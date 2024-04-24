import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ConflictsService } from 'src/app/providers/conflicts.service';

@Component({
  selector: 'app-section-four',
  templateUrl: './section-four.component.html',
  styleUrls: ['./section-four.component.css']
})
export class SectionFourComponent implements OnInit {

  constructor(private router: Router, private conflictService: ConflictsService) { }

  fieldSets$: any = {}
  handleFourthForm(form: NgForm): void {
    const data = form.value
    console.log(data);
    this.conflictService.updateSectionForthData(data)
    this.router.navigate(['/dashboard/features/create-conflict-case/section-five'])
  }
  ngOnInit(): void {
    this.fieldSets$ = this.conflictService.sectionFourData
  }

}
