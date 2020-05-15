import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {BasicMessageModalComponent} from './basic-message-modal.component';


describe('ErrorGameRoomNotFoundModalComponent', () => {
  let component: BasicMessageModalComponent;
  let fixture: ComponentFixture<BasicMessageModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicMessageModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicMessageModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
