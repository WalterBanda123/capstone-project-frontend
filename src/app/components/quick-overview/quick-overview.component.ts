import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-quick-overview',
  templateUrl: './quick-overview.component.html',
  styleUrls: ['./quick-overview.component.css']
})
export class QuickOverviewComponent implements OnInit {

  constructor() { }


  @Input() selectedOverview:any


  @Output() handleSelectedOverview: EventEmitter<any> = new EventEmitter<any>()

  onClick(tab:string):void{
    this.handleSelectedOverview.emit(tab)
  }
  ngOnInit(): void {
  }

}
