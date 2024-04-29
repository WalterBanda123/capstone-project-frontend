import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { NgxSpinnerService } from 'ngx-spinner';
import { PROPERTIES } from 'src/app/mock/Properties';
import { AppDataService } from 'src/app/providers/app-data.service';

@Component({
  selector: 'app-properties-overview',
  templateUrl: './properties-overview.component.html',
  styleUrls: ['./properties-overview.component.css']
})
export class PropertiesOverviewComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService, private appDataService: AppDataService) { }
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
  propertiesColumns: string[] = ['image', 'title', 'location', 'value', 'rooms', 'category', 'registeredOn', 'status']

  getAllProperties(): void {
    this.appDataService.getAllProperties().subscribe({
      next: (records) => {
        if (records) {
          console.log('Records',records);
          const reversedList = records.properties.slice().reverse()
          this.properties = new MatTableDataSource<any>(reversedList)
        }
      }, error: (error) => {
        console.log(error);
      }
    })
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.getAllProperties()
    }, 1000);
    // this.properties = new MatTableDataSource<any>(PROPERTIES)
  }
}
