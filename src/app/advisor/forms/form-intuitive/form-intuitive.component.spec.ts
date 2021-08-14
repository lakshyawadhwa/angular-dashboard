import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormIntuitiveComponent } from './form-intuitive.component';

describe('FormIntuitiveComponent', () => {
  let component: FormIntuitiveComponent;
  let fixture: ComponentFixture<FormIntuitiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormIntuitiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormIntuitiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
