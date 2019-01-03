import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParishMainComponent } from './parish-main.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../../app.reducers';
import { MatCardModule, MatExpansionModule, MatTabsModule } from '@angular/material';
import { ParishDisplayComponent } from '../parish-display/parish-display.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

describe('ParishMainComponent', () => {
  let component: ParishMainComponent;
  let fixture: ComponentFixture<ParishMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParishMainComponent, ParishDisplayComponent ],
      imports: [
        StoreModule.forRoot(reducers),
        BrowserAnimationsModule,
        MatTabsModule,
        MatCardModule,
        MatExpansionModule,
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParishMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
