import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvisorSitesComponent } from './advisor-sites.component';

describe('AdvisorSitesComponent', () => {
  let component: AdvisorSitesComponent;
  let fixture: ComponentFixture<AdvisorSitesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvisorSitesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvisorSitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
