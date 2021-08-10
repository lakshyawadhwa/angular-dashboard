import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvisorQueryCardComponent } from './advisor-query-card.component';

describe('AdvisorQueryCardComponent', () => {
  let component: AdvisorQueryCardComponent;
  let fixture: ComponentFixture<AdvisorQueryCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvisorQueryCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvisorQueryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
