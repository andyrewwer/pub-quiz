import { Component, OnInit } from '@angular/core';
import {GameService} from '../../../services/game.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  round = 0;
  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.gameService.getCurrentRound().subscribe(
      curRound => this.round = curRound
    );
  }

  incrementRound() {
    this.gameService.setCurrentRound(++this.round).subscribe(
      curRound => this.round = curRound
    );
  }

  decrementRound() {
    this.gameService.setCurrentRound(--this.round).subscribe(
      curRound => this.round = curRound
    );
  }
}
