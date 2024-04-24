import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.css']
})
export class DocumentationComponent implements OnInit {

  constructor(private router:Router) { }
  handleFormThree(form:NgForm):void{
    const data = form.value
    console.log(data);

    this.router.navigate(['/dashboard/features/transfer-property/additional-notes'])
  }
  ngOnInit(): void {
  }

}
