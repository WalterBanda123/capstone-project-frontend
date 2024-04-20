import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyPlansComponent } from './survey-plans.component';

describe('SurveyPlansComponent', () => {
  let component: SurveyPlansComponent;
  let fixture: ComponentFixture<SurveyPlansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurveyPlansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
