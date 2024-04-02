import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { MapDisplayComponent } from 'src/app/components/map-display/map-display.component';

@Component({
  selector: 'app-advanced-search',
  templateUrl: './advanced-search.component.html',
  styleUrls: ['./advanced-search.component.css']
})
export class AdvancedSearchComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService, private dialog: MatDialog) { }

  isSearching: boolean = false
  handleAdvancedSearch(form: NgForm): void {
    this.spinner.show()
    console.log(form.value);
    setTimeout(() => {
      this.spinner.hide()
    }, 1000);
  }

  handleDisplayOnMap(searchId: any): void {
    //Should grab the coordinates of the item selected and display on map
    //Should do an auto focus
    this.dialog.open(MapDisplayComponent)
  }
  ngOnInit(): void {
  }

}
