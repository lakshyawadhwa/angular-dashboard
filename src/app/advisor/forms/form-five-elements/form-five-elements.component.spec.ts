import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFiveElementsComponent } from './form-five-elements.component';

describe('FormFiveElementsComponent', () => {
  let component: FormFiveElementsComponent;
  let fixture: ComponentFixture<FormFiveElementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormFiveElementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFiveElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
