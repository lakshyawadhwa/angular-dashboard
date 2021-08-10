import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvisorUserLayoutComponent } from './advisor-user-layout.component';

describe('AdvisorUserLayoutComponent', () => {
  let component: AdvisorUserLayoutComponent;
  let fixture: ComponentFixture<AdvisorUserLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvisorUserLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvisorUserLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
