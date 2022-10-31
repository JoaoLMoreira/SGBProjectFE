import { TestBed } from '@angular/core/testing';

import { BovinoService } from './bovino.service';

describe('BovinoService', () => {
  let service: BovinoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BovinoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
