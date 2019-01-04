import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ParishCommunitiesComponent } from './parish-communities.component';
import { MatCardModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Store, StoreModule } from '@ngrx/store';
import { AppState, reducers } from '../../app.reducers';
import { LoadCommunities, LoadCommunitiesSuccess } from '../parish.actions';
import { first } from 'rxjs/operators';
import { TruncatePipe } from '../truncate-pipe';
import { of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

describe('ParishCommunitiesComponent', () => {
  let component: ParishCommunitiesComponent;
  let fixture: ComponentFixture<ParishCommunitiesComponent>;
  let store: Store<AppState>;
  let route: ActivatedRoute;

  const spyObj = jasmine.createSpyObj('Router', ['navigate']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ParishCommunitiesComponent, TruncatePipe],
      imports: [
        BrowserAnimationsModule,
        MatCardModule,
        StoreModule.forRoot(reducers)
      ],
      providers: [
        { provide: Router, useValue: spyObj },
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ id: 1 }),
          },
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    store = TestBed.get(Store);
    fixture = TestBed.createComponent(ParishCommunitiesComponent);
    route = TestBed.get(ActivatedRoute);
    component = fixture.componentInstance;
    fixture.detectChanges();

    spyOn(store, 'dispatch').and.callThrough();

    store.dispatch(new LoadCommunitiesSuccess({
        maxResults: '27',
        subscriptions: [
          1,
          2,
          3,
          4
        ],
        items: [
          {
            id: 1,
            image: {
              id: 1,
              imageName: 'img_46552314_75e38578020fba81864216ec248f711f',
              imageSize: 22,
              updatedAt: '2018-12-11',
              extension: 'jpeg',
              discriminator: 'parish'
            },
            name: 'Koło różańcowe',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed tellus ex. Praesent aliquet ex eget metus ' +
              'tristique bibendum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed tellus ex. Praesent aliquet ex eget ' +
              'metus tristique bibendumLorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed tellus ex. Praesent aliquet ex ' +
              'eget metus tristique bibendum.',
            createdAt: '14-12-2018'
          },
          {
            id: 2,
            image: {
              id: 2,
              imageName: 'img_46552314_75e38578020fba81864216ec248f711f',
              imageSize: 22,
              updatedAt: '2018-12-11',
              extension: 'jpeg',
              discriminator: 'parish'
            },
            name: 'Oaza',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed tellus ex. Praesent aliquet ex eget metus ' +
              'tristique bibendum.',
            createdAt: '14-12-2018'
          },
          {
            id: 3,
            image: {
              id: 3,
              imageName: 'img_46552314_75e38578020fba81864216ec248f711f',
              imageSize: 22,
              updatedAt: '2018-12-11',
              extension: 'jpeg',
              discriminator: 'parish'
            },
            name: 'Schola młodzieżowa',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed tellus ex. Praesent aliquet ex eget ' +
              'metus Aliquam ornare sem quis lacinia elementum.',
            createdAt: '14-12-2018'
          }
        ]
      })
    );
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load community list', () => {
    component.ngOnInit();
    expect(store.dispatch).toHaveBeenCalledWith(new LoadCommunities());
    component.communityList$.pipe(first()).subscribe(data => {
      expect(data).toBeDefined();
    });
  });

  it('should navigate to details', () => {
    component.onNavigateToDetails(1);
    expect(spyObj.navigate).toHaveBeenCalledWith([`../../communities/details/${1}`], { relativeTo: route });
  });
});


