import {Component, OnInit} from '@angular/core';
import {GameService} from '../../services/game.service';
import {GameRound} from '../../dto/gameRound';
import {Answer} from '../../dto/answer';
import {AnswerService} from '../../services/answer.service';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {

  games: Array<GameRound>;
  public roundMap: Map<number, Array<GameRound>> = new Map();
  constructor(private gameService: GameService,
              private answerService: AnswerService) { }

  ngOnInit() {
    this.initializeGames();
  }

  private initializeGames() {
    this.gameService.findAll().subscribe(
      games => {
        this.games = games;
        games.forEach(
          game => {
            let round = this.roundMap.get(game.round);
            if (!round) {
              round = new Array<GameRound>();
            }
            round.push(game);
            this.roundMap.set(game.round, round);
          }
        );
        this.roundMap = new Map([...this.roundMap.entries()].sort());
        console.log('games', games);
        console.log('roundMap', this.roundMap);
      }, err => {
        console.error(err);
      }
    );
  }

  setClass(correct: Boolean) {
    if (correct === null) {
      return 'border-bottom border-right';
    }
    return correct ? 'border-bottom border-right bg-success' : 'border-bottom border-right bg-danger';
  }

  markAnswerAs(answer: Answer, correct: Boolean) {
    answer.correct = correct;
    this.answerService.save(answer).subscribe(
      _answer => {
        answer = _answer;
      }, err => {
        console.error(err);
    }
    );
  }

}
