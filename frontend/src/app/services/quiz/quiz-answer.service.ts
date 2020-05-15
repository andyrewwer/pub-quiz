import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {QuizAnswer} from '../../dto/quizAnswer';

@Injectable({
  providedIn: 'root'
})
export class QuizAnswerService {

  constructor(private http: HttpClient) {}

  save(answer: QuizAnswer): Observable<QuizAnswer> {
    return this.http.post<QuizAnswer>('/api/quiz/answers', answer);
  }
}
