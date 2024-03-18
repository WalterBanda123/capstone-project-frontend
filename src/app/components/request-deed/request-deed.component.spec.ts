import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestDeedComponent } from './request-deed.component';

describe('RequestDeedComponent', () => {
  let component: RequestDeedComponent;
  let fixture: ComponentFixture<RequestDeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestDeedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestDeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
