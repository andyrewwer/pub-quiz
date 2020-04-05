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

  gameRooms: Array<GameRoom>;
  constructor(private gameService: GameService,
              private gameRoomService: GameRoomService) { }

  ngOnInit() {
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

  incrementRound(game: GameRoom) {
    this.gameRoomService.setCurrentRound(game, ++game.round).subscribe(
      gameRoom => {
        console.log('game', game);
        console.log('gameRoom', gameRoom);
        game = gameRoom;
      }, error => game.round--
    );
  }

  decrementRound(game: GameRoom) {
    this.gameRoomService.setCurrentRound(game, --game.round).subscribe(
      gameRoom => game = gameRoom
    ), error => game.round ++;
  }

  createGame() {
    let gameRoom = new GameRoom();
    let name = Math.random().toString(36).substr(2, 6).toUpperCase();
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
