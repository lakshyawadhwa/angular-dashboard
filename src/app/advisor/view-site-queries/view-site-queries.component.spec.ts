import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSiteQueriesComponent } from './view-site-queries.component';

describe('ViewSiteQueriesComponent', () => {
  let component: ViewSiteQueriesComponent;
  let fixture: ComponentFixture<ViewSiteQueriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSiteQueriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSiteQueriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
