import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormObjectsComponent } from './form-objects.component';

describe('FormObjectsComponent', () => {
  let component: FormObjectsComponent;
  let fixture: ComponentFixture<FormObjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormObjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormObjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
