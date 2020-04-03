import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PlayerService} from '../../services/player.service';
import {Player} from '../../dto/player';
import {GameService} from '../../services/game.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {GameRound} from '../../dto/gameRound';
import {interval, Subscription} from 'rxjs';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit, OnDestroy {

  private player: Player;
  round: number;
  submitted = false;
  public form: FormGroup;
  public roundMap: Map<number, Array<string>> = new Map();
  subscription: Subscription;

  constructor(private builder: FormBuilder,
              private activeRoute: ActivatedRoute,
              private router: Router,
              private playerService: PlayerService,
              private gameService: GameService) {
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
    // const routeParams = this.activeRoute.snapshot.params;
    this.player = this.playerService.getPlayer();
    if (!this.player) {
      this.router.navigate(['/home']);
    }
    this.gameService.getCurrentRound().subscribe(
      curRound => {
        console.log('curRound', curRound);
        this.form.controls.round.setValue(curRound);
        this.round = curRound;
      }
    );
    this.form.controls.player.setValue(this.player);
    this.refreshGames();
    //emit value in sequence every 10 second
    const source = interval(1000);
    this.subscription = source.subscribe(val => {
      this.gameService.getCurrentRound().subscribe(
        curRound => {
          console.log('NEW ROUND', curRound);
          if (curRound !== this.round) {
            this.submitted = false;
            this.form.controls.round.setValue(curRound);
            this.round = curRound;
            this.refreshGames();
          }
        }
      );
      }
    );


  }

  refreshGames() {
    this.gameService.findGameForPlayer(this.player).subscribe(
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
        if (!!this.roundMap.get(this.round)) {
          this.submitted = true;
        }
        console.log("games", games);
        console.log("roundMap", this.roundMap);
      }, err => {
        console.error(err);
      }
    );
  }

  submit() {
    // TODO CONFIRMATION?
    console.log(this.form);
    this.gameService.save(this.form.value).subscribe(
      gameRound => {
        console.log('gameRound', new GameRound(this.form.value));
        this.submitted = true;
        this.refreshGames();
        this.form.reset(
          {
            round: this.round,
            player: this.form.value.player
          }
        );
      }, err => {
        console.error(err);
      }
    );
  }

  roundsLessThanCurrent(): number[] {
    let result = [];
    for(let i = 1; i < this.round; i++) {
      result.push(i);
    }
    if (!!this.roundMap.get(this.round)) {
      result.push(this.round);
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
