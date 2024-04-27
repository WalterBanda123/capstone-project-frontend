import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { error } from 'console';
import { NgxSpinnerService } from 'ngx-spinner';
import { AppDataService } from 'src/app/providers/app-data.service';


type SelectedDeedTab = 'title' | 'owner' | 'request'

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService, private appDataService: AppDataService) { }

  selectedOverview: 'recent' | 'property' | 'quick-action' = 'recent'

  properties: any = []
  isSearched: boolean = false

  handleSelectedOverview(tab: any): void {
    this.spinner.show()
    setTimeout(() => {
      this.spinner.hide()
      this.selectedOverview = tab
    }, 1000);
  }
  handleTitleDeedSearch(form: NgForm): void {
    this.spinner.show()
    const { titleDeed } = form.value
    this.appDataService.getSearchedProperties(titleDeed).subscribe({
      next: (response) => {
        console.log('Searched data: ', response , 'text searched:', titleDeed);
        this.properties = response.properties
        if (titleDeed) {
          this.isSearched = true
        }
      }, error: (error) => {
        console.log('Error: ', error);
      }
    })

    setTimeout(() => {
      this.spinner.hide()
    }, 1500);
  }

  selectedSearchedDeedTab?: SelectedDeedTab = 'title'
  setSelectedSearchedDeedTab(tab: SelectedDeedTab): void {
    this.spinner.show()
    this.selectedSearchedDeedTab = tab
    setTimeout(() => {
      this.spinner.hide()
    }, 1500)
  }

  ngOnInit(): void {

  }
  // titles: any = [
  //   {
  //     "title": "Prime Residential Property in Harare CBD",
  //     "address": "123 Main Street, Harare, Zimbabwe",
  //     "propertyType": "Residential",
  //     "owner": "John Doe",
  //     "titleId": "TD123456789",
  //     "contractId": "CN987654321",
  //     "status": "Verified"
  //   },
  //   {
  //     "title": "Commercial Land in Bulawayo Industrial Zone",
  //     "address": "456 Industrial Road, Bulawayo, Zimbabwe",
  //     "propertyType": "Commercial",
  //     "owner": "Jane Smith",
  //     "titleId": "TD987654321",
  //     "contractId": "CN123456789",
  //     "status": "Not Verified"
  //   },
  //   {
  //     "title": "Rural Farm with Livestock in Mashonaland",
  //     "address": "789 Farm Road, Mashonaland, Zimbabwe",
  //     "propertyType": "Agricultural",
  //     "owner": "David Johnson",
  //     "titleId": "TD456789123",
  //     "contractId": "CN456123789",
  //     "status": "Verified"
  //   },
  //   {
  //     "title": "Vacant Land for Development in Victoria Falls",
  //     "address": "101 River View Avenue, Victoria Falls, Zimbabwe",
  //     "propertyType": "Vacant Land",
  //     "owner": "Emily Brown",
  //     "titleId": "TD789456123",
  //     "contractId": "CN789456123",
  //     "status": "Not Verified"
  //   }
  // ]


}
