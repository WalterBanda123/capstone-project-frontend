import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConflictCaseComponent } from './conflict-case.component';

describe('ConflictCaseComponent', () => {
  let component: ConflictCaseComponent;
  let fixture: ComponentFixture<ConflictCaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConflictCaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConflictCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
