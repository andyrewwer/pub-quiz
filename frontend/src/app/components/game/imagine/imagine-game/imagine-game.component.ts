import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {interval, Subscription} from 'rxjs';
import {ImagineGameService} from '../../../../services/imagine/imagine-game.service';
import {GameRoomService} from '../../../../services/game-room.service';
import {QuestionService} from '../../../../services/imagine/question.service';

@Component({
  selector: 'app-imagine-game',
  templateUrl: './imagine-game.component.html',
  styleUrls: ['./imagine-game.component.css']
})
export class ImagineGameComponent implements OnInit {

  @Input() form: FormGroup;
  @Output() formChange = new EventEmitter<FormGroup>();
  @Input() submitted = false;
  @Output() submittedChange = new EventEmitter<boolean>();


  constructor(private gameService: ImagineGameService) { }

  ngOnInit() {
    this.checkForExistingAnswer(this.form.value.round);
    this.form.controls.round.valueChanges.subscribe(
      round => {
        console.log('SUBSCRIBED TO CHANGE TO ROUND', round);
        this.checkForExistingAnswer(round);
      }
    );
  }

  selectAnswer(answerNumber: number) {
    if (this.submitted) {
      return;
    }
    this.form.controls.answer.setValue(answerNumber);

  }

// TODO DOES NOT WORK BELOW
// WHEN PREVIOUS NOT ANSWERED BUT CURRENT IS
  private checkForExistingAnswer(curRound) {
    if (!this.form.value.player || !curRound) {
      return;
    }
    this.gameService.findByPlayerAndRound(this.form.value.player.id, curRound).subscribe(
      round => {
        if (!!round) {
          this.setSubmitted(true);
          this.form.controls.answer.setValue(round.answer);
        }
      }, err => {
        console.error(err);
      }
    );
  }

  submit() {
    this.gameService.save(this.form.value).subscribe(
      result => {
        if (!!result && result) {
          this.setSubmitted(true);
          this.setForm(this.form);
        }
      }
    );
  }

  disabled() {
    return this.submitted || !this.form.value.answer;
  }

  setSelectedClass(answer: number) {
    return this.form.value.answer === answer ? this.submitted ? 'final-choice' : 'table-info' : '';
  }

  setSubmitted(_submitted: boolean) {
    this.submitted = _submitted;
    this.submittedChange.emit(this.submitted);
  }

  setForm(_form: FormGroup) {
    this.form = _form;
    this.formChange.emit(this.form);
  }
}
