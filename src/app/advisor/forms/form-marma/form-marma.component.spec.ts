import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMarmaComponent } from './form-marma.component';

describe('FormMarmaComponent', () => {
  let component: FormMarmaComponent;
  let fixture: ComponentFixture<FormMarmaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormMarmaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormMarmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
