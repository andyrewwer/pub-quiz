import {Component, Input, OnInit} from '@angular/core';
import {GameRoom} from '../../../../dto/gameRoom';
import {ImagineIfGameRound} from '../../../../dto/imagineIfGameRound';
import {ImagineGameService} from '../../../../services/imagine/imagine-game.service';
import {ImagineIfQuestion} from '../../../../dto/imagineIfQuestion';
import {Label} from 'ng2-charts';
import {PlayerService} from '../../../../services/player.service';
import {Player} from '../../../../dto/player';

@Component({
  selector: 'app-imagine-leaderboard',
  templateUrl: './imagine-leaderboard.component.html',
  styleUrls: ['./imagine-leaderboard.component.css']
})
export class ImagineLeaderboardComponent implements OnInit {

  @Input() gameRoom: GameRoom;
  answerCountGameMap = new Map<number, Array<ImagineIfGameRound>>();
  playersInGameRoomWithNoAnswers: Array<Player> = new Array<Player>();
  public labels: Array<Label> = new Array<Label>();
  public data: Array<number> = new Array<number>();
  public backgroundColours: Array<string> = new Array<string>();
  public imagineColors = ['#09BBA0', '#37F2BA', '#16A0CC', '#1982A1', '#185F7C', '#73C2FB'];

  constructor(private gameService: ImagineGameService,
              private playerService: PlayerService) {
  }

  ngOnInit() {
    this.gameService.findByGameRoomAndRound(this.gameRoom.id, this.gameRoom.round).subscribe(
      _games => {
        if (_games.length === 0) {
          return;
        }
        this.playerService.findAllForGameRoom(this.gameRoom).subscribe(
          players => {
            players.forEach(
              player => {
                let found = false;
                _games.forEach(
                  game => {
                    if (game.player.id === player.id) {
                      found = true;
                    }
                  });
                  if (!found) {
                    this.playersInGameRoomWithNoAnswers.push(player);
                  }
              });
          }
        );
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
        return 'answer1-text';
      case 2:
        return 'answer2-text';
      case 3:
        return 'answer3-text';
      case 4:
        return 'answer4-text';
      case 5:
        return 'answer5-text';
      case 6:
        return 'answer6-text';
      default:
        return '';
    }
  }

  getKeys(): Array<number> {
    return Array.from(this.answerCountGameMap.keys()).sort((a, b) => b - a);
  }

  getNumberOfPoints(game: ImagineIfGameRound): string {
    return game.player.id === game.selectedPlayerId ? '2' : '1';
  }
}

// TODO SCORE for real like timers and stuff

// TODO MAX POINTS
