import { TestBed } from '@angular/core/testing';

import { FroggyService } from './froggy.service';

describe('FroggyService', () => {
  let service: FroggyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FroggyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
