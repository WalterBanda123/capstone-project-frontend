import { Component, HostListener, OnInit } from '@angular/core';

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

  constructor() { }
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
