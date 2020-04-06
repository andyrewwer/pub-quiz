import {Component, OnInit, ViewChild} from '@angular/core';
import {GameRoom} from '../../../dto/gameRoom';
import {GameRoomService} from '../../../services/game-room.service';
import {AnswerComponent} from './answer/answer.component';
import {LeaderboardComponent} from './leaderboard/leaderboard.component';
import {PlayersComponent} from './players/players.component';
import {ModalService} from '../../../services/modal.service';

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
  constructor(private gameRoomService: GameRoomService,
              private modalService: ModalService) { }

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
      }, error => {
        game.round--;
        // TODO show error
      }
    );
  }

  decrementRound(game: GameRoom) {
    this.gameRoomService.setCurrentRound(game, --game.round).subscribe(
      gameRoom => game = gameRoom,
        error => {
        game.round ++;
          // TODO show error
        }
    );
  }

  createGame() {
    // TODO create with game-name -- modal?
    this.modalService.showCreateGameModal().subscribe(
      success => {
        if (!!success && success) {
          this.findAllGameRooms();
        }
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
