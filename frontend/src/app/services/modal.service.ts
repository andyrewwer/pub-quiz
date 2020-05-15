import { Injectable } from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {ConfirmationModalComponent} from '../components/modals/confirmation-modal/confirmation-modal.component';
import {QuizGameRound} from '../dto/quizGameRound';
import {CreateGameModalComponent} from '../components/modals/create-game-modal/create-game-modal.component';
import {Observable} from 'rxjs';
import {BasicMessageModalComponent} from '../components/modals/basic-error-modal/basic-message-modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(public dialog: MatDialog) {}

  showConfirmationModal(game: QuizGameRound): Observable<any> {
    const data: MatDialogConfig = {
      data: {
        game: game
      }
    };
    const dialogRef = this.dialog.open(ConfirmationModalComponent, data);
    return dialogRef.afterClosed();
  }

  showBasicModal(title: string, message: string): Observable<any> {
    const data: MatDialogConfig = {
      data: {
        title: title,
        message: message
      }
    };

    const dialogRef = this.dialog.open(BasicMessageModalComponent, data);
    return dialogRef.afterClosed();
  }

  showCreateGameModal(): Observable<any> {
    const dialogRef = this.dialog.open(CreateGameModalComponent);
    return dialogRef.afterClosed();
  }
}
