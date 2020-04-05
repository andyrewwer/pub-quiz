import { Component, OnInit } from '@angular/core';
import {GameService} from '../../../services/game.service';
import {GameRoom} from '../../../dto/gameRoom';
import {GameRoomService} from '../../../services/game-room.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  round = 0;
  gameRooms: Array<GameRoom>;
  constructor(private gameService: GameService,
              private gameRoomService: GameRoomService) { }

  ngOnInit() {
    this.gameService.getCurrentRound().subscribe(
      curRound => this.round = curRound
    );
    this.findAllGameRooms();
  }

  private findAllGameRooms() {
    this.gameRoomService.findAll().subscribe(
      _gameRooms => {
        console.log("Game Rooms", _gameRooms);
        this.gameRooms = _gameRooms;
      }
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

  createGame() {
    let gameRoom = new GameRoom();
    let name = Math.random().toString(36).substr(2, 6);
    gameRoom.name = name;
    gameRoom.type = 'QUIZ';
    gameRoom.code = name;
    this.gameRoomService.save(gameRoom).subscribe(
      gameRoom => {
        console.log('game room', gameRoom);
        this.findAllGameRooms();
      }, err => {
        console.error(err);
      }
    );
  }

}
