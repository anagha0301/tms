import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitsuccessComponent } from './submitsuccess.component';

describe('SubmitsuccessComponent', () => {
  let component: SubmitsuccessComponent;
  let fixture: ComponentFixture<SubmitsuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmitsuccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitsuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
