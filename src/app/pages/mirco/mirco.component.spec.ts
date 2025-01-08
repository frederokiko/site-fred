import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MircoComponent } from './mirco.component';

describe('MircoComponent', () => {
  let component: MircoComponent;
  let fixture: ComponentFixture<MircoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MircoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MircoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
