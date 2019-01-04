import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParishEventsComponent } from './parish-events.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material';
import { Store, StoreModule } from '@ngrx/store';
import { AppState, reducers } from '../../app.reducers';
import { RouterTestingModule } from '@angular/router/testing';
import { LoadEventsList, LoadEventsListSuccess } from '../parish.actions';
import { first } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';

describe('ParishEventsComponent', () => {
  let component: ParishEventsComponent;
  let fixture: ComponentFixture<ParishEventsComponent>;
  let store: Store<AppState>;
  let route: ActivatedRoute;

  const spyObj = jasmine.createSpyObj('Router', ['navigate']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParishEventsComponent ],
      imports: [
        BrowserAnimationsModule,
        MatCardModule,
        RouterTestingModule,
        StoreModule.forRoot(reducers)
      ],
      providers: [
        { provide: Router, useValue: spyObj},
        { provide: ActivatedRoute, useValue: {
          params: of({id: 1})
          }}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    store = TestBed.get(Store);
    fixture = TestBed.createComponent(ParishEventsComponent);
    route = TestBed.get(ActivatedRoute);
    component = fixture.componentInstance;
    fixture.detectChanges();

    spyOn(store, 'dispatch').and.callThrough();

    store.dispatch(new LoadEventsListSuccess({
      maxResults: '5',
      subscriptions: [
        1,
        2,
        3,
        4
      ],
      items: [
        {
          id: 1,
          title: 'Droga krzyżowa',
          description: 'ajdhjkasbckds',
          organizationAt: 'Lublin 19.11.2019',
          image: null,
          parish: {
            id: 1,
            image: {
              id: 1,
              imageName: 'img_46552314_75e38578020fba81864216ec248f711f',
              imageSize: 22,
              updatedAt: '2018-12-11',
              extension: 'jpeg',
              discriminator: 'parish'
            },
            name: 'Parafia',
            city: 'Lublin'
          },
          community: null,
          tags: [
            {
              id: 5,
              name: 'Rekolekcje adwentowe'
            }
          ]
        },
        {
          id: 2,
          title: 'Koncert Arki Noego',
          description: 'ajdhjkasbckds',
          organizationAt: 'Lublin 19.11.2019',
          image: null,
          parish: {
            id: 2,
            image: {
              id: 2,
              imageName: 'img_46552314_75e38578020fba81864216ec248f711f',
              imageSize: 22,
              updatedAt: '2018-12-11',
              extension: 'jpeg',
              discriminator: 'parish'
            },
            name: 'Parafia',
            city: 'Lublin'
          },
          community: null,
          tags: [
            {
              id: 5,
              name: 'Rekolekcje adwentowe'
            }
          ]
        },
        {
          id: 3,
          title: 'Piknik charytatywny',
          description: 'ajdhjkasbckds',
          organizationAt: 'Lublin 19.11.2019',
          image: null,
          parish: {
            id: 3,
            image: {
              id: 3,
              imageName: 'img_46552314_75e38578020fba81864216ec248f711f',
              imageSize: 22,
              updatedAt: '2018-12-11',
              extension: 'jpeg',
              discriminator: 'parish'
            },
            name: 'Parafia',
            city: 'Lublin'
          },
          community: null,
          tags: [
            {
              id: 5,
              name: 'Rekolekcje adwentowe'
            }
          ]
        }
       ]
      })
    );
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should load events list', () => {
    component.ngOnInit();
    expect(store.dispatch).toHaveBeenCalledWith(new LoadEventsList());
    component.eventsList$.pipe(first()).subscribe(data => {
      expect(data).toBeDefined();
    });
  });
  it('should navigate to details', () => {
    component.onNavigateToDetails(1);
    expect(spyObj.navigate).toHaveBeenCalledWith([`details/${1}`], {relativeTo: route});
  });
});
