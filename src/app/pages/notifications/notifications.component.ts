import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  constructor() { }

  deedRequestColumns: string[] = ['checkbox', 'request', 'property', 'owner', 'createdAt', 'status']
  ngOnInit(): void {

  }

}
