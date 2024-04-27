import { Component, OnInit } from '@angular/core';
import { AppDataService } from 'src/app/providers/app-data.service';

@Component({
  selector: 'app-property-overview',
  templateUrl: './property-overview.component.html',
  styleUrls: ['./property-overview.component.css']
})
export class PropertyOverviewComponent implements OnInit {

  constructor(private appDataService: AppDataService) { }

  properties: number = 0
  marketValue:number = 0
  totalAreaOccupied:number = 0

  ngOnInit(): void {
    this.appDataService.numberOfProperties$.subscribe(count =>{
      this.properties = count
    })
    this.appDataService.propertiesMarketValue$.subscribe(m=>{
      this.marketValue = m
    })
    this.appDataService.totalPropertyArea$.subscribe( area=>{
      console.log(area);

      this.totalAreaOccupied = area
    })
  }
}
