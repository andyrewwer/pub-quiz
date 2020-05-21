import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {interval, Subscription} from 'rxjs';
import {Router} from '@angular/router';
import {PlayerService} from '../../../services/player.service';
import {GameRoomService} from '../../../services/game-room.service';
import {ModalService} from '../../../services/modal.service';
import {QuestionService} from '../../../services/imagine/question.service';
import {FlashMessageService} from '../../../services/flash-message.service';
import {GameRoomStatusTypes} from '../../../dto/enums/gameRoomStatusTypes';

@Component({
  selector: 'app-imagine',
  templateUrl: './imagine.component.html',
  styleUrls: ['./imagine.component.css']
})
export class ImagineComponent implements OnInit, OnDestroy {

  form: FormGroup;
  subscription: Subscription;
  personString = '[person name]';
  timeRemaining = -1;
  showLeaderboard = false;
  prevTime = -1;

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
      question: [null],
      selectedPlayerId: [null]
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
    this.setPersonInQuestionString(player.gameRoom);
    this.getCurrentRound();
    this.subscription = interval(1000).subscribe(val => {
      this.getCurrentRound();
      if (--this.timeRemaining > 0 && this.form.value.gameRoom.status === 'STARTED') {
        this.flashService.updateFlashMessage(this.timeRemaining.toString());
      }
    });
  }

  private getCurrentRound() {
    this.gameRoomService.getCurrentRoundGameRoom(this.form.value.gameRoom).subscribe(
      gameRoom => {
        this.form.controls.gameRoom.setValue(gameRoom);
        if (gameRoom.timeRemaining !== this.prevTime) {
          this.timeRemaining = gameRoom.timeRemaining;
          this.prevTime = gameRoom.timeRemaining;
        }
        this.showLeaderboard = gameRoom.status === GameRoomStatusTypes.FINISHED;
        if (this.showLeaderboard && this.timeRemaining > 0) {
          this.flashService.hideMessage();
        }
        if (gameRoom.round === this.form.value.round) {
          return;
        }
        this.updateCurrentRound(gameRoom.round);
        this.form.controls.selectedPlayerId.setValue(gameRoom.playerId);
        this.setPersonInQuestionString(gameRoom);
      });
  }

  private setPersonInQuestionString(gameRoom) {
    this.playerService.findPlayer(gameRoom.playerId).subscribe(
      player => {
        this.personString = player.name;
      }
    );
  }

  private updateCurrentRound(curRound) {
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

  displayQuestion(question: string): string {
    if (!!question) {
      return question.replace('[person]', this.personString);
    }
    return '';
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.flashService.hideMessage();
  }
}
