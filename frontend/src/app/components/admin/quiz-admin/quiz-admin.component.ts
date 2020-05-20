import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {AnswerComponent} from './answer/answer.component';
import {LeaderboardComponent} from './leaderboard/leaderboard.component';
import {PlayersComponent} from './players/players.component';
import {GameRoom} from '../../../dto/gameRoom';
import {GameRoomService} from '../../../services/game-room.service';
import {ModalService} from '../../../services/modal.service';
import {GameRoomTypes} from '../../../dto/enums/gameRoomTypes';
import {interval, Subscription} from 'rxjs';

@Component({
  selector: 'app-quiz-admin',
  templateUrl: './quiz-admin.component.html',
  styleUrls: ['./quiz-admin.component.css']
})
export class QuizAdminComponent implements OnInit, OnDestroy {
  @ViewChild(AnswerComponent, null) private childAnswer: AnswerComponent;
  @ViewChild(LeaderboardComponent, null) private childLeaderboard: LeaderboardComponent;
  @ViewChild(PlayersComponent, null) private childPlayers: PlayersComponent;
  selectedGameRoom: GameRoom;
  gameRooms: Array<GameRoom>;

  subscription: Subscription;

  constructor(private gameRoomService: GameRoomService,
              private modalService: ModalService) { }

  ngOnInit() {
    this.findAllGameRooms();

    this.subscription = interval(5000).subscribe(val => {
      this.findAllGameRooms();
    });
  }

  private findAllGameRooms() {
    this.gameRoomService.findAllForGameType(GameRoomTypes.QUIZ).subscribe(
      _gameRooms => {
        console.log('Game Rooms', _gameRooms);
        this.gameRooms = _gameRooms;
      }
    );
  }

  selectGameRoom(room: GameRoom) {
    this.selectedGameRoom = room;
    if (!!this.childAnswer) {
      this.childAnswer.refresh(room);
      this.childLeaderboard.refresh(room);
      this.childPlayers.refresh(room);
    }
  }

  incrementRound(game: GameRoom) {
    this.gameRoomService.setCurrentRound(game, ++game.round).subscribe(
      gameRoom => {
        game = gameRoom;
      }, error => {
        console.log(error);
        game.round--;
        this.modalService.showBasicModal('Error', 'Sorry, we failed to increment round. Try again later please');
      }
    );
  }

  createGame() {
    this.modalService.showCreateGameModal().subscribe(
      success => {
        if (!!success && success) {
          this.findAllGameRooms();
        }
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
