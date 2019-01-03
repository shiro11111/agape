import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParishEventsDetailsComponent } from './parish-events-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatIconModule } from '@angular/material';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../../app.reducers';

describe('ParishEventsDetailsComponent', () => {
  let component: ParishEventsDetailsComponent;
  let fixture: ComponentFixture<ParishEventsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParishEventsDetailsComponent ],
      imports: [
        BrowserAnimationsModule,
        MatCardModule,
        MatIconModule,
        StoreModule.forRoot(reducers)
      ]
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
