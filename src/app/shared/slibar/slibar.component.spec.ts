import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlibarComponent } from './slibar.component';

describe('SlibarComponent', () => {
  let component: SlibarComponent;
  let fixture: ComponentFixture<SlibarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlibarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlibarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
