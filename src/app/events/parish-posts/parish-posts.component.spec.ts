import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParishPostsComponent } from './parish-posts.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material';
import { Store, StoreModule } from '@ngrx/store';
import { AppState, reducers } from '../../app.reducers';
import { LoadPostsList, LoadPostsListSuccess } from '../parish.actions';
import { first } from 'rxjs/operators';

describe('ParishPostsComponent', () => {
  let component: ParishPostsComponent;
  let fixture: ComponentFixture<ParishPostsComponent>;
  let store: Store<AppState>;

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
    store = TestBed.get(Store);
    fixture = TestBed.createComponent(ParishPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    spyOn(store, 'dispatch').and.callThrough();

    store.dispatch(new LoadPostsListSuccess({
      maxResults: '2',
      subscriptions: [
        1,
        2,
        3,
        4
      ],
      items: [
        {
          id: 1,
          createdAt: '13-12-2018',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu viverra leo. Vestibulum libero metus, blandit sit amet mattis at, convallis eget enim. Maecenas lacinia libero in odio molestie, et dapibus sem eleifend. Nullam a molestie est, ut venenatis nisl. Donec quis tempus diam. ',
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
          community: null
        },
        {
          id: 2,
          createdAt: '13-12-2018',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu viverra leo. Vestibulum libero metus, blandit sit amet mattis at, convallis eget enim. Maecenas lacinia libero in odio molestie, et dapibus sem eleifend. Nullam a molestie est, ut venenatis nisl. Donec quis tempus diam. ',
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
          community: null
        },
        {
          id: 3,
          createdAt: '13-12-2018',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu viverra leo. Vestibulum libero metus, blandit sit amet mattis at, convallis eget enim. Maecenas lacinia libero in odio molestie, et dapibus sem eleifend. Nullam a molestie est, ut venenatis nisl. Donec quis tempus diam. ',
          parish: {
            id: 3,
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
          community: null
        },
        {
          id: 4,
          createdAt: '13-12-2018',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu viverra leo. Vestibulum libero metus, ' +
            'blandit sit amet mattis at, convallis eget enim. Maecenas lacinia libero in odio molestie, et dapibus sem eleifend. Nullam a ' +
            'molestie est, ut venenatis nisl. Donec quis tempus diam. ',
          parish: {
            id: 4,
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
          community: null
          }
        ]
      })
    );
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should load parish posts', () => {
    component.ngOnInit();
    expect(store.dispatch).toHaveBeenCalledWith(new LoadPostsList());
    component.list$.pipe(first()).subscribe(data => {
      expect(data).toBeDefined();
    });
  });
});
