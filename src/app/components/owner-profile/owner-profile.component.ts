import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-owner-profile',
  templateUrl: './owner-profile.component.html',
  styleUrls: ['./owner-profile.component.css']
})
export class OwnerProfileComponent implements OnInit {

  constructor() { }
  selectedTab: 'about' | 'network' = 'about'
  setSelectedTab(tab: 'about' | 'network'):void{
    this.selectedTab = tab
  }
  
  ngOnInit(): void {
  }

}
