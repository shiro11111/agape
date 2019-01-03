import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParishEventsComponent } from './parish-events.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../../app.reducers';
import { RouterTestingModule } from '@angular/router/testing';

describe('ParishEventsComponent', () => {
  let component: ParishEventsComponent;
  let fixture: ComponentFixture<ParishEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParishEventsComponent ],
      imports: [
        BrowserAnimationsModule,
        MatCardModule,
        RouterTestingModule,
        StoreModule.forRoot(reducers)
      ]
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
