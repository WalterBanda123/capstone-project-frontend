import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-section-one-conflict',
  templateUrl: './section-one-conflict.component.html',
  styleUrls: ['./section-one-conflict.component.css']
})
export class SectionOneConflictComponent implements OnInit {

  constructor(private router: Router) { }

  handleFormOne(form: NgForm): void {
    const data = form.value
    console.log(data);
    this.router.navigate(['/dashboard/features/create-conflict-case/section-two']);
  }
  ngOnInit(): void {
  }

}
