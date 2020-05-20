import {Component, OnInit} from '@angular/core';
import {GameRoom} from '../../../dto/gameRoom';
import {GameRoomService} from '../../../services/game-room.service';
import {ModalService} from '../../../services/modal.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
  gameRooms: Array<GameRoom>;
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
        game = gameRoom;
      }, error => {
        console.log(error);
        game.round--;
        this.modalService.showBasicModal('Error', 'Sorry, we failed to increment round. Try again later please');
      }
    );
  }

  decrementRound(game: GameRoom) {
    this.gameRoomService.setCurrentRound(game, --game.round).subscribe(
      gameRoom => game = gameRoom,
        error => {
          console.log(error);
          game.round ++;
          this.modalService.showBasicModal('Error', 'Sorry, we failed to decrement round. Try again later please');
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

  refresh() {
    this.findAllGameRooms();
  }
}
