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

}
