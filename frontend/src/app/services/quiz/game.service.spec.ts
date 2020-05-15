import { TestBed } from '@angular/core/testing';
import {QuizGameRoundService} from './quiz-game-round.service';


describe('GameService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuizGameRoundService = TestBed.get(QuizGameRoundService);
    expect(service).toBeTruthy();
  });
});
