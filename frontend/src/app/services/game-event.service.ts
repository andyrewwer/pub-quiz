import { Injectable } from '@angular/core';
import {Broadcaster} from './broadcaster';
import {Player} from '../dto/player';
import {Observable} from 'rxjs';
import {GameRound} from '../dto/gameRound';

@Injectable({
  providedIn: 'root'
})
export class GameEventService {

  constructor(private broadcaster: Broadcaster) { }

  fire(game: GameRound): void {
    this.broadcaster.broadcast(GameEventService, game);
  }

  on(): Observable<Player> {
    return this.broadcaster.on<Player>(GameEventService);
  }
}
