import { Component, HostListener, OnInit } from '@angular/core';
import { AuthService } from 'src/app/providers/auth.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  showMenu: boolean = false
  showFeaturesMenu(): void {
    this.showMenu = !this.showMenu
  }

  constructor(private router: Router, private location: Location, private authService: AuthService) {
    if (this.authService.isUserLoggedIn && this.location.path().toString().includes('landing-page')) {
      this.router.navigate(['dashboard'])
    }
  }
  
  @HostListener('document:click', ['$event'])
  onClickElseWhere(event: MouseEvent) {
    const targetElement = event.target as HTMLElement
    if (!targetElement.closest('.menu-container') && this.showMenu) {
      this.showFeaturesMenu()
      console.log('This is called ');

    }
  }



  ngOnInit(): void {
  }


}
