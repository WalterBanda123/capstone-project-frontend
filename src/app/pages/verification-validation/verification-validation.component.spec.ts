import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificationValidationComponent } from './verification-validation.component';

describe('VerificationValidationComponent', () => {
  let component: VerificationValidationComponent;
  let fixture: ComponentFixture<VerificationValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerificationValidationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerificationValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
