import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-property',
  templateUrl: './register-property.component.html',
  styleUrls: ['./register-property.component.css']
})
export class RegisterPropertyComponent implements OnInit {

  constructor(private router:Router) { }
  isRouteActive(route: string): boolean {
    return this.router.isActive(route, true);
  }
  ngOnInit(): void {
  }

}
