import { TestBed } from '@angular/core/testing';

import { DecourseService } from './decourse.service';

describe('DecourseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DecourseService = TestBed.get(DecourseService);
    expect(service).toBeTruthy();
  });
});
