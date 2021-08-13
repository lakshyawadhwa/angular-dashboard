import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPrakritiSuggestionComponent } from './form-prakriti-suggestion.component';

describe('FormPrakritiSuggestionComponent', () => {
  let component: FormPrakritiSuggestionComponent;
  let fixture: ComponentFixture<FormPrakritiSuggestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormPrakritiSuggestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPrakritiSuggestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
