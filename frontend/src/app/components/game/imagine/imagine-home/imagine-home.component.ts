import {Component, Input} from '@angular/core';
import {GameRoomService} from '../../../../services/game-room.service';
import {GameRoom} from '../../../../dto/gameRoom';

@Component({
  selector: 'app-imagine-home',
  templateUrl: './imagine-home.component.html',
  styleUrls: ['./imagine-home.component.css']
})
export class ImagineHomeComponent {

  @Input() gameRoom: GameRoom;

  constructor(private gameRoomService: GameRoomService) { }

  startGame() {
    this.gameRoomService.startGame(this.gameRoom).subscribe(
      () => {
        console.log('startingGame');
      }, err => {
        console.log('Error starting game', err);
      }
    );
  }
}
