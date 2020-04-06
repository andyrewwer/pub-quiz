import { Component, OnInit } from '@angular/core';
import {GameRoom} from '../../../dto/gameRoom';
import {GameRoomService} from '../../../services/game-room.service';
import {MatDialogRef} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'create-game-modal',
  templateUrl: './create-game-modal.component.html',
  styleUrls: ['./create-game-modal.component.css']
})
export class CreateGameModalComponent {

  form: FormGroup;
  constructor(private builder: FormBuilder,
              private gameRoomService: GameRoomService,
              private dialogRef: MatDialogRef<CreateGameModalComponent>){
    this.form = builder.group({
      name: [null, Validators.required],
      type: ['QUIZ', Validators.required],
      code: [null, Validators.required],
    })
  }

  createGame() {
    this.gameRoomService.save(this.form.value).subscribe(
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
