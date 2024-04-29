import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-title-deed',
  templateUrl: './title-deed.component.html',
  styleUrls: ['./title-deed.component.css']
})
export class TitleDeedComponent implements OnInit {

  constructor() { }
  @Input() title: string | undefined;
  @Input() useDescription!: string;
  @Input() propertyType!: string;
  @Input() city!: string;
  @Input() ownershipType!: string;
  @Input() registeredOn!: string;
  @Input() buildingType!: string;
  @Output() requestTitle: EventEmitter<any> = new EventEmitter<any>()

  handleTitleDeedRequest(event: Event) {
    this.requestTitle.emit(event)
  }
  
  ngOnInit(): void {
  }

}
