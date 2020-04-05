import {Injectable} from '@angular/core';
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

  setCurrentRound(round: number): Observable<number> {
    return this.http.post<number>('/api/games/round/' + round, null);
  }

  save(gameRound: GameRound): Observable<GameRound> {
    return this.http.post<GameRound>('/api/games', gameRound);
  }

  findAll(): Observable<Array<GameRound>> {
    return this.http.get<Array<GameRound>>('/api/games');
  }

  findGameForPlayerAndGameRoom(player: Player): Observable<Array<GameRound>> {
    return this.http.get<Array<GameRound>>('/api/games/player/' + player.id + '/gameRoom/' + player.gameRoom.id);
  }
}
