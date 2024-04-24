import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ConflictsService } from 'src/app/providers/conflicts.service';

@Component({
  selector: 'app-section-one-conflict',
  templateUrl: './section-one-conflict.component.html',
  styleUrls: ['./section-one-conflict.component.css']
})
export class SectionOneConflictComponent implements OnInit {

  constructor(private router: Router, private conflictService: ConflictsService) { }

  fieldSets$: any = {}
  handleFormOne(form: NgForm): void {
    const data = form.value
    console.log(data);
    this.conflictService.updateSectionOneData(data)
    this.router.navigate(['/dashboard/features/create-conflict-case/section-two']);
  }
  ngOnInit(): void {
    this.fieldSets$ = this.conflictService.sectionOneData
  }

}
