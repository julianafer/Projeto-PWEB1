import { TestBed } from '@angular/core/testing';

import { DiariaService } from './diaria.service';

describe('DiariaService', () => {
  let service: DiariaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiariaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
