import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunitiesMainComponent } from './communities-main.component';
import { StoreModule } from '@ngrx/store';
import { AppState, reducers } from '../../app.reducers';
import { MatCardModule, MatExpansionModule, MatTabsModule } from '@angular/material';
import { CommunitiesDisplayComponent } from '../communities-display/communities-display.component';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('CommunitiesMainComponent', () => {
  let component: CommunitiesMainComponent;
  let fixture: ComponentFixture<CommunitiesMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CommunitiesMainComponent, CommunitiesDisplayComponent],
      imports: [
        StoreModule.forRoot(reducers),
        BrowserAnimationsModule,
        MatTabsModule,
        MatExpansionModule,
        MatCardModule,
        RouterTestingModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunitiesMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display nav links', () => {
    expect(component.navLinks).toEqual([
      { path: 'tab1', label: 'Item1' },
      { path: 'tab2', label: 'Item2' },
      { path: 'tab3', label: 'Item3' }
    ]);
  });
});
