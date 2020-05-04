import { TestBed } from '@angular/core/testing';

import { MedicationStatementService } from './medication-statement.service';

describe('MedicationStatementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MedicationStatementService = TestBed.get(MedicationStatementService);
    expect(service).toBeTruthy();
  });
});
