import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ConflictsService } from 'src/app/providers/conflicts.service';

@Component({
  selector: 'app-section-two',
  templateUrl: './section-two.component.html',
  styleUrls: ['./section-two.component.css']
})
export class SectionTwoComponent implements OnInit {

  constructor(private router: Router, private conflictService: ConflictsService) { }

  fieldSets$:any ={}
  handleFormTwo(form: NgForm): void {
    const data = form.value
    console.log(data);
    this.conflictService.updateSectionTwoData(data)
    this.router.navigate(['/dashboard/features/create-conflict-case/section-three'])
  }
  ngOnInit(): void {
    this.fieldSets$ = this.conflictService.sectionTwoData
  }

}
