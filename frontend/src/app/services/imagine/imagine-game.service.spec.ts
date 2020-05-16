import { TestBed } from '@angular/core/testing';

import { ImagineGameService } from './imagine-game.service';

describe('ImagineGameService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ImagineGameService = TestBed.get(ImagineGameService);
    expect(service).toBeTruthy();
  });
});
