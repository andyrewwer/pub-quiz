import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashMessageComponentComponent } from './flash-message-component.component';

describe('FlashMessageComponentComponent', () => {
  let component: FlashMessageComponentComponent;
  let fixture: ComponentFixture<FlashMessageComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlashMessageComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlashMessageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
