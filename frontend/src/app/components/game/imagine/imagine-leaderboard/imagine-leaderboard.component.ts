import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {GameRoom} from '../../../../dto/gameRoom';
import {ImagineIfGameRound} from '../../../../dto/imagineIfGameRound';
import {ImagineGameService} from '../../../../services/imagine/imagine-game.service';
import {ImagineIfQuestion} from '../../../../dto/imagineIfQuestion';
import {Label} from 'ng2-charts';

@Component({
  selector: 'app-imagine-leaderboard',
  templateUrl: './imagine-leaderboard.component.html',
  styleUrls: ['./imagine-leaderboard.component.css']
})
export class ImagineLeaderboardComponent implements OnInit {

  @Input() gameRoom: GameRoom;
  answerCountGameMap = new Map<number, Array<ImagineIfGameRound>>();

  public labels: Array<Label> = new Array<Label>();
  public data: Array<number> = new Array<number>();
  public backgroundColours: Array<string> = new Array<string>();
  public imagineColors = ['#ff849d', '#64b5ef', '#ffd77b', '#74cdcc', '#ae85ff', '#ffb26a'];

  constructor(private gameService: ImagineGameService) {
  }

  ngOnInit() {
    this.gameService.findByGameRoomAndRound(this.gameRoom.id, this.gameRoom.round).subscribe(
      _games => {
        console.log('found games', _games);
        if (_games.length === 0) {
          /* show some error */
          return;
        }
        // map that shows for each Answer a list of Games
        const answerNumberGamesMap = new Map<number, Array<ImagineIfGameRound>>();
        _games.forEach(
          game => {
            const answer = game.answer;
            let gamesForAnswer = answerNumberGamesMap.get(answer);
            if (!gamesForAnswer) {
              gamesForAnswer = new Array<ImagineIfGameRound>();
              answerNumberGamesMap.set(answer, gamesForAnswer);
            }
            gamesForAnswer.push(game);
          });

        this.updateDataAndLabelsWithQuestion(_games[0].question, answerNumberGamesMap);
        this.answerCountGameMap = new Map<number, Array<ImagineIfGameRound>>();
        for (const key of answerNumberGamesMap.keys()) {
          const lengthKey = answerNumberGamesMap.get(key).length;
          let gamesForKey = this.answerCountGameMap.get(lengthKey);
          if (!gamesForKey) {
            gamesForKey = new Array<ImagineIfGameRound>();
            this.answerCountGameMap.set(lengthKey, gamesForKey);
          }
          answerNumberGamesMap.get(key).forEach(
            game => gamesForKey.push(game));
        }
      }, err => {
        console.error('Error fetching games', err);
      }
    );
  }

  updateDataAndLabelsWithQuestion(question: ImagineIfQuestion, answerNumberGamesMap: Map<number, Array<ImagineIfGameRound>>) {
    const answers = [question.answer1, question.answer2, question.answer3, question.answer4, question.answer5, question.answer6];
    for (let key of answerNumberGamesMap.keys()) {
      this.labels.push(answers[key-1]);
      this.data.push(answerNumberGamesMap.get(key).length);
      this.backgroundColours.push(this.imagineColors[key-1]);
    }
  }

  getAnswerForQuestion(answer: number, question: ImagineIfQuestion): string {
    switch (answer) {
      case 1:
        return question.answer1;
      case 2:
        return question.answer2;
      case 3:
        return question.answer3;
      case 4:
        return question.answer4;
      case 5:
        return question.answer5;
      case 6:
        return question.answer6;
      default:
        return 'no answer provided';
    }
  }

  setTextColor(answer: number): string {
    switch (answer) {
      case 1:
        return 'red-text';
      case 2:
        return 'blue-text';
      case 3:
        return 'yellow-text';
      case 4:
        return 'green-text';
      case 5:
        return 'purple-text';
      case 6:
        return 'orange-text';
      default:
        return '';
    }
  }

  getKeys(): Array<number> {
    return Array.from(this.answerCountGameMap.keys()).sort((a, b) => b - a);
  }

  calculate() {
    this.gameService.calculate(this.gameRoom.id, this.gameRoom.round).subscribe(
      () => console.log('calculate result')
    );
  }

  getNumberOfPoints(game: ImagineIfGameRound): string {
    return game.player.id === game.selectedPlayerId ? '2' : '1';
  }
}

// TODO SCORE for real like timers and stuff

// TODO MAX POINTS
