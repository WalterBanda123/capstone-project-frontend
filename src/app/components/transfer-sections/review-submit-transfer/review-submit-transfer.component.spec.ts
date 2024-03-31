import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewSubmitTransferComponent } from './review-submit-transfer.component';

describe('ReviewSubmitTransferComponent', () => {
  let component: ReviewSubmitTransferComponent;
  let fixture: ComponentFixture<ReviewSubmitTransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewSubmitTransferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewSubmitTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
