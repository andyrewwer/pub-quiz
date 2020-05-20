import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {PlayerService} from '../../../../services/player.service';
import {Player} from '../../../../dto/player';
import {interval, Subscription} from 'rxjs';
import {GameRoom} from '../../../../dto/gameRoom';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit, OnDestroy {

  @Input() selectedGameRoom: GameRoom;

  players: Array<Player>;
  subscription: Subscription;
  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    this.refresh();

    this.subscription = interval(2500).subscribe(val => {
      this.refresh();
    });
  }

  private refreshPlayers(room?: GameRoom) {
    if (!room) {
      room = this.selectedGameRoom;
    }
    this.playerService.findAllForGameRoom(room).subscribe(
      players => this.players = players
    );
  }

  public refresh(room?: GameRoom) {
    this.refreshPlayers(room);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
