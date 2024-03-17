import { Component, HostListener, OnInit } from '@angular/core';
import { AuthService } from 'src/app/providers/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private authService: AuthService) { }

  showMenu:boolean = false
  showMenuPopup():void{
    this.showMenu = !this.showMenu
    console.log('called');

  }
  @HostListener('document:click', ['$event'])
  hidPopover(event: MouseEvent) {
    const targetElement = event.target as HTMLElement
    if (!targetElement.closest('.menu-popover') && this.showMenu) {
      this.showMenuPopup()
      console.log('This is called ');

    }
  }
  handleLogout(): void {
    this.authService.signOutUser().then((res)=>{
      console.log('Res; ', res);
    }).catch((error)=>{
      console.log(error);
    })
  }


  ngOnInit(): void {
  }

}
