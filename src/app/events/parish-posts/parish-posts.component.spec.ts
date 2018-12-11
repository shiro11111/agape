import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParishPostsComponent } from './parish-posts.component';

describe('ParishPostsComponent', () => {
  let component: ParishPostsComponent;
  let fixture: ComponentFixture<ParishPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParishPostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParishPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
