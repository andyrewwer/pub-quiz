import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {GameRound} from '../dto/gameRound';
import {Player} from '../dto/player';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private http: HttpClient) {}

  getCurrentRound(): Observable<number> {
    return this.http.get<number>('/api/games/round');
  }

  save(gameRound: GameRound): Observable<GameRound> {
    return this.http.post<GameRound>('/api/games', gameRound);
  }

  findAll(): Observable<Array<GameRound>> {
    return this.http.get<Array<GameRound>>('/api/games');
  }
  findAllForRound(round: Number): Observable<Array<GameRound>> {
    return this.http.get<Array<GameRound>>('/api/games/round/' + round);
  }

  findGameForPlayer(player: Player): Observable<Array<GameRound>> {
    return this.http.get<Array<GameRound>>('/api/games/player/' + player.id);
  }
}
