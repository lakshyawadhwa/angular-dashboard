import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormUtilityComponent } from './form-utility.component';

describe('FormUtilityComponent', () => {
  let component: FormUtilityComponent;
  let fixture: ComponentFixture<FormUtilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormUtilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormUtilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
