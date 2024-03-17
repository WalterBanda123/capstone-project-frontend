import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleDeedComponent } from './title-deed.component';

describe('TitleDeedComponent', () => {
  let component: TitleDeedComponent;
  let fixture: ComponentFixture<TitleDeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitleDeedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleDeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
