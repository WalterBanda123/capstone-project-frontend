import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-recent-searched-title',
  templateUrl: './recent-searched-title.component.html',
  styleUrls: ['./recent-searched-title.component.css']
})
export class RecentSearchedTitleComponent implements OnInit {

  constructor() { }
  @Input() searchedTitle: any = null
  @Output() openOnMap: EventEmitter<any> = new EventEmitter<any>()

  handleOpeningOnMap(id: any): void {
    this.openOnMap.emit(id)
  }
  ngOnInit(): void {
  }

}
