import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Answer} from '../dto/answer';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {

  constructor(private http: HttpClient) {}

  save(answer: Answer): Observable<Answer> {
    return this.http.post<Answer>('/api/answers', answer);
  }

  findAll(): Observable<Array<Answer>> {
    return this.http.get<Array<Answer>>('/api/answers');
  }
}
