import { TestBed } from '@angular/core/testing';

import { SleepObservationService } from './sleep-observation.service';

describe('SleepObservationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SleepObservationService = TestBed.get(SleepObservationService);
    expect(service).toBeTruthy();
  });
});
