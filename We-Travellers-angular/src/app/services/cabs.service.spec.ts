import { TestBed } from '@angular/core/testing';

import { CabsService } from './cabs.service';

describe('CabsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CabsService = TestBed.get(CabsService);
    expect(service).toBeTruthy();
  });
});
