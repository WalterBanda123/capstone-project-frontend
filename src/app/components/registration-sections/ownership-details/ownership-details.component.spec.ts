import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnershipDetailsComponent } from './ownership-details.component';

describe('OwnershipDetailsComponent', () => {
  let component: OwnershipDetailsComponent;
  let fixture: ComponentFixture<OwnershipDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnershipDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnershipDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
