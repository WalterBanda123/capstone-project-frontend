import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-one',
  templateUrl: './section-one.component.html',
  styleUrls: ['./section-one.component.css']
})
export class SectionOneComponent implements OnInit {

  constructor() { }
  testing():void{
    console.log('This is working');

  }
  ngOnInit(): void {
  }

}
