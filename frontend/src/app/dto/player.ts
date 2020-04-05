import {GameRoom} from './gameRoom';

export class Player {
  id: number;
  gameRoom: GameRoom;
  name: string;

  constructor(args: Player = <Player>{}) {
    this.id = args.id;
    this.gameRoom = args.gameRoom;
    this.name = args.name;
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
