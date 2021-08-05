import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSiteFormComponent } from './new-site-form.component';

describe('NewSiteFormComponent', () => {
  let component: NewSiteFormComponent;
  let fixture: ComponentFixture<NewSiteFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewSiteFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSiteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
