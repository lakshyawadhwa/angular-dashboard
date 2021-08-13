import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPrakritiBuildingComponent } from './form-prakriti-building.component';

describe('FormPrakritiBuildingComponent', () => {
  let component: FormPrakritiBuildingComponent;
  let fixture: ComponentFixture<FormPrakritiBuildingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormPrakritiBuildingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPrakritiBuildingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
