import {Component, OnInit} from '@angular/core';
import {Player} from '../../dto/player';
import {PlayerEventService} from '../../services/player-event.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  player: Player;
  constructor(private playerEventService: PlayerEventService) { }

  ngOnInit() {
    this.playerEventService.on().subscribe(
      _player => this.player = _player
    );
  }

}
