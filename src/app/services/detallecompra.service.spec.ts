import { TestBed } from '@angular/core/testing';

import { DetalleCompraService } from './detallecompra.service';

describe('DetalleCompraService', () => {
  let service: DetalleCompraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetalleCompraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
