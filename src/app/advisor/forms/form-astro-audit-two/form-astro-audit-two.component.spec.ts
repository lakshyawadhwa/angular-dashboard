import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAstroAuditTwoComponent } from './form-astro-audit-two.component';

describe('FormAstroAuditTwoComponent', () => {
  let component: FormAstroAuditTwoComponent;
  let fixture: ComponentFixture<FormAstroAuditTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAstroAuditTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAstroAuditTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
