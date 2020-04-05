import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorGameRoomNotFoundModalComponent } from './error-game-room-not-found-modal.component';

describe('ErrorGameRoomNotFoundModalComponent', () => {
  let component: ErrorGameRoomNotFoundModalComponent;
  let fixture: ComponentFixture<ErrorGameRoomNotFoundModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorGameRoomNotFoundModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorGameRoomNotFoundModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
