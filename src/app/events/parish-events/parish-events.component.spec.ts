import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParishEventsComponent } from './parish-events.component';

describe('ParishEventsComponent', () => {
  let component: ParishEventsComponent;
  let fixture: ComponentFixture<ParishEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParishEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParishEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
