import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParishMainComponent } from './parish-main.component';
import { Store, StoreModule } from '@ngrx/store';
import { AppState, reducers } from '../../app.reducers';
import { MatCardModule, MatExpansionModule, MatTabsModule } from '@angular/material';
import { ParishDisplayComponent } from '../parish-display/parish-display.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { SetToolbarContentAction } from '../../toolbar/toolbar.actions';

describe('ParishMainComponent', () => {
  let component: ParishMainComponent;
  let fixture: ComponentFixture<ParishMainComponent>;
  let store: Store<AppState>;

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
    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should load toolbar', () => {
    component.ngOnInit();
    expect(store.dispatch).toHaveBeenCalledWith(new SetToolbarContentAction('Parafia św. Łazarza'));
  });
});
