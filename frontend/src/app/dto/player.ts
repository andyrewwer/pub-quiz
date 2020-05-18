import {GameRoom} from './gameRoom';

export class Player {
  id: number;
  gameRoom: GameRoom;
  name: string;
  score; number;

  constructor(args: Player = <Player>{}) {
    this.id = args.id;
    this.gameRoom = args.gameRoom;
    this.name = args.name;
    this.score = args.score;
  }
}

export class PlayerJoinRequest {
  id: number;
  quizcode: string;
  name: string;

  constructor(args: PlayerJoinRequest = <PlayerJoinRequest>{}) {
    this.id = args.id;
    this.quizcode = args.quizcode;
    this.name = args.name;
  }
}
