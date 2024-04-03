import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-conflict-case',
  templateUrl: './create-conflict-case.component.html',
  styleUrls: ['./create-conflict-case.component.css']
})
export class CreateConflictCaseComponent implements OnInit {

  constructor(private router: Router) { }

  isRouteActive(route: string):boolean {
    return this.router.isActive(route, true);
  }
  ngOnInit(): void {
  }

}
