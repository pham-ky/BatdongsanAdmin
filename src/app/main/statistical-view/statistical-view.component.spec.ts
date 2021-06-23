import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticalViewComponent } from './statistical-view.component';

describe('StatisticalViewComponent', () => {
  let component: StatisticalViewComponent;
  let fixture: ComponentFixture<StatisticalViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatisticalViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticalViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
