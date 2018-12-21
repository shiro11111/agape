import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunitiesMainComponent } from './communities-main.component';

describe('CommunitiesMainComponent', () => {
  let component: CommunitiesMainComponent;
  let fixture: ComponentFixture<CommunitiesMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommunitiesMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunitiesMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
