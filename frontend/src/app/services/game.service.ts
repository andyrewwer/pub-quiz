import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {GameRound} from '../dto/gameRound';
import {Player} from '../dto/player';
import {GameRoom} from '../dto/gameRoom';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private http: HttpClient) {}

  save(gameRoomType: string, gameRound: GameRound): Observable<GameRound> {
    return this.http.post<GameRound>('/api/games/' + gameRoomType, gameRound);
  }

  findAll(gameRoomType: string): Observable<Array<GameRound>> {
    return this.http.get<Array<GameRound>>('/api/games/' + gameRoomType);
  }

  findGameForPlayerAndGameRoom(gameRoomType: string, player: Player): Observable<Array<GameRound>> {
    return this.http.get<Array<GameRound>>('/api/games/' + gameRoomType + '/player/' + player.id + '/gameRoom/' + player.gameRoom.id);
  }

  findAllForGameRoom(gameRoomType: string, selectedGameRoom: GameRoom): Observable<Array<GameRound>> {
    return this.http.get<Array<GameRound>>('/api/games/' + gameRoomType + '/gameRoom/' + selectedGameRoom.id);
  }
}
