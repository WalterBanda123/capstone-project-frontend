import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionOneConflictComponent } from './section-one-conflict.component';

describe('SectionOneConflictComponent', () => {
  let component: SectionOneConflictComponent;
  let fixture: ComponentFixture<SectionOneConflictComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionOneConflictComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionOneConflictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
