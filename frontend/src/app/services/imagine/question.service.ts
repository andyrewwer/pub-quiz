import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ImagineIfQuestion} from '../../dto/imagineIfQuestion';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) {}

  save(question: ImagineIfQuestion): Observable<ImagineIfQuestion> {
    return this.http.post<ImagineIfQuestion>('/api/gameRound/imagine/question', question);
  }

  findAll(): Observable<Array<ImagineIfQuestion>> {
    return this.http.get<Array<ImagineIfQuestion>>('/api/gameRound/imagine/questions');
  }

  findQuestionById(questionId: number): Observable<ImagineIfQuestion> {
    return this.http.get<ImagineIfQuestion>('/api/gameRound/imagine/question/' + questionId);
  }

  findQuestionByGameRoomId(gameRoomId: number): Observable<ImagineIfQuestion> {
    return this.http.get<ImagineIfQuestion>('/api/gameRound/imagine/question/gameRoom/' + gameRoomId);
  }
}
