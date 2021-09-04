import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewResolvedQueriesComponent } from './view-resolved-queries.component';

describe('ViewResolvedQueriesComponent', () => {
  let component: ViewResolvedQueriesComponent;
  let fixture: ComponentFixture<ViewResolvedQueriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewResolvedQueriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewResolvedQueriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
