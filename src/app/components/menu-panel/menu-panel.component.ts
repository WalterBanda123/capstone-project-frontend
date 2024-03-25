import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-menu-panel',
  templateUrl: './menu-panel.component.html',
  styleUrls: ['./menu-panel.component.css']
})
export class MenuPanelComponent implements OnInit {


  @Output() handleClose: EventEmitter<Event> = new EventEmitter<Event>()

  closeDialog(event: Event): void {
    this.handleClose.emit(event)
  }


  isTrue: boolean = false
  ngOnInit(): void {
  }

}
