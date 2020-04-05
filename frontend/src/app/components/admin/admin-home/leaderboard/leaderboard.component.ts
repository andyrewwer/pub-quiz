import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {GameService} from '../../../../services/game.service';
import {GameRound} from '../../../../dto/gameRound';
import {interval, Subscription} from 'rxjs';
import {GameRoom} from '../../../../dto/gameRoom';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit, OnDestroy {

  @Input() selectedGameRoom: GameRoom;

  public scoreMap: Map<string, number> = new Map(); // total score across rounds
  public scoresPerRoundMap: Map<number, Map<string, number>> = new Map(); // scores per round
  subscription: Subscription;

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.refresh();

    this.subscription = interval(2500).subscribe(val => {
      this.refresh(); });
  }

  private refreshGames(room?: GameRoom) {
    if (!room) {
      room = this.selectedGameRoom;
    }
    this.gameService.findAllForGameRoom(room).subscribe(
      games => {
        this.scoreMap = new Map();
        this.scoresPerRoundMap = new Map();
        games.forEach(
          game => {
            const name = game.player.name;
            let teamScore = this.scoreMap.get(name);
            if (!teamScore) {
              teamScore = 0;
            }
            teamScore += this.numberCorrectAnswers(game);
            this.scoreMap.set(name, teamScore);

            let roundMap = this.scoresPerRoundMap.get(game.round);
            if (!roundMap) {
              roundMap = new Map<string, number>();
            }

            let teamScoreForRound = roundMap.get(name);
            if (!teamScoreForRound) {
              teamScoreForRound = 0;
            }

            teamScoreForRound += this.numberCorrectAnswers(game);
            roundMap.set(name, teamScoreForRound);

            this.scoresPerRoundMap.set(game.round, roundMap);

          }
        );
        this.scoresPerRoundMap = new Map([...this.scoresPerRoundMap.entries()].sort());
        for (const key of this.scoresPerRoundMap.keys()) {
          this.scoresPerRoundMap.set(key, new Map([...this.scoresPerRoundMap.get(key).entries()]
            .sort(function (a: [string, number], b: [string, number]) {
            return b[1] - a[1];
          })));
        }
        this.scoreMap = new Map([...this.scoreMap.entries()]
          .sort(function (a: [string, number], b: [string, number]) {
          return b[1] - a[1];
        }));
        console.log('scoreMap', this.scoreMap);
        console.log('scoresPerRoundMap', this.scoresPerRoundMap);
      }, err => {
        console.error(err);
      });
  }

  public refresh(room?: GameRoom) {
    this.refreshGames(room);
  }

  numberCorrectAnswers(game: GameRound): number {
    let result = 0;
    if (!!game.answer1.correct) {
      result ++;
    } if (!!game.answer2.correct) {
      result ++;
    } if (!!game.answer3.correct) {
      result ++;
    } if (!!game.answer4.correct) {
      result ++;
    } if (!!game.answer5.correct) {
      result ++;
    } if (!!game.answer6.correct) {
      result ++;
    } if (!!game.answer7.correct) {
      result ++;
    } if (!!game.answer8.correct) {
      result ++;
    } if (!!game.answer9.correct) {
      result ++;
    } if (!!game.answer10.correct) {
      result ++;
    } if (!!game.answerTheme.correct) {
      result += 3;
    }
    return result;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
