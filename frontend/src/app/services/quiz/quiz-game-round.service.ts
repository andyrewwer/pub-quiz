import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {QuizGameRound} from '../../dto/quizGameRound';
import {Player} from '../../dto/player';
import {GameRoom} from '../../dto/gameRoom';

@Injectable({
  providedIn: 'root'
})
export class QuizGameRoundService {

  constructor(private http: HttpClient) {}

  save(gameRoomType: string, gameRound: QuizGameRound): Observable<QuizGameRound> {
    return this.http.post<QuizGameRound>('/api/gameRound/quiz', gameRound);
  }

  findGameForPlayerAndGameRoom(player: Player, gameRoomType: string): Observable<Array<QuizGameRound>> {
    return this.http.get<Array<QuizGameRound>>('/api/gameRound/quiz/player/' + player.id + '/gameRoom/' + player.gameRoom.id);
  }

  findAllForGameRoom(gameRoomType: string, selectedGameRoom: GameRoom): Observable<Array<QuizGameRound>> {
    return this.http.get<Array<QuizGameRound>>('/api/gameRound/quiz/gameRoom/' + selectedGameRoom.id);
  }
}
