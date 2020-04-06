import { Injectable } from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {ConfirmationModalComponent} from '../components/modals/confirmation-modal/confirmation-modal.component';
import {GameRound} from '../dto/gameRound';
// tslint:disable-next-line:max-line-length
import {ErrorGameRoomNotFoundModalComponent} from '../components/modals/error-game-room-not-found-modal/error-game-room-not-found-modal.component';
import {CreateGameModalComponent} from '../components/modals/create-game-modal/create-game-modal.component';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(public dialog: MatDialog) {}

  showConfirmationModal(game: GameRound): Observable<any> {
    const data: MatDialogConfig = {
      data: {
        game: game
      }
    };
    const dialogRef = this.dialog.open(ConfirmationModalComponent, data);
    return dialogRef.afterClosed();
  }

  showErrorGameRoomNotFoundModal(): Observable<any> {
    const dialogRef = this.dialog.open(ErrorGameRoomNotFoundModalComponent);
    return dialogRef.afterClosed();
  }

  showCreateGameModal(): Observable<any> {
    const dialogRef = this.dialog.open(CreateGameModalComponent);
    return dialogRef.afterClosed();
  }
}
