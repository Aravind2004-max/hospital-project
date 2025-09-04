import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAd } from './update-ad';

describe('UpdateAd', () => {
  let component: UpdateAd;
  let fixture: ComponentFixture<UpdateAd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateAd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateAd);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
