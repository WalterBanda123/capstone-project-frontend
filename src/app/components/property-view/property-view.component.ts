import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-property-view',
  templateUrl: './property-view.component.html',
  styleUrls: ['./property-view.component.css']
})
export class PropertyViewComponent implements OnInit {

  constructor(private router:Router, private activateRoute:ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activateRoute.snapshot.queryParamMap.get('id')
    console.log('Selected Property iD');

  }

}
