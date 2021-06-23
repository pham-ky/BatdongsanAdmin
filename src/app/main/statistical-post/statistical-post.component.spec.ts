import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticalPostComponent } from './statistical-post.component';

describe('StatisticalPostComponent', () => {
  let component: StatisticalPostComponent;
  let fixture: ComponentFixture<StatisticalPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatisticalPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticalPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
