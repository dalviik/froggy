import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LilyPadComponent } from './lily-pad.component';

describe('LilyPadComponent', () => {
  let component: LilyPadComponent;
  let fixture: ComponentFixture<LilyPadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LilyPadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LilyPadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
