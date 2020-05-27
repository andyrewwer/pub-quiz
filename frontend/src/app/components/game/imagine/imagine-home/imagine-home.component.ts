import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {GameRoom} from '../../../../dto/gameRoom';
import {Player} from '../../../../dto/player';
import {interval, Subscription} from 'rxjs';
import {PlayerService} from '../../../../services/player.service';
import {ModalService} from '../../../../services/modal.service';

@Component({
  selector: 'app-imagine-home',
  templateUrl: './imagine-home.component.html',
  styleUrls: ['./imagine-home.component.css']
})
export class ImagineHomeComponent implements OnInit, OnDestroy {

  @Input() gameRoom: GameRoom;
  players: Array<Player>;
  subscription: Subscription;

  constructor(private modalService: ModalService,
              private playerService: PlayerService) { }

  ngOnInit(): void {
    this.fetchPlayers();

    this.subscription = interval(2500).subscribe(val => {
      this.fetchPlayers();
    });
  }

  private fetchPlayers() {
    this.playerService.findAllForGameRoom(this.gameRoom).subscribe(
      players => this.players = players
    );
  }

  startGame() {
    this.modalService.showStartGameModal(this.gameRoom);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

// TODO MAX POINTS SHOULD BE A VARIABLE ON GAME_ROOM
