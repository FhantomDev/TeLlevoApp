import { TestBed } from '@angular/core/testing';

import { PersistenciaService } from './persistencia.service';

describe('PersistenciaService', () => {
  let service: PersistenciaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersistenciaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
