import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParishEventsDetailsComponent } from './parish-events-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatIconModule } from '@angular/material';
import { Store, StoreModule } from '@ngrx/store';
import { AppState, reducers } from '../../app.reducers';
import { LoadEventDetails, LoadEventDetailsSuccess } from '../parish.actions';
import { first } from 'rxjs/operators';
import { SetToolbarContentAction } from '../../toolbar/toolbar.actions';

describe('ParishEventsDetailsComponent', () => {
  let component: ParishEventsDetailsComponent;
  let fixture: ComponentFixture<ParishEventsDetailsComponent>;
  let store: Store<AppState>;

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
    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();

    store.dispatch(new LoadEventDetailsSuccess({
      id: 1,
      title: 'Nazwa wydarzenia',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac orci non ligula fringilla malesuada. Proin malesuada, ' +
        'sapien in finibus rhoncus, sapien neque ornare justo, et volutpat nulla ante eu orci.',
      organizationAt: '12-12-2018',
      image: null,
      parish: {
        image: {
          id: 1,
          imageName: 'bla',
          imageSize: 1,
          updatedAt: 'alala',
          extension: 'sadjkajc',
          discriminator: 'jnjdhfj'
        }
      },
      community: null,
      tags: [
        {
          id: 5,
          name: 'drogakrzyzowa'
        }]
        })
      );
    })

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should load events details', () => {
    component.ngOnInit();
    expect(store.dispatch).toHaveBeenCalledWith(new LoadEventDetails());
    component.eventDetails$.pipe(first()).subscribe(data => {
      expect(data).toBeDefined();
    });
    expect(store.dispatch).toHaveBeenCalledWith(new SetToolbarContentAction('Wydarzenie'));
  });
});
