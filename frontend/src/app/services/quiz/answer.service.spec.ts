import { TestBed } from '@angular/core/testing';

import { QuizAnswerService } from './quiz-answer.service';

describe('AnswerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuizAnswerService = TestBed.get(QuizAnswerService);
    expect(service).toBeTruthy();
  });
});
