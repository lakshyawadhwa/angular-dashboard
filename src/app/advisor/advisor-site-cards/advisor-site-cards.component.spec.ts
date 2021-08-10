import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvisorSiteCardsComponent } from './advisor-site-cards.component';

describe('AdvisorSiteCardsComponent', () => {
  let component: AdvisorSiteCardsComponent;
  let fixture: ComponentFixture<AdvisorSiteCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvisorSiteCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvisorSiteCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
