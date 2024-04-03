import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { CONFLICTS } from 'src/app/mock/Conflicts';

@Component({
  selector: 'app-conflict-resolution',
  templateUrl: './conflict-resolution.component.html',
  styleUrls: ['./conflict-resolution.component.css']
})
export class ConflictResolutionComponent implements OnInit {

  constructor() { }

  conflicts: MatTableDataSource<any> = new MatTableDataSource<any>()
  conflictsColumns: string[] =
    ['caseID',
      'secondParty',
      'description',
      'status',
      'arbitrator',
      'timeline',
      'appeals', "view"]
  handleSearch(form: NgForm): void {
    console.log(form.value);

  }
  ngOnInit(): void {
    this.conflicts = new MatTableDataSource<any>(CONFLICTS)
  }

}
