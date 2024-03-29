import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalRegulatoryComponent } from './legal-regulatory.component';

describe('LegalRegulatoryComponent', () => {
  let component: LegalRegulatoryComponent;
  let fixture: ComponentFixture<LegalRegulatoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegalRegulatoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LegalRegulatoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
