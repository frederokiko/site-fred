import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegosComponent } from './legos.component';

describe('LegosComponent', () => {
  let component: LegosComponent;
  let fixture: ComponentFixture<LegosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LegosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LegosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
