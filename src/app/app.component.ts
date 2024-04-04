import { Component } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router, private spinner: NgxSpinnerService) {
    this.router.events.subscribe((event: any) => {
      switch (true) {
        case event instanceof NavigationStart: {
          this.spinner.show()
          setTimeout(() => {
            this.spinner.hide()
          }, 1000);
          break;
        }
        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError: {
          this.spinner.show()
          setTimeout(() => {
            this.spinner.hide()
          }, 2000);

          break;
        }
        default: {
          break;
        }
      }
    })
  }
}
