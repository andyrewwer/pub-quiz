import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-basic-message-modal',
  templateUrl: './basic-message-modal.component.html',
  styleUrls: ['./basic-message-modal.component.css']
})
export class BasicMessageModalComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

}
