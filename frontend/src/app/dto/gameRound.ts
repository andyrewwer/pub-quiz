import {Player} from './player';
import {Answer} from './answer';

export class GameRound {
  id: number;
  round: number;
  player: Player;
  answer1: Answer;
  answer2: Answer;
  answer3: Answer;
  answer4: Answer;
  answer5: Answer;
  answer6: Answer;
  answer7: Answer;
  answer8: Answer;
  answer9: Answer;
  answer10: Answer;
  answerTheme: Answer;
  type: string;

  constructor(args: GameRound = <GameRound>{}) {
    this.id = args.id;
    this.round = args.round;
    this.player = args.player;
    this.answer1 = args.answer1;
    this.answer2 = args.answer2;
    this.answer3 = args.answer3;
    this.answer4 = args.answer4;
    this.answer5 = args.answer5;
    this.answer6 = args.answer6;
    this.answer7 = args.answer7;
    this.answer8 = args.answer8;
    this.answer9 = args.answer9;
    this.answer10 = args.answer10;
    this.answerTheme = args.answerTheme;
    this.type = args.type;
  }

}
