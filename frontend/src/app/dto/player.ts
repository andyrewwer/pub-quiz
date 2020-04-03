export class Player {
  id: number;
  quizcode: string;
  name: string;

  constructor(args: Player = <Player>{}) {
    this.id = args.id;
    this.quizcode = args.quizcode;
    this.name = args.name;
  }
}
