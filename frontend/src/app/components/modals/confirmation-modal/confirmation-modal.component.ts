import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {GameRound} from '../../../dto/gameRound';
import {GameService} from '../../../services/game.service';
import {GameEventService} from '../../../services/game-event.service';

@Component({
  selector: 'confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.css']
})
export class ConfirmationModalComponent  {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private gameService: GameService,
              private gameEvent: GameEventService,
              private dialogRef: MatDialogRef<ConfirmationModalComponent>) { }

  save () {
    this.gameService.save(this.data.game).subscribe(
      gameRound => {
        console.log('gameRound', new GameRound(this.data.game));
        this.gameEvent.fire(gameRound);
        this.dialogRef.close();
      }, err => {
        console.error(err);
      }
    );
  }

}
