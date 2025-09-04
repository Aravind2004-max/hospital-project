import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionDetails } from './admission-details';

describe('AdmissionDetails', () => {
  let component: AdmissionDetails;
  let fixture: ComponentFixture<AdmissionDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmissionDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmissionDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
