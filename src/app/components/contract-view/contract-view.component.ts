import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LandContract } from 'src/app/interfaces/Contract.interface';



@Component({
  selector: 'app-contract-view',
  templateUrl: './contract-view.component.html',
  styleUrls: ['./contract-view.component.css']
})
export class ContractViewComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: LandContract) { }
  ngOnInit(): void {
  }

}
