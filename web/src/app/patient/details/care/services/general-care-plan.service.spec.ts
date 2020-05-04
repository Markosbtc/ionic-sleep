import { TestBed } from '@angular/core/testing';

import { GeneralCarePlanService } from './general-care-plan.service';

describe('GeneralCarePlanService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GeneralCarePlanService = TestBed.get(GeneralCarePlanService);
    expect(service).toBeTruthy();
  });
});
