import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-verification-validation',
  templateUrl: './verification-validation.component.html',
  styleUrls: ['./verification-validation.component.css']
})
export class VerificationValidationComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private location: Location) { }
  pageName: string = ''
  ngOnInit(): void {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => {
      if (this.location.path().includes('main-section')) {
        this.pageName = ''
      }
      else {
        this.updateBreadCrumName()
      }
    })
  }

  updateBreadCrumName(): void {

    let route = this.activatedRoute.firstChild;
    while (route) {
      if (route.snapshot.data && route.snapshot.data['pageName']) {
        this.pageName = route.snapshot.data['pageName'];
        break;
      }
      route = route.firstChild;
    }
  }
}
