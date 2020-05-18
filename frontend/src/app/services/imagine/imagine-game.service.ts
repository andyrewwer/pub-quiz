import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ImagineIfGameRound} from '../../dto/imagineIfGameRound';

@Injectable({
  providedIn: 'root'
})
export class ImagineGameService {

  constructor(private http: HttpClient) {}

  save(game: ImagineIfGameRound): Observable<ImagineIfGameRound> {
    return this.http.post<ImagineIfGameRound>('/api/gameRound/imagine', game);
  }

  findByPlayerAndRound(playerId: number, round: number): Observable<ImagineIfGameRound> {
    return this.http.get<ImagineIfGameRound>('/api/gameRound/imagine/player/' + playerId + '/round/' + round);
  }

  findByGameRoomAndRound(gameRoomId: number, round: number): Observable<Array<ImagineIfGameRound>> {
    return this.http.get<Array<ImagineIfGameRound>>('/api/gameRound/imagine/gameRoom/' + gameRoomId + '/round/' + round);
  }

  calculate(gameRoomId: number, round: number) {
    return this.http.get('/api/gameRound/imagine/gameRoom/' + gameRoomId + '/round/' + round + '/calculate' );
  }
}
