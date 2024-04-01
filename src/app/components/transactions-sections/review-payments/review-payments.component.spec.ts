import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewPaymentsComponent } from './review-payments.component';

describe('ReviewPaymentsComponent', () => {
  let component: ReviewPaymentsComponent;
  let fixture: ComponentFixture<ReviewPaymentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewPaymentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
