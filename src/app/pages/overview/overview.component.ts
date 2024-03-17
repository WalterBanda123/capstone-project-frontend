import { Component, OnInit } from '@angular/core';


type SelectedDeedTab = 'title' | 'owner' | 'request'

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  constructor() { }

  selectedSearchedDeedTab: SelectedDeedTab = 'title'
  setSelectedSearchedDeedTab(tab: SelectedDeedTab): void {
    this.selectedSearchedDeedTab = tab
  }


  ngOnInit(): void {
  }

}
