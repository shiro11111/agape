import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityDetailsComponent } from './community-details.component';
import { MatCardModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../../app.reducers';

describe('CommunityDetailsComponent', () => {
  let component: CommunityDetailsComponent;
  let fixture: ComponentFixture<CommunityDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommunityDetailsComponent ],
      imports: [
        MatCardModule,
        BrowserAnimationsModule,
        StoreModule.forRoot(reducers)
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunityDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
