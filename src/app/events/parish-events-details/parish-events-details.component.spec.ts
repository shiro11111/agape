import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParishEventsDetailsComponent } from './parish-events-details.component';

describe('ParishEventsDetailsComponent', () => {
  let component: ParishEventsDetailsComponent;
  let fixture: ComponentFixture<ParishEventsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParishEventsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParishEventsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
