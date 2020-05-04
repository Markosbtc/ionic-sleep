import { TestBed } from '@angular/core/testing';

import { MedicationRequestService } from './medication-request.service';

describe('MedicationRequestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MedicationRequestService = TestBed.get(MedicationRequestService);
    expect(service).toBeTruthy();
  });
});
