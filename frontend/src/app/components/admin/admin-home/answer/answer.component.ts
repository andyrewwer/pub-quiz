import {Component, Input, OnInit} from '@angular/core';
import {GameService} from '../../../../services/game.service';
import {GameRound} from '../../../../dto/gameRound';
import {Answer} from '../../../../dto/answer';
import {AnswerService} from '../../../../services/answer.service';
import {GameRoom} from '../../../../dto/gameRoom';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {

  @Input() selectedGameRoom: GameRoom;

  games: Array<GameRound>;
  public roundMap: Map<number, Array<GameRound>> = new Map();

  constructor(private gameService: GameService,
              private answerService: AnswerService) { }

  ngOnInit() {
    this.initializeGames();
  //  TODO see other people's answers / highlight?
  }

  private initializeGames(room?: GameRoom) {
    if (!room) {
      room = this.selectedGameRoom;
    }
    this.gameService.findAllForGameRoom(room).subscribe(
      games => {
        this.roundMap = new Map();
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

  public refresh(room?: GameRoom) {
    console.log('REFRESH CALLED');
    this.initializeGames(room);
  }

  setClass(correct: Boolean) {
    if (correct === null) {
      return 'border-bottom border-right';
    }
    return correct ? 'border-bottom border-right bg-success' : 'border-bottom border-right bg-danger';
  }

  markAnswerAs(answer: Answer, correct: Boolean) {
    answer.correct = correct;
    this.updateAnswer(answer);
  }

  bonusPoint(answer: Answer) {
    answer.bonus = !answer.bonus;
    this.updateAnswer(answer);
  }

  bonusPointClass(answer: Answer) {
    return answer.bonus ? 'mr-2 bonus-given' : 'mr-2';
  }

  private updateAnswer(answer: Answer) {
    this.answerService.save(answer).subscribe(
      _answer => {
        answer = _answer;
      }, err => {
        console.error(err);
      });
    return answer;
  }
}
