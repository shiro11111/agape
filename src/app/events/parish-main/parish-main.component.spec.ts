import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParishMainComponent } from './parish-main.component';

describe('ParishMainComponent', () => {
  let component: ParishMainComponent;
  let fixture: ComponentFixture<ParishMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParishMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParishMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
