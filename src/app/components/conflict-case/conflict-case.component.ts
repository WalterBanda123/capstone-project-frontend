import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-conflict-case',
  templateUrl: './conflict-case.component.html',
  styleUrls: ['./conflict-case.component.css']
})
export class ConflictCaseComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:any ) { }

  ngOnInit(): void {
  }

}
