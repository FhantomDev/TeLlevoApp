import { TestBed } from '@angular/core/testing';

import { RegistroViajeService } from './registro-viaje.service';

describe('RegistroViajeService', () => {
  let service: RegistroViajeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistroViajeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
