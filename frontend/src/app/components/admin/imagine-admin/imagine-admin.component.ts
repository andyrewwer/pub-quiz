import {Component, OnDestroy, OnInit} from '@angular/core';
import {GameRoom} from '../../../dto/gameRoom';
import {interval, Subscription} from 'rxjs';
import {GameRoomService} from '../../../services/game-room.service';
import {ModalService} from '../../../services/modal.service';
import {GameRoomTypes} from '../../../dto/enums/gameRoomTypes';

@Component({
  selector: 'app-imagine-admin',
  templateUrl: './imagine-admin.component.html',
  styleUrls: ['./imagine-admin.component.css']
})
export class ImagineAdminComponent implements OnInit, OnDestroy {

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
    this.gameRoomService.findAllForGameType(GameRoomTypes.IMAGINE_IF).subscribe(
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

  createGame() {
    this.modalService.showCreateGameModal(GameRoomTypes.IMAGINE_IF).subscribe(
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
