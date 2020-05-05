import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {GameService} from '../../../services/game.service';

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.css']
})
export class ConfirmationModalComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private gameService: GameService,
              private dialogRef: MatDialogRef<ConfirmationModalComponent>) { }

  save () {
    this.gameService.save(this.data.game.player.gameRoom.type, this.data.game).subscribe(
      () => {
        this.dialogRef.close(true);
      }, err => {
        this.dialogRef.close(false);
        console.error(err);
      }
    );
  }

}
