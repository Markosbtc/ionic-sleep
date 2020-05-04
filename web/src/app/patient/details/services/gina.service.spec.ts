import { TestBed } from '@angular/core/testing';

import { GinaService } from './gina.service';

describe('GinaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GinaService = TestBed.get(GinaService);
    expect(service).toBeTruthy();
  });
});
