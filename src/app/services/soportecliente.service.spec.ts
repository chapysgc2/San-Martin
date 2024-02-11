import { TestBed } from '@angular/core/testing';

import { SoporteClienteService } from './soportecliente.service';

describe('SoporteClienteService', () => {
  let service: SoporteClienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SoporteClienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
