import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMvRemediesComponent } from './form-mv-remedies.component';

describe('FormMvRemediesComponent', () => {
  let component: FormMvRemediesComponent;
  let fixture: ComponentFixture<FormMvRemediesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormMvRemediesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormMvRemediesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
