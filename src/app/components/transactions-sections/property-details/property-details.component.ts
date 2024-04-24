import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css']
})
export class PropertyDetailsComponent implements OnInit {

  constructor(private router: Router) { }
  handleFormOne(form: NgForm): void {
    const data = form.value
    console.log(data);
    this.router.navigate(['/dashboard/features/transactions/transaction-terms'])
  }
  ngOnInit(): void {
  }

}
