import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private http: HttpClient) {}

  getCurrentRound(): Observable<number> {
    return this.http.get<number>('/api/games/round');
  }
}
