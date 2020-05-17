import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {GameRoom} from '../../../../dto/gameRoom';
import {ImagineIfGameRound} from '../../../../dto/imagineIfGameRound';
import {ImagineGameService} from '../../../../services/imagine/imagine-game.service';
import {ImagineIfQuestion} from '../../../../dto/imagineIfQuestion';

@Component({
  selector: 'app-imagine-leaderboard',
  templateUrl: './imagine-leaderboard.component.html',
  styleUrls: ['./imagine-leaderboard.component.css']
})
export class ImagineLeaderboardComponent implements OnInit {

  @Input() gameRoom: GameRoom;
  @Input() submitted = false;
  @Output() submittedChange = new EventEmitter<boolean>();
  answersGameMap = new Map<number, Array<ImagineIfGameRound>>();
  games: Array<ImagineIfGameRound> = [];
  constructor(private gameService: ImagineGameService) { }

  ngOnInit() {
    this.gameService.findByGameRoomAndRound(this.gameRoom.id, this.gameRoom.round).subscribe(
      _games => {
        console.log('found games', _games);
        this.games = _games;

        // map that shows for each Answer a list of Games
        const answerGamesMap = new Map<number, Array<ImagineIfGameRound>>();
        _games.forEach(
          game => {
            const answer = game.answer;
            let gamesForAnswer = answerGamesMap.get(answer);
            if (!gamesForAnswer) {
              gamesForAnswer = new Array<ImagineIfGameRound>();
              answerGamesMap.set(answer, gamesForAnswer);
            }
            gamesForAnswer.push(game);
          });
        this.answersGameMap = new Map<number, Array<ImagineIfGameRound>>();
        for (let key of answerGamesMap.keys()) {
          let lengthKey = answerGamesMap.get(key).length;
          let gamesForKey = this.answersGameMap.get(lengthKey);
          if (!gamesForKey) {
            gamesForKey = new Array<ImagineIfGameRound>();
            this.answersGameMap.set(lengthKey, gamesForKey);
          }
          answerGamesMap.get(key).forEach(
            game => gamesForKey.push(game));
        }
        console.log('this.answersGameMapKeyList', this.answersGameMap);
        console.log('this.answersGameMapKeyList.sort(b-a)', Array.from(this.answersGameMap.keys()).sort((a,b) => b-a));

      }, err => {
        console.error('Error fetching games', err);
      }
    );
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

  getKeys() {
    return Array.from(this.answersGameMap.keys()).sort((a,b) => b-a);
  }
}
