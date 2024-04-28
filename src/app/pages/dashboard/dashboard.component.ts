import { Component, HostListener, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MenuPanelComponent } from 'src/app/components/menu-panel/menu-panel.component';
import { AppDataService } from 'src/app/providers/app-data.service';
import { AuthService } from 'src/app/providers/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private authService: AuthService, private dialog: MatDialog, private router: Router, private appDataService: AppDataService) { }

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
          backdropClass: "backdrop"
        })

      this.dialogRef.componentInstance.handleClose.subscribe((event: Event) => {
        this.dialogRef?.close()
        this.dialogRef = undefined
      })
    }
  }

  photoURL: string | null | undefined = ''
  user: any = {}

  handleDisplayingProfile(): void {
    this.router.navigate(['dashboard/profile'])
    console.log('Displaying the user profile');
  }
  ngOnInit(): void {


    this.authService.userProfile$.subscribe(profile => {
      this.photoURL = profile?.photoURL ?? 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
      this.user = profile
    })

  }

  getInitials(name: string): string {
    if (name) {
      const names = name.split(' ');
      return names.map(n => n[0]).join('').toUpperCase();
    }
    return 'ZW'
  }

  getColor(name: string): string {
    // Here, you can implement a function to generate a color based on the user's name
    // For simplicity, let's use a simple hash function
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    const hue = Math.abs(hash % 360);
    return `hsl(${hue}, 70%, 50%)`; // Use HSL for generating colors
  }


}
