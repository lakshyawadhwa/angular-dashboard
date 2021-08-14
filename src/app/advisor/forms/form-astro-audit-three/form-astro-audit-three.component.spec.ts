import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAstroAuditThreeComponent } from './form-astro-audit-three.component';

describe('FormAstroAuditThreeComponent', () => {
  let component: FormAstroAuditThreeComponent;
  let fixture: ComponentFixture<FormAstroAuditThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAstroAuditThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAstroAuditThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
