import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvisorQueryViewComponent } from './advisor-query-view.component';

describe('AdvisorQueryViewComponent', () => {
  let component: AdvisorQueryViewComponent;
  let fixture: ComponentFixture<AdvisorQueryViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvisorQueryViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvisorQueryViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
