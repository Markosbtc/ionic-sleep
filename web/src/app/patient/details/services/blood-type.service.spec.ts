import { TestBed } from '@angular/core/testing';

import { BloodTypeService } from './blood-type.service';

describe('BloodTypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BloodTypeService = TestBed.get(BloodTypeService);
    expect(service).toBeTruthy();
  });
});
