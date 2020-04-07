import { Injectable } from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {ConfirmationModalComponent} from '../components/modals/confirmation-modal/confirmation-modal.component';
import {GameRound} from '../dto/gameRound';
import {CreateGameModalComponent} from '../components/modals/create-game-modal/create-game-modal.component';
import {Observable} from 'rxjs';
import {BasicErrorModalComponent} from '../components/modals/basic-error-modal/basic-error-modal.component';

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

  showErrorGameRoomNotFoundModal(message: string): Observable<any> {
    const data: MatDialogConfig = {
      data: {
        message: message
      }
    };

    const dialogRef = this.dialog.open(BasicErrorModalComponent, data);
    return dialogRef.afterClosed();
  }

  showCreateGameModal(): Observable<any> {
    const dialogRef = this.dialog.open(CreateGameModalComponent);
    return dialogRef.afterClosed();
  }
}
