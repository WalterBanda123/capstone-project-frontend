import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { PROPERTIES } from 'src/app/mock/Properties';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent implements OnInit {

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
