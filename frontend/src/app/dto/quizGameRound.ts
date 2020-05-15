import {Player} from './player';
import {QuizAnswer} from './quizAnswer';
import {GameRoom} from './gameRoom';

export class QuizGameRound {
  id: number;
  round: number;
  player: Player;
  gameRoom: GameRoom;
  answer1: QuizAnswer;
  answer2: QuizAnswer;
  answer3: QuizAnswer;
  answer4: QuizAnswer;
  answer5: QuizAnswer;
  answer6: QuizAnswer;
  answer7: QuizAnswer;
  answer8: QuizAnswer;
  answer9: QuizAnswer;
  answer10: QuizAnswer;
  answerTheme: QuizAnswer;
  type: string;

  constructor(args: QuizGameRound = <QuizGameRound>{}) {
    this.id = args.id;
    this.round = args.round;
    this.player = args.player;
    this.gameRoom = args.gameRoom;
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
