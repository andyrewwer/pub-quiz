import {Component, Input, OnInit} from '@angular/core';
import {GameRoom} from '../../../dto/gameRoom';
import {Player} from '../../../dto/player';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.css']
})
export class LobbyComponent implements OnInit {

  @Input() player: Player;

  constructor() { }

  ngOnInit() {
  }

}
