import {Component, OnInit, ViewChild} from '@angular/core';
import {GameService} from '../../../services/game.service';
import {GameRoom} from '../../../dto/gameRoom';
import {GameRoomService} from '../../../services/game-room.service';
import {AnswerComponent} from './answer/answer.component';
import {LeaderboardComponent} from './leaderboard/leaderboard.component';
import {PlayersComponent} from './players/players.component';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
  @ViewChild(AnswerComponent, null) private childAnswer: AnswerComponent;
  @ViewChild(LeaderboardComponent, null) private childLeaderboard: LeaderboardComponent;
  @ViewChild(PlayersComponent, null) private childPlayers: PlayersComponent;

  gameRooms: Array<GameRoom>;
  selectedGameRoom: GameRoom;
  constructor(private gameService: GameService,
              private gameRoomService: GameRoomService) { }

  ngOnInit() {
    this.findAllGameRooms();
  }

  private findAllGameRooms() {
    this.gameRoomService.findAll().subscribe(
      _gameRooms => {
        console.log('Game Rooms', _gameRooms);
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
      gameRoom => game = gameRoom,
        error => game.round ++
    );
  }

  createGame() {
    const gameRoom = new GameRoom();
    const name = Math.random().toString(36).substr(2, 6).toUpperCase();
    gameRoom.name = name;
    gameRoom.type = 'QUIZ';
    gameRoom.code = name;
    this.gameRoomService.save(gameRoom).subscribe(
      _gameRoom => {
        console.log('game room', _gameRoom);
        this.findAllGameRooms();
      }, err => {
        console.error(err);
      }
    );
  }

  selectGameRoom(room: GameRoom) {
    this.selectedGameRoom = room;
    this.childAnswer.refresh(room);
    this.childLeaderboard.refresh(room);
    this.childPlayers.refresh(room);
  }
}
