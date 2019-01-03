import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParishPostsComponent } from './parish-posts.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../../app.reducers';

describe('ParishPostsComponent', () => {
  let component: ParishPostsComponent;
  let fixture: ComponentFixture<ParishPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParishPostsComponent ],
      imports: [
        BrowserAnimationsModule,
        MatCardModule,
        StoreModule.forRoot(reducers)
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParishPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
