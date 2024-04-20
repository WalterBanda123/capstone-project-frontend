import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxAssessmentsComponent } from './tax-assessments.component';

describe('TaxAssessmentsComponent', () => {
  let component: TaxAssessmentsComponent;
  let fixture: ComponentFixture<TaxAssessmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxAssessmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxAssessmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
