import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormLevelOneComponent } from './form-level-one.component';

describe('FormLevelOneComponent', () => {
  let component: FormLevelOneComponent;
  let fixture: ComponentFixture<FormLevelOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormLevelOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormLevelOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
