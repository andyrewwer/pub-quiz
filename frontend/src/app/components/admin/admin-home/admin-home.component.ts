import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  round = 0;
  constructor() { }

  ngOnInit() {
  }

  incrementRound() {
    this.round ++;
  }

  decrementRound() {
    this.round --;
  }
}
