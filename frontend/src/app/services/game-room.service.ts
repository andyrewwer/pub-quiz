import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {GameRoom} from '../dto/gameRoom';

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
}
