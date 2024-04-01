import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentSearchedTitleComponent } from './recent-searched-title.component';

describe('RecentSearchedTitleComponent', () => {
  let component: RecentSearchedTitleComponent;
  let fixture: ComponentFixture<RecentSearchedTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentSearchedTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentSearchedTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
