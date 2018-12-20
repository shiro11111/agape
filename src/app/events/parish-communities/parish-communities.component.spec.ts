import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParishCommunitiesComponent } from './parish-communities.component';

describe('ParishCommunitiesComponent', () => {
  let component: ParishCommunitiesComponent;
  let fixture: ComponentFixture<ParishCommunitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParishCommunitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParishCommunitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
