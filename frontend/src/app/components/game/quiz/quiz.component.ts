import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PlayerService} from '../../../services/player.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {interval, Subscription} from 'rxjs';
import {ModalService} from '../../../services/modal.service';
import {GameRoomService} from '../../../services/game-room.service';
import {QuizGameRoundService} from '../../../services/quiz/quiz-game-round.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit, OnDestroy {

  submitted = false;
  form: FormGroup;
  roundMap: Map<number, Array<string>> = new Map();
  subscription: Subscription;

  constructor(private builder: FormBuilder,
              private activeRoute: ActivatedRoute,
              private router: Router,
              private playerService: PlayerService,
              private gameService: QuizGameRoundService,
              private gameRoomService: GameRoomService,
              private modalService: ModalService) {
    this.form = builder.group({
      round: [null],
      player: [null],
      type: [null],
      gameRoom: [null],
      answer1: builder.group({
        answer: ['']
      }),
      answer2: builder.group({
        answer: ['']
      }),
      answer3: builder.group({
        answer: ['']
      }),
      answer4: builder.group({
        answer: ['']
      }),
      answer5: builder.group({
        answer: ['']
      }),
      answer6: builder.group({
        answer: ['']
      }),
      answer7: builder.group({
        answer: ['']
      }),
      answer8: builder.group({
        answer: ['']
      }),
      answer9: builder.group({
        answer: ['']
      }),
      answer10: builder.group({
        answer: ['']
      }),
      answerTheme: builder.group({
        answer: ['']
      })
    });
  }

  ngOnInit() {
    const routeParams = this.activeRoute.snapshot.params;
    console.log('RouteParams', routeParams.roomId);
    const player = this.playerService.getPlayer();
    if (!player) {
      this.router.navigate(['/home']);
      this.modalService.showBasicModal('Error', 'Could not find active player. Please join game again!');
      return;
    }
    this.form.controls.player.setValue(player);
    this.form.controls.round.setValue(player.gameRoom.round);
    this.form.controls.type.setValue(player.gameRoom.type);
    this.form.controls.gameRoom.setValue(player.gameRoom);
    this.getCurrentRound();
    this.refreshGames();
    this.subscription = interval(1000).subscribe(val => {
      this.getCurrentRound();
    });
  }

  private getCurrentRound() {
    this.gameRoomService.getCurrentRound(this.form.value.gameRoom).subscribe(
      curRound => {
        if (curRound !== this.form.value.gameRoom.round) {
          console.log('NEW ROUND', curRound);
          this.submitted = false;
          this.form.controls.round.setValue(curRound);
          this.form.value.gameRoom.round = curRound;
          this.refreshGames();
        }
      });
  }

  refreshGames() {
    // this.gameService.findGameForPlayer(this.player).subscribe(
    this.gameService.findGameForPlayerAndGameRoom(this.form.value.player, this.form.value.gameRoom).subscribe(
      games => {
        games.forEach(
          game => {
            let round = this.roundMap.get(game.round);
            if (!round) {
              round = new Array<string>();
            }
            round.push(game.answer1.answer);
            round.push(game.answer2.answer);
            round.push(game.answer3.answer);
            round.push(game.answer4.answer);
            round.push(game.answer5.answer);
            round.push(game.answer6.answer);
            round.push(game.answer7.answer);
            round.push(game.answer8.answer);
            round.push(game.answer9.answer);
            round.push(game.answer10.answer);
            round.push(game.answerTheme.answer);
            this.roundMap.set(game.round, round);
          }
        );
        if (!!this.roundMap.get(this.form.value.gameRoom.round)) {
          this.submitted = true;
        }
        console.log('games', games);
        console.log('roundMap', this.roundMap);
      }, err => {
        console.error(err);
      }
    );
  }

  submit() {
    console.log('Submit form', this.form);
    this.modalService.showConfirmationModal(this.form.value).subscribe(
      result => {
        if (!!result && result) {
          this.submitted = true;
          this.refreshGames();
          this.form.reset(
            {
              round: this.form.value.round,
              player: this.form.value.player,
              type: this.form.value.type,
              gameRoom: this.form.value.gameRoom
            });
        }
      }
    );
  }

  roundsLessThanCurrent(): number[] {
    const result = [];
    for (let i = 1; i < this.form.value.gameRoom.round; i++) {
      result.push(i);
    }
    if (!!this.roundMap.get(this.form.value.gameRoom.round)) {
      result.push(this.form.value.gameRoom.round);
    }
    return result;
  }

  getValueForRoundAndAnswer(roundNumber: number, position: number) {
    const round = this.roundMap.get(roundNumber);
    if (!!round) {
      if (!!round[position]) {
        return round[position];
      }
    }
    return '';
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
