import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recent-activities',
  templateUrl: './recent-activities.component.html',
  styleUrls: ['./recent-activities.component.css']
})
export class RecentActivitiesComponent implements OnInit {

  constructor(private router: Router) { }
  currentDate: Date = new Date()
  recentRequest: any = {
    title: "Property Title Deed Request",
    description: "Requesting the title deed for Mock Property 123",
    property: "Mock Property 123",
    author: "John Doe",
    cellPhone: "+1 (555) 123-4567",
    requestedBy: "John Doe",
    submittedOn: new Date("2024-03-23"),
    neededByDate: new Date("2024-04-10"),
    requestStatus: "Under Consideration",
    requestValidity: "Valid until 2024-04-10"
  }

  handleCompletingRegistration(id: string): void {
    this.router.navigate(['/dashboard/features/register-property/section-one'], { state: { propertyID: id } })
  }
  ngOnInit(): void {
  }

}
