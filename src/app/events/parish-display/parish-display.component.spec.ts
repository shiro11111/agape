import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParishDisplayComponent } from './parish-display.component';
import { MatCardModule, MatExpansionModule } from '@angular/material';
import { Store, StoreModule } from '@ngrx/store';
import { AppState, reducers } from '../../app.reducers';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoadParish, LoadParishSuccess } from '../parish.actions';
import { first } from 'rxjs/operators';

describe('ParishDisplayComponent', () => {
  let component: ParishDisplayComponent;
  let fixture: ComponentFixture<ParishDisplayComponent>;
  let store: Store<AppState>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ParishDisplayComponent],
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
    fixture = TestBed.createComponent(ParishDisplayComponent);
    store = TestBed.get(Store);
    component = fixture.componentInstance;

    spyOn(store, 'dispatch').and.callThrough();

    store.dispatch(new LoadParishSuccess({
      id: 1,
        image: {
        id: 1,
          imageName: 'img_46552314_75e38578020fba81864216ec248f711f',
          imageSize: 22,
          updatedAt: '2018-12-11',
          extension: 'jpeg',
          discriminator: 'parish'
      },
      iskkNumber: 1231,
        name: 'Parafia św. Łazarza',
        dedicated: 'assd',
        city: 'Lublin',
        street: 'Okulickiego 6A',
        buildingNumber: '12',
        apartmentNumber: '123',
        postCode: '12-343',
        postCity: 'asdfg',
        phoneNumber: '1213245',
        deanery: {
        id: 1,
          name: 'Dekanat 2',
          diocese: {
          id: 1,
            name: 'Diecezja 1'
        }
      },
      parishType: {
        id: 1,
          name: 'Parafia'
      },
      province: {
        id: 1,
          name: 'Lubelskie',
          code: 6
      }
    }));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load parish details', () => {
    component.ngOnInit();
    expect(store.dispatch).toHaveBeenCalledWith(new LoadParish());
    component.display$.pipe(first()).subscribe(data => {
      expect(data).toBeDefined();
    });
  });
});
