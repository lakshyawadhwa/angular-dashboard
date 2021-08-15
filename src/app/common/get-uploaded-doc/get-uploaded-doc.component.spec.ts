import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetUploadedDocComponent } from './get-uploaded-doc.component';

describe('GetUploadedDocComponent', () => {
  let component: GetUploadedDocComponent;
  let fixture: ComponentFixture<GetUploadedDocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetUploadedDocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetUploadedDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
