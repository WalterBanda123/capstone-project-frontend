import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/providers/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private authService: AuthService) { }

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
