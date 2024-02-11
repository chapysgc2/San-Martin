import { TestBed } from '@angular/core/testing';

import { HistorialComprasService } from './historialcompras.service';

describe('HistorialComprasService', () => {
  let service: HistorialComprasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistorialComprasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
