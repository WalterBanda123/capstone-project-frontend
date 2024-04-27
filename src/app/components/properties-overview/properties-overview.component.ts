import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { NgxSpinnerService } from 'ngx-spinner';
import { PROPERTIES } from 'src/app/mock/Properties';

@Component({
  selector: 'app-properties-overview',
  templateUrl: './properties-overview.component.html',
  styleUrls: ['./properties-overview.component.css']
})
export class PropertiesOverviewComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService) { }
  handleSearch(form: NgForm): void {
    this.spinner.show()
    const { search } = form.value
    if (search) {
      this.properties.filter = search.toString().toLowerCase().trim()
    }

    setTimeout(() => {
      this.spinner.hide()
    }, 1200);
  }

  properties: MatTableDataSource<any> = new MatTableDataSource<any>()
  propertiesColumns: string[] = ['image', 'title', 'location', 'value', 'rooms', 'category', 'registeredOn']

  ngOnInit(): void {
    this.properties = new MatTableDataSource<any>(PROPERTIES)
  }
}
