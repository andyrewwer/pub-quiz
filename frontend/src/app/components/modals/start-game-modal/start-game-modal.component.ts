import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {GameRoomService} from '../../../services/game-room.service';

@Component({
  selector: 'app-start-game-modal',
  templateUrl: './start-game-modal.component.html',
  styleUrls: ['./start-game-modal.component.css']
})
export class StartGameModalComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private gameRoomService: GameRoomService,
              private dialogRef: MatDialogRef<StartGameModalComponent>) {
  }

  startGame () {
    this.gameRoomService.startGame(this.data).subscribe(
      () => {
        this.dialogRef.close(true);
      }, err => {
        this.dialogRef.close(false);
        console.error(err);
      }
    );
  }

}
