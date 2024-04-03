import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateConflictCaseComponent } from './create-conflict-case.component';

describe('CreateConflictCaseComponent', () => {
  let component: CreateConflictCaseComponent;
  let fixture: ComponentFixture<CreateConflictCaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateConflictCaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateConflictCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
