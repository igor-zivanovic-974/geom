import { TestBed } from '@angular/core/testing';

import { BrinloadService } from './brinload.service';

describe('BrinloadService', () => {
  let service: BrinloadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrinloadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
