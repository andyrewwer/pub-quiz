import {Component, Input, OnInit} from '@angular/core';
import {ModalService} from '../../../../services/modal.service';
import fx from 'fireworks';
import {GameRoom} from '../../../../dto/gameRoom';
import {Player} from '../../../../dto/player';
import {PlayerService} from '../../../../services/player.service';
import {Router} from '@angular/router';
import {GameRoomService} from '../../../../services/game-room.service';

@Component({
  selector: 'app-imagine-final',
  templateUrl: './imagine-final.component.html',
  styleUrls: ['./imagine-final.component.css']
})
export class ImagineFinalComponent implements OnInit {

  @Input() gameRoom: GameRoom;
  players: Array<Player> = new Array<Player>();
  winningPlayers = new Array<Player>();

  constructor(private modalService: ModalService,
              private playerService: PlayerService,
              private gameRoomService: GameRoomService,
              private router: Router) {
  }

  ngOnInit() {
    this.playerService.findAllForGameRoomOrderByScore(this.gameRoom).subscribe(
      _players => {
        this.players = _players;
        this.winningPlayers = this.findWinner(_players);
        this.celebrateWinners(this.convertPlayersToNames(this.winningPlayers));
      },
      err => {
        console.error(err);
      }
    );
  }

  private convertPlayersToNames(winningPlayers: Player[]) {
    let str = winningPlayers[0].name;
    for (let i = 1; i < winningPlayers.length; i++) {
      str = str + ' and ' + winningPlayers[i].name;
    }
    return str;
  }

  private findWinner(players: Array<Player>) {
    const returnPlayers = new Array<Player>(players[0]);
    for (let i = 1; i < players.length; i++) {
      if (players[i].score === returnPlayers[0].score) {
        returnPlayers.push(players[i]);
      } else {
        return returnPlayers;
      }
    }
    return returnPlayers;
  }

  private celebrateWinners(winner: string) {
    this.modalService.showEndGameModal('Congrats: ' + winner + ' won!');
    this.showFireworks(15);
    setTimeout(() => this.showFireworks(15), 1000);
  }

  private showFireworks(numberOfFireworks: number) {
    const range = n => [...new Array(n)];
    range(numberOfFireworks).map(() =>
      fx({
        x: Math.random() * window.innerWidth / 2 + window.innerWidth / 4,
        y: Math.random() * window.innerWidth / 2 + window.innerWidth / 4,
        colors: ['#cc3333', '#4CAF50', '#81C784', '#09BBA0', '#d9ecfb', '#37F2BA', '#fff5de',
          '#16A0CC', '#ddf2f2', '#1982A1', '#185F7C', '#ebe0ff', '#ffecdb', '#73C2FB', '#40C4FF']
      }));
  }

  nextGame() {
    this.gameRoomService.restartGame(this.gameRoom).subscribe(
      room => console.log(room),
      err => console.error(err)
    );
  }

  leaveGame() {
    this.playerService.leaveGame(this.playerService.getPlayer()).subscribe(
      player => {
        this.playerService.setPlayer(player);
        this.router.navigate(['/home']);
      }, err => {
        console.error(err);
      }
    );
  }
  getClassForPlayer(player: Player) {
    return this.winningPlayers.indexOf(player) != -1 ? 'winner-row' : '';
  }
}
