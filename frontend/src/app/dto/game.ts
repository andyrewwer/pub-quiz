import {Player} from './player';

export class Game {
  id: number;
  player1: Player;
  player2: Player;
  player1Score: number;
  player2Score: number;
  winner: Player;
  round: number;

  constructor(args: Game = <Game>{}) {
    this.id = args.id;
    this.player1 = args.player1;
    this.player2 = args.player2;
    this.player1Score = args.player1Score;
    this.player2Score = args.player2Score;
    this.winner = args.winner;
    this.round = args.round;
  }

}
