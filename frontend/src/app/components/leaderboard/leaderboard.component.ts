import { Component, OnInit } from '@angular/core';
import {GameService} from '../../services/game.service';
import {GameRound} from '../../dto/gameRound';

@Component({
  selector: 'leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {

  public scoreMap: Map<string, number> = new Map(); // total score across rounds
  public scoresPerRoundMap: Map<number, Map<string, number>> = new Map(); // scores per round

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.gameService.findAll().subscribe(
      games => {
        games.forEach(
          game => {
            let name = game.player.name;
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
        for (let key of this.scoresPerRoundMap.keys()) {
          this.scoresPerRoundMap.set(key, new Map([...this.scoresPerRoundMap.get(key).entries()].sort(function(a:[string,number], b:[string,number]){return b[1]-a[1]})));
        }
        console.log("scoreMap", this.scoreMap);
        this.scoreMap = new Map([...this.scoreMap.entries()].sort(function(a:[string,number], b:[string,number]){return b[1]-a[1]}));
        console.log("games", games);
        console.log("scoreMap", this.scoreMap);
        console.log("scoresPerRoundMap", this.scoresPerRoundMap);
      }, err => {
        console.error(err);
      }
    )
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
}
