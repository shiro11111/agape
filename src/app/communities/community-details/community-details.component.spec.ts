import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityDetailsComponent } from './community-details.component';
import { MatCardModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Store, StoreModule } from '@ngrx/store';
import { AppState, reducers } from '../../app.reducers';
import { LoadCommunityPosts, LoadCommunityPostsSuccess } from '../communities.actions';
import { first } from 'rxjs/operators';
import { SetToolbarContentAction } from '../../toolbar/toolbar.actions';

describe('CommunityDetailsComponent', () => {
  let component: CommunityDetailsComponent;
  let fixture: ComponentFixture<CommunityDetailsComponent>;
  let store: Store<AppState>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CommunityDetailsComponent],
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
    store = TestBed.get(Store);

    spyOn(store, 'dispatch').and.callThrough();

    store.dispatch(new LoadCommunityPostsSuccess({
        maxResults: '5',
        subscriptions: [
          1,
          2,
          3,
          4
        ],
        items: [
          {
            id: 83,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac orci non ligula fringilla malesuada. Proin ' +
              'malesuada, sapien in finibus rhoncus, sapien neque ornare justo, et volutpat nulla ante eu orci. Sed viverra ante vel mollis ' +
              'gravida. Curabitur scelerisque nunc ac ultricies dignissim.',
            createdAt: '2018-12-18',
            isPinned: false,
            parish: null,
            community: {
              id: 1,
              image: {
                id: 1,
                imageName: 'bbhh',
                imageSize: 1233,
                updatedAt: '12 -13 - 00',
                extension: 'jpg',
                discriminator: 'sss'
              },
              name: 'Wpis wspólnoty',
              description: 'Lorem ipsum',
              city: 'Lublin',
              street: 'adf',
              buildingNumber: 'lala',
              apartmentNumber: '12',
              postCode: '12-222',
              postCity: 'lllll',
              createdAt: '2018-12-18'
            }
          },
          {
            id: 84,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac orci non ligula fringilla malesuada. Proin ' +
              'malesuada, sapien in finibus rhoncus, sapien neque ornare justo, et volutpat nulla ante eu orci. ' +
              'Sed viverra ante vel mollis ' +
              'gravida. Curabitur scelerisque nunc ac ultricies dignissim.',
            createdAt: '2018-12-18',
            isPinned: false,
            parish: null,
            community: {
              id: 2,
              name: 'Wpis wspólnoty',
              description: 'Lorem ipsum',
              city: 'Lublin',
              street: 'adf',
              buildingNumber: 'lala',
              apartmentNumber: '12',
              postCode: '12-222',
              postCity: 'lllll',
              createdAt: '2018-12-18'
            }
          }]
      })
    );
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should load communities posts', () => {
    component.ngOnInit();
    expect(store.dispatch).toHaveBeenCalledWith(new LoadCommunityPosts());
    component.communityPosts$.pipe(first()).subscribe(data => {
      expect(data).toBeDefined();
    });
    expect(store.dispatch).toHaveBeenCalledWith(new SetToolbarContentAction('Wspólnota'));
  });
});
