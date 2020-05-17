import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagineLeaderboardComponent } from './imagine-leaderboard.component';

describe('ImagineLeaderboardComponent', () => {
  let component: ImagineLeaderboardComponent;
  let fixture: ComponentFixture<ImagineLeaderboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagineLeaderboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagineLeaderboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
