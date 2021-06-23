import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticalNapComponent } from './statistical-nap.component';

describe('StatisticalNapComponent', () => {
  let component: StatisticalNapComponent;
  let fixture: ComponentFixture<StatisticalNapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatisticalNapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticalNapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
