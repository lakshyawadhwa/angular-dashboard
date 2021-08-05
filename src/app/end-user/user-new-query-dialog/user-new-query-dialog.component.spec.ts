import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserNewQueryDialogComponent } from './user-new-query-dialog.component';

describe('UserNewQueryDialogComponent', () => {
  let component: UserNewQueryDialogComponent;
  let fixture: ComponentFixture<UserNewQueryDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserNewQueryDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserNewQueryDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
