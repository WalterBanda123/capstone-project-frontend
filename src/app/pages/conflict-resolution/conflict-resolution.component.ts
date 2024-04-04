import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ConflictCaseComponent } from 'src/app/components/conflict-case/conflict-case.component';
import { CONFLICTS } from 'src/app/mock/Conflicts';

@Component({
  selector: 'app-conflict-resolution',
  templateUrl: './conflict-resolution.component.html',
  styleUrls: ['./conflict-resolution.component.css']
})
export class ConflictResolutionComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

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

  handleCaseView(element: any): void {
    const diologRef = this.dialog.open(ConflictCaseComponent, {
      data: element, hasBackdrop: true, width: '60%',
      height: '100%',
    })
    diologRef.afterClosed().subscribe({
      next: (result) => {
        console.log(`Result after close , ${result}`);

      }
    })
  }
  ngOnInit(): void {
    this.conflicts = new MatTableDataSource<any>(CONFLICTS)
  }

}
