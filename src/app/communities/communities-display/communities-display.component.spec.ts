import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunitiesDisplayComponent } from './communities-display.component';

describe('CommunitiesDisplayComponent', () => {
  let component: CommunitiesDisplayComponent;
  let fixture: ComponentFixture<CommunitiesDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommunitiesDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunitiesDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
