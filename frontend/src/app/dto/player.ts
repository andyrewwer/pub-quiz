import {Employee} from './employee';

export class Player {
  id: number;
  roomcode: string;
  name: string;

  constructor(args: Player = <Player>{}) {
    this.id = args.id;
    this.roomcode = args.roomcode;
    this.name = args.name;
  }
}
