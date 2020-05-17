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

  games: Array<ImagineIfGameRound> = [];
  constructor(private gameService: ImagineGameService) { }

  ngOnInit() {
    this.gameService.findByGameRoomAndRound(this.gameRoom.id, this.gameRoom.round).subscribe(
      _games => {
        console.log('found games', _games);
        this.games = _games;

        const gamesMap = new Map();
        _games.forEach(
          game => {
            let answer = this.scoreMap.get(name);
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
}
