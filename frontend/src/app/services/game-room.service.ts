import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {GameRoom} from '../dto/gameRoom';
import {GameRoomTypes} from '../dto/enums/gameRoomTypes';

@Injectable({
  providedIn: 'root'
})
export class GameRoomService {

  constructor(private http: HttpClient) {
  }

  save(gameRoom: GameRoom): Observable<GameRoom> {
    return this.http.post<GameRoom>('/api/gameRooms', gameRoom);
  }

  findAll(): Observable<Array<GameRoom>> {
    return this.http.get<Array<GameRoom>>('/api/gameRooms');
  }

  findAllForGameType(type: GameRoomTypes): Observable<Array<GameRoom>> {
    return this.http.get<Array<GameRoom>>('/api/gameRooms/type/' + type);
  }

  getCurrentRound(gameRoom: GameRoom): Observable<number> {
    return this.http.get<number>('/api/gameRooms/' + gameRoom.id + '/round');
  }

  setCurrentRound(gameRoom: GameRoom, round: number): Observable<GameRoom> {
    return this.http.post<GameRoom>('/api/gameRooms/' + gameRoom.id + '/round/' + round, null);
  }

  getCurrentRoundGameRoom(gameRoom: GameRoom): Observable<GameRoom> {
    return this.http.get<GameRoom>('/api/gameRooms/' + gameRoom.id);
  }

  startGame(gameRoom: GameRoom) {
    return this.http.get<GameRoom>('/api/gameRooms/' + gameRoom.id + '/start');
  }

  restartGame(gameRoom: GameRoom): Observable<GameRoom> {
    return this.http.get<GameRoom>('/api/gameRooms/' + gameRoom.id + '/restart');
  }
}
