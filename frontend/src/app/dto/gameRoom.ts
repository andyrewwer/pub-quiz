import {GameRoomStatusTypes} from './enums/gameRoomStatusTypes';

export class GameRoom {
  id: number;
  code: string;
  type: string;
  name: string;
  round: number;
  status: GameRoomStatusTypes;
  question: number;
  playerId: number;
  timeRemaining: number;

  constructor(args: GameRoom = <GameRoom>{}) {
    this.id = args.id;
    this.code = args.code;
    this.type = args.type;
    this.name = args.name;
    this.round = args.round;
    this.status = args.status;
    this.question = args.question;
    this.playerId = args.playerId;
    this.timeRemaining = args.timeRemaining;
  }
}
