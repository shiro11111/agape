import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParishDisplayComponent } from './parish-display.component';

describe('ParishDisplayComponent', () => {
  let component: ParishDisplayComponent;
  let fixture: ComponentFixture<ParishDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParishDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParishDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
