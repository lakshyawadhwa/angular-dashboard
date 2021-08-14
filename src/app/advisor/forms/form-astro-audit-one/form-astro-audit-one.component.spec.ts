import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAstroAuditOneComponent } from './form-astro-audit-one.component';

describe('FormAstroAuditOneComponent', () => {
  let component: FormAstroAuditOneComponent;
  let fixture: ComponentFixture<FormAstroAuditOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAstroAuditOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAstroAuditOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
