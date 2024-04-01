import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-advanced-search',
  templateUrl: './advanced-search.component.html',
  styleUrls: ['./advanced-search.component.css']
})
export class AdvancedSearchComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService) { }
  isSearching: boolean = false
  handleAdvancedSearch(form: NgForm): void {
    this.spinner.show()
    console.log(form.value);
    setTimeout(() => {
      this.spinner.hide()
    }, 1000);
  }
  ngOnInit(): void {
  }

}
