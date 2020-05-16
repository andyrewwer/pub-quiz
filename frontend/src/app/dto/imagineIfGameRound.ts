import {GameRoom} from './gameRoom';
import {Player} from './player';
import {ImagineIfQuestion} from './imagineIfQuestion';

export class ImagineIfGameRound {
  id: number;
  gameRoom: GameRoom;
  player: Player;
  round: number;
  answer: number;
  question: ImagineIfQuestion;

  constructor(args: ImagineIfGameRound = <ImagineIfGameRound>{}) {
    this.id = args.id;
    this.gameRoom = args.gameRoom;
    this.player = args.player;
    this.round = args.round;
    this.answer = args.answer;
    this.question = args.question;
  }
}
