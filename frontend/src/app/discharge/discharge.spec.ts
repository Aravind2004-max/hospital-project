import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Discharge } from './discharge';

describe('Discharge', () => {
  let component: Discharge;
  let fixture: ComponentFixture<Discharge>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Discharge]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Discharge);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
