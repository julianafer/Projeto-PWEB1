import { TestBed } from '@angular/core/testing';

import { DiariaFirestoreService } from './diaria-firestore.service';

describe('DiariaFirestoreService', () => {
  let service: DiariaFirestoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiariaFirestoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
