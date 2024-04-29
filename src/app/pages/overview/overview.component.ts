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

  selectedOverview: 'property' | 'quick-action' = 'property'

  properties: any = []
  isSearched: boolean = false

  handleTitleDeedRequest(property: any): void {
    const request = {
      propertyID: property._id,
      priority: 'Normal',
      status: 'Pending',
      propertyOwner: property.owner
    }
    this.appDataService.createDeedsRequest(request).subscribe({
      next: (value) => {
        console.log(value);
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

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
        console.log('Searched data: ', response, 'text searched:', titleDeed);
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

}
