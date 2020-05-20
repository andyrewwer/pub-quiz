import {Component, Input, OnInit} from '@angular/core';
import {QuizGameRoundService} from '../../../../services/quiz/quiz-game-round.service';
import {QuizGameRound} from '../../../../dto/quizGameRound';
import {QuizAnswer} from '../../../../dto/quizAnswer';
import {QuizAnswerService} from '../../../../services/quiz/quiz-answer.service';
import {GameRoom} from '../../../../dto/gameRoom';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {

  @Input() selectedGameRoom: GameRoom;

  games: Array<QuizGameRound>;
  public roundMap: Map<number, Array<QuizGameRound>> = new Map();

  constructor(private gameService: QuizGameRoundService,
              private answerService: QuizAnswerService) { }

  ngOnInit() {
    this.initializeGames();
  //  TODO see other people's answers / highlight?
  }

  private initializeGames(room?: GameRoom) {
    if (!room) {
      room = this.selectedGameRoom;
    }
    this.gameService.findAllForGameRoom(room.type, room).subscribe(
      games => {
        this.roundMap = new Map();
        this.games = games;
        games.forEach(
          game => {
            let round = this.roundMap.get(game.round);
            if (!round) {
              round = new Array<QuizGameRound>();
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

  markAnswerAs(answer: QuizAnswer, correct: Boolean) {
    answer.correct = correct;
    this.updateAnswer(answer);
  }

  bonusPoint(answer: QuizAnswer) {
    answer.bonus = !answer.bonus;
    this.updateAnswer(answer);
  }

  bonusPointClass(answer: QuizAnswer) {
    return answer.bonus ? 'mr-2 bonus-given' : 'mr-2';
  }

  private updateAnswer(answer: QuizAnswer) {
    this.answerService.save(answer).subscribe(
      _answer => {
        answer = _answer;
      }, err => {
        console.error(err);
      });
    return answer;
  }
}
