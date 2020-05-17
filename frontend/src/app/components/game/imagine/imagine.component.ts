import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {interval, Subscription} from 'rxjs';
import {Router} from '@angular/router';
import {PlayerService} from '../../../services/player.service';
import {GameRoomService} from '../../../services/game-room.service';
import {ModalService} from '../../../services/modal.service';
import {QuestionService} from '../../../services/imagine/question.service';
import {ImagineGameService} from '../../../services/imagine/imagine-game.service';
import {FlashMessageService} from '../../../services/flash-message.service';

@Component({
  selector: 'imagine',
  templateUrl: './imagine.component.html',
  styleUrls: ['./imagine.component.css']
})
export class ImagineComponent implements OnInit, OnDestroy {

  // TODO SOME SORT OF COUNTDOWN ON SCREEN
    // TODO COUNTDOWN FOR HOW LONG TO ANSWER QUESTION UNTIL WE SEE ANSWER
    // TODO COUNTDOWN UNTIL NEXT QUESTION

  form: FormGroup;
  submitted = false;
  transitioning = false;
  subscription: Subscription;

  constructor(private builder: FormBuilder,
              private router: Router,
              private playerService: PlayerService,
              private modalService: ModalService,
              private gameRoomService: GameRoomService,
              private questionService: QuestionService,
              private flashService: FlashMessageService) {
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

  private getCurrentRound() {
    this.gameRoomService.getCurrentRound(this.form.value.gameRoom).subscribe(
      curRound => {
        if (this.transitioning) {
          return;
        }
        if (curRound === this.form.value.round) {
          return;
        }
        console.log('getCurrentRound');
        if (!!this.form.value.round) {
          this.flashService.updateCountdown(3);
          this.transitioning = true;
          setTimeout(() => {
            this.updateCurrentRound(curRound);
          }, 3000);
        } else {
          this.updateCurrentRound(curRound);
        }

      });
  }

  private updateCurrentRound(curRound) {
    this.submitted = false;
    this.transitioning = false;
    this.form.controls.round.setValue(curRound);
    this.form.value.gameRoom.round = curRound;
    this.questionService.findQuestionByGameRoomId(this.form.value.gameRoom.id).subscribe(
      question => {
        this.form.controls.question.setValue(question);
        this.form.controls.answer.setValue(null);
      }, err => {
        console.error(err);
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}