import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {interval, Subscription} from 'rxjs';
import {Router} from '@angular/router';
import {PlayerService} from '../../../services/player.service';
import {GameRoomService} from '../../../services/game-room.service';
import {ModalService} from '../../../services/modal.service';
import {QuestionService} from '../../../services/imagine/question.service';
import {ImagineGameService} from '../../../services/imagine/imagine-game.service';

@Component({
  selector: 'imagine',
  templateUrl: './imagine.component.html',
  styleUrls: ['./imagine.component.css']
})
export class ImagineComponent implements OnInit, OnDestroy {

  submitted = false;
  form: FormGroup;
  subscription: Subscription;

  constructor(private builder: FormBuilder,
              private router: Router,
              private playerService: PlayerService,
              private questionService: QuestionService,
              private gameService: ImagineGameService,
              private gameRoomService: GameRoomService,
              private modalService: ModalService) {
    this.form = builder.group({
      gameRoom: [null],
      player: [null],
      round: [null],
      answer: [null],
      question: [null]
    });
  }

  ngOnInit() {
    const player = this.playerService.getPlayer();
    if (!player) {
      this.router.navigate(['/home']);
      this.modalService.showBasicModal('Error', 'Could not find active player. Please join game again!');
      return;
    }
    this.form.controls.player.setValue(player);
    this.form.controls.gameRoom.setValue(player.gameRoom);
    this.form.controls.question.setValue(player.gameRoom.question);
    this.getCurrentRound();
    this.subscription = interval(1000).subscribe(val => {
      this.getCurrentRound();
    });
  }

  selectAnswer(answerNumber: number) {
    this.form.controls.answer.setValue(answerNumber);
  }
  private getCurrentRound() {
    this.gameRoomService.getCurrentRound(this.form.value.gameRoom).subscribe(
      curRound => {
        if (curRound !== this.form.value.round) {
          console.log('NEW ROUND', curRound);
          this.submitted = false;
          this.form.controls.round.setValue(curRound);
          this.form.value.gameRoom.round = curRound; // TODO WILL THIS WORK?
          this.questionService.findQuestionByGameRoomId(this.form.value.gameRoom.id).subscribe(
            question => {
              this.form.controls.question.setValue(question);
              console.log('QUESTION', question);
              console.log('this.form.value.question', this.form.value.question);
              console.log('this.form.value', this.form.value);
            }, err => {
              console.error(err);
            }
          );
        }
      });
  }

  submit() {
    console.log('Submit form', this.form);
    this.gameService.save(this.form.value).subscribe(
      result => {
        console.log('saved?', result);
        if (!!result && result) {
          this.submitted = true;
          this.form.reset(
            {
              round: this.form.value.round,
              player: this.form.value.player,
              gameRoom: this.form.value.gameRoom,
              question: this.form.value.question,
            });
        }
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  disabled() {
    return this.submitted || !this.form.value.answer; // AND OPTION SELECTED
  }
}
