import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {BasicErrorModalComponent} from './basic-error-modal.component';


describe('ErrorGameRoomNotFoundModalComponent', () => {
  let component: BasicErrorModalComponent;
  let fixture: ComponentFixture<BasicErrorModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicErrorModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicErrorModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
