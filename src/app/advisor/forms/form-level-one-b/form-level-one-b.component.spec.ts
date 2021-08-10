import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormLevelOneBComponent } from './form-level-one-b.component';

describe('FormLevelOneBComponent', () => {
  let component: FormLevelOneBComponent;
  let fixture: ComponentFixture<FormLevelOneBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormLevelOneBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormLevelOneBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
