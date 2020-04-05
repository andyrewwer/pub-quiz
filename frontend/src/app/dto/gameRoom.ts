export class GameRoom {
  id: number;
  code: string;
  type: string;
  name: string;

  constructor(args: GameRoom = <GameRoom>{}) {
    this.id = args.id;
    this.code = args.code;
    this.type = args.type;
    this.name = args.name;
  }
}
