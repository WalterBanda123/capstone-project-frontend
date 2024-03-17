import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-title-deed',
  templateUrl: './title-deed.component.html',
  styleUrls: ['./title-deed.component.css']
})
export class TitleDeedComponent implements OnInit {

  constructor() { }
  @Input() title: string | undefined;
  @Input()address!: string;
  @Input() propertyType!: string;
  @Input() owner!: string;
  @Input() titleId!: string;
  @Input() contractId!: string;
  @Input() status!: string;
  ngOnInit(): void {
  }

}
