import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvisorQueriesComponent } from './advisor-queries.component';

describe('AdvisorQueriesComponent', () => {
  let component: AdvisorQueriesComponent;
  let fixture: ComponentFixture<AdvisorQueriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvisorQueriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvisorQueriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
