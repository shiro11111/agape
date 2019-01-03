import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunitiesDisplayComponent } from './communities-display.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatExpansionModule } from '@angular/material';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../../app.reducers';

describe('CommunitiesDisplayComponent', () => {
  let component: CommunitiesDisplayComponent;
  let fixture: ComponentFixture<CommunitiesDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommunitiesDisplayComponent ],
      imports: [
        BrowserAnimationsModule,
        MatCardModule,
        MatExpansionModule,
        StoreModule.forRoot(reducers)
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunitiesDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
