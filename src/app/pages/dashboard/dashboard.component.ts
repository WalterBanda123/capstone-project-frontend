import { Component, HostListener, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MenuPanelComponent } from 'src/app/components/menu-panel/menu-panel.component';
import { AuthService } from 'src/app/providers/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private authService: AuthService, private dialog: MatDialog, private router:Router) { }

  dialogRef: MatDialogRef<any> | undefined = undefined
  showMenu: boolean = false
  showMenuPopup(): void {
    this.showMenu = !this.showMenu
  }

  handleLogout(): void {
    console.log('What is this ?');
    this.authService.signOutUser().then((res) => {
      console.log('Res; ', res);
    }).catch((error) => {
      console.log(error);
    })
  }


  openDialog(): void {
    if (this.dialogRef?.getState() === undefined) {
      this.dialogRef = this.dialog.open(MenuPanelComponent,
        {
          hasBackdrop: false,
          position: { top: "63px", left: '', right: '', bottom: '' },
          backdropClass:"backdrop"
        })

      this.dialogRef.componentInstance.handleClose.subscribe((event: Event) => {
        this.dialogRef?.close()
        this.dialogRef = undefined
      })
    }
  }

  handleDisplayingProfile():void{
    this.router.navigate(['dashboard/profile'])
    console.log('Displaying the user profile');
  }
  ngOnInit(): void {


  }

}
