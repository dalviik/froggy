import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelIndicatorComponent } from './level-indicator.component';

describe('LevelIndicatorComponent', () => {
  let component: LevelIndicatorComponent;
  let fixture: ComponentFixture<LevelIndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LevelIndicatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
