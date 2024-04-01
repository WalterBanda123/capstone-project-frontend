import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionTermsComponent } from './transaction-terms.component';

describe('TransactionTermsComponent', () => {
  let component: TransactionTermsComponent;
  let fixture: ComponentFixture<TransactionTermsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionTermsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionTermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
