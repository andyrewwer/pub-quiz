import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Player, PlayerJoinRequest} from '../dto/player';
import {Observable} from 'rxjs';
import {GameRoom} from '../dto/gameRoom';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private currentPlayer: Player;

  constructor(private http: HttpClient) {
  }

  save(playerJoinRequest: PlayerJoinRequest): Observable<Player> {
    return this.http.post<Player>('/api/players', playerJoinRequest);
  }

  findAll(): Observable<Array<Player>> {
    return this.http.get<Array<Player>>('/api/players');
  }

  findAllForGameRoom(selectedGameRoom: GameRoom):  Observable<Array<Player>> {
    return this.http.get<Array<Player>>('/api/players/gameRoom/' + selectedGameRoom.id);
  }

  getPlayer(): Player {
    return this.currentPlayer;
  }

  setPlayer(player: Player) {
    this.currentPlayer = player;
  }
}
