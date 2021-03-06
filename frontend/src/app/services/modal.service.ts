import {Injectable} from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {ConfirmationModalComponent} from '../components/modals/confirmation-modal/confirmation-modal.component';
import {QuizGameRound} from '../dto/quizGameRound';
import {CreateGameModalComponent} from '../components/modals/create-game-modal/create-game-modal.component';
import {Observable} from 'rxjs';
import {BasicMessageModalComponent} from '../components/modals/basic-message-modal/basic-message-modal.component';
import {GameRoomTypes} from '../dto/enums/gameRoomTypes';
import {GameRoom} from '../dto/gameRoom';
import {StartGameModalComponent} from '../components/modals/start-game-modal/start-game-modal.component';
import {EndGameModalComponent} from '../components/modals/end-game-modal/end-game-modal.component';

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

  showCreateGameModal(gameType: GameRoomTypes = GameRoomTypes.QUIZ): Observable<any> {
    const data: MatDialogConfig = {
      data: gameType
    };

    const dialogRef = this.dialog.open(CreateGameModalComponent, data);
    return dialogRef.afterClosed();
  }

  showStartGameModal(gameRoom: GameRoom): Observable<any> {
    const data: MatDialogConfig = {
      data: gameRoom
    };

    const dialogRef = this.dialog.open(StartGameModalComponent, data);
    return dialogRef.afterClosed();
  }

  showEndGameModal(title: string): Observable<any> {
    const data: MatDialogConfig = {
      data: {
        title: title
      }
    };

    const dialogRef = this.dialog.open(EndGameModalComponent, data);
    return dialogRef.afterClosed();
  }
}
