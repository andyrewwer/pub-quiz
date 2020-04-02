import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PlayerService} from '../../services/player.service';
import {Player} from '../../dto/player';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  private player: Player;

  constructor(private activeRoute: ActivatedRoute,
              private router: Router,
              private playerService: PlayerService) {
  }

  ngOnInit() {
    const routeParams = this.activeRoute.snapshot.params;
    this.player = this.playerService.getPlayer();
    // do something with the parameters
    console.log('roomcode', routeParams.roomcode);
    console.log('player', this.player);
    if (!this.player) {
      this.router.navigate(['/home']);
    }
  }

}
