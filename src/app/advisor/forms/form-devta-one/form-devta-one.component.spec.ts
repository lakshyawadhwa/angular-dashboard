import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDevtaOneComponent } from './form-devta-one.component';

describe('FormDevtaOneComponent', () => {
  let component: FormDevtaOneComponent;
  let fixture: ComponentFixture<FormDevtaOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormDevtaOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDevtaOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
