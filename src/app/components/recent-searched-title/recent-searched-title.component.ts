import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-recent-searched-title',
  templateUrl: './recent-searched-title.component.html',
  styleUrls: ['./recent-searched-title.component.css']
})
export class RecentSearchedTitleComponent implements OnInit {

  constructor() { }
  @Input() searchedTitle: any = null
  ngOnInit(): void {
  }

}
