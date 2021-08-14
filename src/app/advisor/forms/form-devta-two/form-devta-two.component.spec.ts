import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDevtaTwoComponent } from './form-devta-two.component';

describe('FormDevtaTwoComponent', () => {
  let component: FormDevtaTwoComponent;
  let fixture: ComponentFixture<FormDevtaTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormDevtaTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDevtaTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
