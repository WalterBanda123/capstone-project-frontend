import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesTemplateComponent } from './features-template.component';

describe('FeaturesTemplateComponent', () => {
  let component: FeaturesTemplateComponent;
  let fixture: ComponentFixture<FeaturesTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturesTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturesTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
