export class GameRoom {
  id: number;
  code: string;
  type: string;
  name: string;
  round: number;
  status: number;

  constructor(args: GameRoom = <GameRoom>{}) {
    this.id = args.id;
    this.code = args.code;
    this.type = args.type;
    this.name = args.name;
    this.round = args.round;
    this.status = args.status;
  }
}
