import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunitiesDisplayComponent } from './communities-display.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatExpansionModule } from '@angular/material';
import { Store, StoreModule } from '@ngrx/store';
import { AppState, reducers } from '../../app.reducers';
import { LoadCommunities, LoadCommunitiesSuccess } from '../../events/parish.actions';
import { first } from 'rxjs/operators';

describe('CommunitiesDisplayComponent', () => {
  let component: CommunitiesDisplayComponent;
  let fixture: ComponentFixture<CommunitiesDisplayComponent>;
  let store: Store<AppState>;

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
    store = TestBed.get(Store);

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
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed tellus ex. Praesent aliquet ex eget' +
            ' metus Aliquam ornare sem quis lacinia elementum.',
          createdAt: '14-12-2018'
        }
      ]
    })
    );
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load communities list', () => {
    component.ngOnInit();
    expect(store.dispatch).toHaveBeenCalledWith(new LoadCommunities());
    component.display$.pipe(first()).subscribe(data => {
      expect(data).toBeDefined();
    });
  });
});



