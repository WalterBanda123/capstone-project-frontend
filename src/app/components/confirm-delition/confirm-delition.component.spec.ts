import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmDelitionComponent } from './confirm-delition.component';

describe('ConfirmDelitionComponent', () => {
  let component: ConfirmDelitionComponent;
  let fixture: ComponentFixture<ConfirmDelitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmDelitionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmDelitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
