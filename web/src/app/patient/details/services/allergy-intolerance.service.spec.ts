import { TestBed } from '@angular/core/testing';

import { AllergyIntoleranceService } from './allergy-intolerance.service';

describe('AllergyIntoleranceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AllergyIntoleranceService = TestBed.get(AllergyIntoleranceService);
    expect(service).toBeTruthy();
  });
});
