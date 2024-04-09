import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { PROPERTIES } from 'src/app/mock/Properties';

@Component({
  selector: 'app-properties-overview',
  templateUrl: './properties-overview.component.html',
  styleUrls: ['./properties-overview.component.css']
})
export class PropertiesOverviewComponent implements OnInit {

  constructor() { }
  handleSearch(form: NgForm): void {
    console.log(form.value);
  }

  properties: MatTableDataSource<any> = new MatTableDataSource<any>()
  propertiesColumns: string[] = ['image', 'title', 'location', 'value', 'beds', 'category', 'registeredOn']

  ngOnInit(): void {
    this.properties = new MatTableDataSource<any>(PROPERTIES)
  }
}
