import {Component, OnDestroy, OnInit} from '@angular/core';
import {PlayerService} from '../../../services/player.service';
import {Player} from '../../../dto/player';
import {interval, Subscription} from 'rxjs';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit, OnDestroy {

  players: Array<Player>;
  subscription: Subscription;
  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    this.playerService.findAll().subscribe(
      players => this.players = players
    );

    this.subscription = interval(2500).subscribe(val => {
      this.playerService.findAll().subscribe(
        players => this.players = players
      );
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
