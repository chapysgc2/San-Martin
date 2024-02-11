import { TestBed } from '@angular/core/testing';

import { SeguimientoPedidosService } from './seguimientopedidos.service';

describe('SeguimientoPedidosService', () => {
  let service: SeguimientoPedidosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeguimientoPedidosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
