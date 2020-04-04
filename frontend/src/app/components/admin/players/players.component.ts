import { Component, OnInit } from '@angular/core';
import {PlayerService} from '../../../services/player.service';
import {Player} from '../../../dto/player';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  players: Array<Player>;
  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    this.playerService.findAll().subscribe(
      players => this.players = players
    );
  }

}
