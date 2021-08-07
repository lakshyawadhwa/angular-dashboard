import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientIdDialogComponent } from './client-id-dialog.component';

describe('ClientIdDialogComponent', () => {
  let component: ClientIdDialogComponent;
  let fixture: ComponentFixture<ClientIdDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientIdDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientIdDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
