import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserQueryFormComponent } from './user-query-form.component';

describe('UserQueryFormComponent', () => {
  let component: UserQueryFormComponent;
  let fixture: ComponentFixture<UserQueryFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserQueryFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserQueryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
