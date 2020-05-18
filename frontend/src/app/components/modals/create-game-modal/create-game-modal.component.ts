import {Component} from '@angular/core';
import {GameRoomService} from '../../../services/game-room.service';
import {MatDialogRef} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {GameRoomTypes} from '../../../dto/enums/gameRoomTypes';
import gameRoomTypes = GameRoomTypes.gameRoomTypes;
import {GameRoom} from '../../../dto/gameRoom';

@Component({
  selector: 'app-create-game-modal',
  templateUrl: './create-game-modal.component.html',
  styleUrls: ['./create-game-modal.component.css']
})
export class CreateGameModalComponent {
  types = gameRoomTypes;

  form: FormGroup;
  constructor(private builder: FormBuilder,
              private gameRoomService: GameRoomService,
              private dialogRef: MatDialogRef<CreateGameModalComponent>) {
    this.form = builder.group({
      name: [null, Validators.required],
      type: ['QUIZ', Validators.required],
      code: [null, [Validators.required, Validators.minLength(4), Validators.maxLength(4)]],
    });
  }

  createGame() {
    const gameRoom: GameRoom = this.form.value;
    gameRoom.code = gameRoom.code.toUpperCase();
    this.gameRoomService.save(gameRoom).subscribe(
      _gameRoom => {
        console.log('created game room', _gameRoom);
        this.dialogRef.close(true);
      }, err => {
        console.error(err);
      }
    );
  }

  generateCode() {
    this.form.controls.code.setValue(Math.random().toString(36).substr(2, 4).toUpperCase());
  }
}
