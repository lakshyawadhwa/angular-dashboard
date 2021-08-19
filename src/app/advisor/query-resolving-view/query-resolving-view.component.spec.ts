import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryResolvingViewComponent } from './query-resolving-view.component';

describe('QueryResolvingViewComponent', () => {
  let component: QueryResolvingViewComponent;
  let fixture: ComponentFixture<QueryResolvingViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueryResolvingViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryResolvingViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
