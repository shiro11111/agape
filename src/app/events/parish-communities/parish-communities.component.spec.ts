import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParishCommunitiesComponent } from './parish-communities.component';
import { MatCardModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Store, StoreModule } from '@ngrx/store';
import { AppState, reducers } from '../../app.reducers';

describe('ParishCommunitiesComponent', () => {
  let component: ParishCommunitiesComponent;
  let fixture: ComponentFixture<ParishCommunitiesComponent>;
  let store: Store<AppState>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ParishCommunitiesComponent],
      imports: [
        BrowserAnimationsModule,
        MatCardModule,
        StoreModule.forRoot(reducers)
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    store = TestBed.get(Store)
    fixture = TestBed.createComponent(ParishCommunitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

});


