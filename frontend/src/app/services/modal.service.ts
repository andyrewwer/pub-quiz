import { Injectable } from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {ConfirmationModalComponent} from '../components/modals/confirmation-modal/confirmation-modal.component';
import {GameRound} from '../dto/gameRound';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(public dialog: MatDialog) {}

  showConfirmationModal(game: GameRound) {
    const data: MatDialogConfig = {
      data: {
        game: game
      }
    };
    const dialogRef = this.dialog.open(ConfirmationModalComponent, data);
    dialogRef.afterClosed().subscribe(() => {
    });
  }}
