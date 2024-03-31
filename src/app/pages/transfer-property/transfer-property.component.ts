import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transfer-property',
  templateUrl: './transfer-property.component.html',
  styleUrls: ['./transfer-property.component.css']
})
export class TransferPropertyComponent implements OnInit {

  constructor(private router:Router) { }
  isRouteActive(route: string): boolean {
    return this.router.isActive(route, true);
  }
  ngOnInit(): void {
  }

}
