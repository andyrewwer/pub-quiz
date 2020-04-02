import { Injectable } from '@angular/core';
import {Broadcaster} from './broadcaster';
import {Observable} from 'rxjs';
import {Player} from '../dto/player';

@Injectable({
  providedIn: 'root'
})
export class PlayerEventService {

  constructor(private broadcaster: Broadcaster) { }

  fire(player: Player): void {
    this.broadcaster.broadcast(PlayerEventService, player);
  }

  on(): Observable<Player> {
    return this.broadcaster.on<Player>(PlayerEventService);
  }
}
