import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-basic-error-modal',
  templateUrl: './basic-error-modal.component.html',
  styleUrls: ['./basic-error-modal.component.css']
})
export class BasicErrorModalComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

}
