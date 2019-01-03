import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { MatIconModule, MatToolbarModule } from '@angular/material';
import { StoreModule } from '@ngrx/store';
import { reducers } from './app.reducers';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatIconModule,
        MatToolbarModule,
        StoreModule.forRoot(reducers)
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));
});
