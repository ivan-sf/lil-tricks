import { TestBed } from '@angular/core/testing';

import { TrickService } from './trick.service';

describe('TrickService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrickService = TestBed.get(TrickService);
    expect(service).toBeTruthy();
  });
});
