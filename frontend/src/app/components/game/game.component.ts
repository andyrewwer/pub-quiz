import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PlayerService} from '../../services/player.service';
import {Player} from '../../dto/player';
import {GameService} from '../../services/game.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {interval, Subscription} from 'rxjs';
import {ModalService} from '../../services/modal.service';
import {GameEventService} from '../../services/game-event.service';
import {GameRoomService} from '../../services/game-room.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit, OnDestroy {

  player: Player;
  submitted = false;
  form: FormGroup;
  roundMap: Map<number, Array<string>> = new Map();
  subscription: Subscription;

  constructor(private builder: FormBuilder,
              private activeRoute: ActivatedRoute,
              private router: Router,
              private playerService: PlayerService,
              private gameService: GameService,
              private gameRoomService: GameRoomService,
              private modalService: ModalService,
              private gameEvent: GameEventService) {
    this.form = builder.group({
      round: [null],
      player: [null],
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
    this.player = this.playerService.getPlayer();
    if (!this.player) {
      this.router.navigate(['/home']);
      return;
      // TODO SHOW ERROR MESSAGE!
    }
    this.form.controls.player.setValue(this.player);
    this.getCurrentRound();
    this.refreshGames();
    this.subscription = interval(1000).subscribe(val => {
      this.getCurrentRound();
    });

    this.gameEvent.on().subscribe(
      gameRound => {
        this.submitted = true;
        this.refreshGames();
        this.form.reset(
          {
            round: this.form.value.round,
            player: this.form.value.player
          });
      });
  }

  private getCurrentRound() {
    this.gameRoomService.getCurrentRound(this.player.gameRoom).subscribe(
      curRound => {
        console.log('NEW ROUND', curRound);
        if (curRound !== this.player.gameRoom.round) {
          this.submitted = false;
          this.form.controls.round.setValue(curRound);
          this.player.gameRoom.round = curRound;
          this.refreshGames();
        }
      });
  }

  refreshGames() {
    // this.gameService.findGameForPlayer(this.player).subscribe(
    this.gameService.findGameForPlayerAndGameRoom(this.player).subscribe(
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
        if (!!this.roundMap.get(this.player.gameRoom.round)) {
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
    this.modalService.showConfirmationModal(this.form.value);
    console.log(this.form);
  }

  roundsLessThanCurrent(): number[] {
    let result = [];
    for (let i = 1; i < this.player.gameRoom.round; i++) {
      result.push(i);
    }
    if (!!this.roundMap.get(this.player.gameRoom.round)) {
      result.push(this.player.gameRoom.round);
    }
    return result;
  }

  getValueForRoundAndAnswer(roundNumber: number, position: number) {
    let round = this.roundMap.get(roundNumber);
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
