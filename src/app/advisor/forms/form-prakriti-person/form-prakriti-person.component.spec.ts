import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPrakritiPersonComponent } from './form-prakriti-person.component';

describe('FormPrakritiPersonComponent', () => {
  let component: FormPrakritiPersonComponent;
  let fixture: ComponentFixture<FormPrakritiPersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormPrakritiPersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPrakritiPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
