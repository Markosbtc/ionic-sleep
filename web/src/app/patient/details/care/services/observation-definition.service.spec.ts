import { TestBed } from '@angular/core/testing';

import { ObservationDefinitionService } from './observation-definition.service';

describe('ObservationDefinitionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ObservationDefinitionService = TestBed.get(ObservationDefinitionService);
    expect(service).toBeTruthy();
  });
});
