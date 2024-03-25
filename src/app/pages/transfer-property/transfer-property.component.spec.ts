import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferPropertyComponent } from './transfer-property.component';

describe('TransferPropertyComponent', () => {
  let component: TransferPropertyComponent;
  let fixture: ComponentFixture<TransferPropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransferPropertyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
